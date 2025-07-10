// js/app.js - Enhanced with session management and settings
import { VerbSelector } from './verbSelector.js';
import { AnswerValidator } from './answerValidator.js';

class VerbTrainer {
  constructor() {
    this.verbSelector = new VerbSelector();
    this.currentMode = 'setup'; // setup, settings, practice, summary
    this.currentExercise = null;
    
    // Load user settings from localStorage or use defaults
    this.userSettings = this.loadUserSettings();
    
    this.sessionSettings = {
      category: 'essential',
      tense: 'present',
      sessionType: this.userSettings.defaultSessionType, // 'verbs' or 'time'
      verbCount: this.userSettings.defaultVerbCount, // 5, 10, 15, 20
      timeLimit: this.userSettings.defaultTimeLimit // 1, 3, 5, 10 minutes
    };
    
    // Session tracking
    this.sessionStartTime = null;
    this.sessionEndTime = null;
    this.questionsAnswered = 0;
    this.correctAnswers = 0;
    this.sessionEnded = false;
    this.sessionTimer = null;
    
    this.categories = [
      { id: 'essential', name: 'Essential', desc: 'sein, haben, werden...' },
      { id: 'modal', name: 'Modal', desc: 'können, müssen, wollen...' },
      { id: 'regular', name: 'Regular', desc: 'machen, sagen, lernen...' },
      { id: 'strong', name: 'Strong', desc: 'gehen, nehmen, geben...' },
      { id: 'separable', name: 'Separable', desc: 'aufstehen, ankommen...' },
      { id: 'inseparable', name: 'Inseparable', desc: 'verstehen, beginnen...' },
      { id: 'ieren', name: '-ieren', desc: 'studieren, funktionieren...' },
      { id: 'all', name: 'All Verbs', desc: 'A mix of all verb categories' }
    ];

    this.tenses = [
      { id: 'present', name: 'Präsens', desc: 'Present tense' },
      { id: 'perfect', name: 'Perfekt', desc: 'Present perfect' },
      { id: 'preterite', name: 'Präteritum', desc: 'Simple past' },
      { id: 'imperative', name: 'Imperativ', desc: 'Commands' },
      { id: 'subjunctive1', name: 'Konjunktiv I', desc: 'Indirect speech' },
      { id: 'subjunctive2', name: 'Konjunktiv II', desc: 'Hypothetical/Polite' },
      { id: 'mix', name: 'Mix', desc: 'A mix of all tenses/moods' }
    ];

    this.init();
  }

  loadUserSettings() {
    const defaultSettings = {
      defaultSessionType: 'verbs',
      defaultVerbCount: 10,
      defaultTimeLimit: 5
    };
    
    try {
      const saved = localStorage.getItem('verbTrainerSettings');
      return saved ? { ...defaultSettings, ...JSON.parse(saved) } : defaultSettings;
    } catch (e) {
      return defaultSettings;
    }
  }

  saveUserSettings() {
    try {
      localStorage.setItem('verbTrainerSettings', JSON.stringify(this.userSettings));
    } catch (e) {
      console.warn('Could not save settings to localStorage');
    }
  }

  init() {
    this.render();
    this.attachEventListeners();
  }

  startSession() {
    this.sessionStartTime = Date.now();
    this.sessionEndTime = null;
    this.questionsAnswered = 0;
    this.correctAnswers = 0;
    this.sessionEnded = false;
    
    // Start timer for time-based sessions
    if (this.sessionSettings.sessionType === 'time') {
      this.startSessionTimer();
    }
  }

  startSessionTimer() {
    const timeLimit = this.sessionSettings.timeLimit * 60 * 1000; // Convert to milliseconds
    console.log(`Starting ${this.sessionSettings.timeLimit} minute timer`);
    
    // Main timer for session end
    this.sessionTimer = setTimeout(() => {
      console.log(`Time's up! ${this.sessionSettings.timeLimit} minutes elapsed`);
      this.endSession('time');
    }, timeLimit);
    
    // Update timer for live progress (every second for time-based sessions)
    this.updateTimer = setInterval(() => {
      if (this.sessionEnded) {
        clearInterval(this.updateTimer);
        return;
      }
      
      // Only update progress indicator for time-based sessions
      if (this.sessionSettings.sessionType === 'time' && this.currentMode === 'practice') {
        const progressElement = document.querySelector('.progress-indicator');
        if (progressElement) {
          const progress = this.getSessionProgress();
          const remaining = progress.total - progress.current;
          const isUrgent = remaining <= 60 && remaining > 0;
          
          // Update progress bar
          const progressFill = progressElement.querySelector('.progress-fill');
          const progressText = progressElement.querySelector('.progress-text');
          
          if (progressFill && progressText) {
            progressFill.style.width = `${progress.percentage}%`;
            progressFill.className = `progress-fill ${isUrgent ? 'urgent' : ''}`;
            progressText.textContent = `${this.formatTime(Math.max(0, remaining))} remaining`;
            progressText.className = `progress-text ${isUrgent ? 'urgent' : ''}`;
          }
        }
      }
    }, 1000);
  }

  endSession(reason = 'completed') {
    if (this.sessionEnded) return;
    
    console.log(`Session ending. Reason: ${reason}. Questions answered: ${this.questionsAnswered}. Correct: ${this.correctAnswers}`);
    
    this.sessionEnded = true;
    this.sessionEndTime = Date.now();
    
    // Clear all timers
    if (this.sessionTimer) {
      clearTimeout(this.sessionTimer);
      this.sessionTimer = null;
    }
    
    if (this.updateTimer) {
      clearInterval(this.updateTimer);
      this.updateTimer = null;
    }
    
    this.currentMode = 'summary';
    this.render();
    this.attachEventListeners();
  }

  checkSessionEnd() {
    if (this.sessionEnded) return;
    
    // Check if verb count reached
    if (this.sessionSettings.sessionType === 'verbs' && 
        this.questionsAnswered >= this.sessionSettings.verbCount) {
      console.log(`Session ended: ${this.questionsAnswered} verbs completed out of ${this.sessionSettings.verbCount}`);
      this.endSession('verbs');
      return true;
    }
    
    return false;
  }

  getSessionProgress() {
    if (this.sessionSettings.sessionType === 'verbs') {
      return {
        current: this.questionsAnswered,
        total: this.sessionSettings.verbCount,
        percentage: Math.min((this.questionsAnswered / this.sessionSettings.verbCount) * 100, 100)
      };
    } else {
      const elapsed = Date.now() - this.sessionStartTime;
      const total = this.sessionSettings.timeLimit * 60 * 1000;
      return {
        current: Math.floor(elapsed / 1000),
        total: this.sessionSettings.timeLimit * 60,
        percentage: Math.min((elapsed / total) * 100, 100)
      };
    }
  }

  formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }

  generateNewExercise() {
    if (this.sessionEnded) return null;
    
    const verb = this.verbSelector.selectNextVerb(
      this.sessionSettings.category, 
      this.sessionSettings.tense
    );
    
    if (!verb) return null;

    const pronoun = AnswerValidator.getRandomPronoun(this.sessionSettings.tense);
    const correctAnswers = verb.conjugations[this.sessionSettings.tense]?.[pronoun] || [];

    this.currentExercise = {
      verb,
      pronoun,
      correctAnswers,
      infinitive: verb.infinitive,
      english: verb.english,
      showAnswer: false,
      feedback: '',
      userInput: ''
    };

    return this.currentExercise;
  }

  checkAnswer(userInput) {
    if (!this.currentExercise || this.sessionEnded) return null;

    const result = AnswerValidator.validate(userInput, this.currentExercise.correctAnswers);
    
    this.verbSelector.recordAttempt(
      this.currentExercise.verb.infinitive, 
      this.sessionSettings.tense, 
      result.isCorrect
    );

    this.currentExercise.feedback = result.isCorrect ? 'correct' : 'incorrect';
    this.currentExercise.showAnswer = true;
    this.questionsAnswered++;
    
    if (result.isCorrect) {
      this.correctAnswers++;
    }

    // Check if session should end after this answer
    this.checkSessionEnd();

    return result;
  }

  renderProgressIndicator() {
    const progress = this.getSessionProgress();
    
    if (this.sessionSettings.sessionType === 'verbs') {
      // Verb count progress dots
      let dots = '';
      for (let i = 0; i < progress.total; i++) {
        const dotClass = i < progress.current ? 'progress-dot completed' : 'progress-dot';
        dots += `<div class="${dotClass}"></div>`;
      }
      return `
        <div class="progress-indicator">
          ${dots}
          <div class="progress-text">${progress.current}/${progress.total} verbs</div>
        </div>
      `;
    } else {
      // Time-based progress bar
      const remaining = progress.total - progress.current;
      const isUrgent = remaining <= 60 && remaining > 0; // Last minute
      
      return `
        <div class="progress-indicator">
          <div class="progress-bar">
            <div class="progress-fill ${isUrgent ? 'urgent' : ''}" style="width: ${progress.percentage}%"></div>
          </div>
          <div class="progress-text ${isUrgent ? 'urgent' : ''}">${this.formatTime(Math.max(0, remaining))} remaining</div>
        </div>
      `;
    }
  }

  renderSettingsScreen() {
    const isVerbMode = this.userSettings.defaultSessionType === 'verbs';
    
    return `
      <div class="setup-container">
        <div class="setup-card">
          <div class="setup-header">
            <h1 class="setup-title">Settings</h1>
            <p class="setup-subtitle">Customize your practice sessions</p>
          </div>

          <div class="setup-section">
            <div class="section-title">Session Type</div>
            <div class="setting-group">
              <label class="setting-option ${this.userSettings.defaultSessionType === 'verbs' ? 'selected' : ''}">
                <input type="radio" name="sessionType" value="verbs" ${this.userSettings.defaultSessionType === 'verbs' ? 'checked' : ''}>
                <span class="setting-label">Practice by Number of Verbs</span>
              </label>
              <label class="setting-option ${this.userSettings.defaultSessionType === 'time' ? 'selected' : ''}">
                <input type="radio" name="sessionType" value="time" ${this.userSettings.defaultSessionType === 'time' ? 'checked' : ''}>
                <span class="setting-label">Practice by Time Limit</span>
              </label>
            </div>
          </div>

          ${isVerbMode ? `
            <div class="setup-section" id="verb-count-section">
              <div class="section-title">Number of Verbs</div>
              <div class="setting-group">
                ${[5, 10, 15, 20].map(count => `
                  <label class="setting-option ${this.userSettings.defaultVerbCount === count ? 'selected' : ''}">
                    <input type="radio" name="verbCount" value="${count}" ${this.userSettings.defaultVerbCount === count ? 'checked' : ''}>
                    <span class="setting-label">${count} verbs</span>
                  </label>
                `).join('')}
              </div>
            </div>
          ` : `
            <div class="setup-section" id="time-limit-section">
              <div class="section-title">Time Limit</div>
              <div class="setting-group">
                ${[1, 3, 5, 10].map(time => `
                  <label class="setting-option ${this.userSettings.defaultTimeLimit === time ? 'selected' : ''}">
                    <input type="radio" name="timeLimit" value="${time}" ${this.userSettings.defaultTimeLimit === time ? 'checked' : ''}>
                    <span class="setting-label">${time} minute${time > 1 ? 's' : ''}</span>
                  </label>
                `).join('')}
              </div>
            </div>
          `}

          <div class="action-buttons">
            <button id="back-to-setup" class="show-btn">Back</button>
            <button id="save-settings" class="start-btn">Save Settings</button>
          </div>
        </div>
      </div>
    `;
  }

  renderSetupScreen() {
    return `
      <div class="setup-container">
        <div class="setup-card">
          <div class="setup-header">
            <h1 class="setup-title">German Verb Trainer</h1>
            <p class="setup-subtitle">Select your practice focus</p>
          </div>

          <div class="setup-section">
            <div class="section-title">Session Settings</div>
            <div class="session-preview">
              <div class="session-info">
                <span class="session-type">
                  ${this.userSettings.defaultSessionType === 'verbs' 
                    ? `${this.userSettings.defaultVerbCount} verbs` 
                    : `${this.userSettings.defaultTimeLimit} minute${this.userSettings.defaultTimeLimit > 1 ? 's' : ''}`}
                </span>
                <button id="open-settings" class="settings-btn">⚙️</button>
              </div>
            </div>
          </div>

          <div class="setup-section">
            <div class="dropdown-row">
              <div class="dropdown-group">
                <label class="dropdown-label">Verb Category</label>
                <select id="category-select" class="dropdown-select">
                  ${this.categories.map(category => `
                    <option value="${category.id}" ${this.sessionSettings.category === category.id ? 'selected' : ''}>
                      ${category.name} - ${category.desc}
                    </option>
                  `).join('')}
                </select>
              </div>

              <div class="dropdown-group">
                <label class="dropdown-label">Tense/Mood</label>
                <select id="tense-select" class="dropdown-select">
                  ${this.tenses.map(tense => `
                    <option value="${tense.id}" ${this.sessionSettings.tense === tense.id ? 'selected' : ''}>
                      ${tense.name} - ${tense.desc}
                    </option>
                  `).join('')}
                </select>
              </div>
            </div>
          </div>

          <button id="start-practice" class="start-btn">
            Start Practice
          </button>
        </div>
      </div>
    `;
  }

  renderPracticeScreen() {
    const exercise = this.currentExercise;
    if (!exercise) return '';

    return `
      <div class="practice-container">
        <!-- Header -->
        <div class="practice-header">
          <div class="header-content">
            <button id="back-to-setup" class="back-btn">
              ← Setup
            </button>
            
            <div class="header-info">
              ${this.categories.find(c => c.id === this.sessionSettings.category)?.name} • 
              ${this.tenses.find(t => t.id === this.sessionSettings.tense)?.name}
            </div>

            <div class="header-actions">
              <button id="show-stats" class="stats-btn">📊</button>
              <button id="end-session" class="stats-btn">⏹️</button>
            </div>
          </div>
        </div>

        <!-- Main Practice Area -->
        <div class="practice-main">
          <div class="practice-card">
            <!-- Progress indicator -->
            ${this.renderProgressIndicator()}

            <!-- Verb presentation -->
            <div class="verb-display ${exercise.showAnswer ? exercise.feedback : ''}">
              <div class="verb-main">
                ${exercise.infinitive} <span class="verb-english">${exercise.english}</span>
              </div>
              <div class="verb-pronoun ${exercise.pronoun === 'sie' ? 'pronoun-plural' : ''}">
                ${exercise.pronoun}
              </div>
            </div>

            <!-- Input area -->
            <div class="input-section">
              <input
                type="text"
                id="verb-input"
                value="${exercise.userInput}"
                placeholder="Type pronoun + verb (e.g., er geht)..."
                ${exercise.showAnswer ? 'disabled' : ''}
                class="verb-input ${exercise.feedback === 'correct' ? 'correct' : exercise.feedback === 'incorrect' ? 'incorrect' : ''}"
              />
            </div>

            ${exercise.showAnswer && (exercise.feedback === 'incorrect' || exercise.feedback === 'shown') ? `
              <div class="correct-answer">
                Correct: <span class="correct-answer-text">
                  ${exercise.correctAnswers.join(' / ')}
                </span>
              </div>
            ` : ''}

            <!-- Action buttons -->
            <div class="action-buttons">
              ${!exercise.showAnswer ? `
                <button id="check-answer" class="check-btn" ${!exercise.userInput.trim() ? 'disabled' : ''}>
                  Check
                </button>
                <button id="show-answer" class="show-btn">
                  Answer
                </button>
              ` : `
                <button id="next-verb" class="next-btn">
                  <span>Next Verb</span>
                  <span>→</span>
                </button>
              `}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  renderSummaryScreen() {
    const sessionTime = this.sessionEndTime - this.sessionStartTime;
    const accuracy = this.questionsAnswered > 0 ? (this.correctAnswers / this.questionsAnswered * 100) : 0;
    const sessionStats = this.verbSelector.getSessionStats();

    return `
      <div class="setup-container">
        <div class="setup-card">
          <div class="setup-header">
            <h1 class="setup-title">Session Complete!</h1>
            <p class="setup-subtitle">Well done on your practice session</p>
          </div>

          <div class="summary-stats">
            <div class="stat-item">
              <div class="stat-value">${this.questionsAnswered}</div>
              <div class="stat-label">Verbs Practiced</div>
            </div>
            <div class="stat-item">
              <div class="stat-value">${this.correctAnswers}</div>
              <div class="stat-label">Correct Answers</div>
            </div>
            <div class="stat-item">
              <div class="stat-value">${accuracy.toFixed(1)}%</div>
              <div class="stat-label">Accuracy</div>
            </div>
            <div class="stat-item">
              <div class="stat-value">${this.formatTime(Math.floor(sessionTime / 1000))}</div>
              <div class="stat-label">Session Time</div>
            </div>
          </div>

          <div class="action-buttons">
            <button id="back-to-setup" class="show-btn">New Session</button>
            <button id="practice-again" class="start-btn">Practice Again</button>
          </div>
        </div>
      </div>
    `;
  }

  render() {
    const app = document.getElementById('app');
    
    switch (this.currentMode) {
      case 'setup':
        app.innerHTML = this.renderSetupScreen();
        break;
      case 'settings':
        app.innerHTML = this.renderSettingsScreen();
        break;
      case 'practice':
        app.innerHTML = this.renderPracticeScreen();
        break;
      case 'summary':
        app.innerHTML = this.renderSummaryScreen();
        break;
    }
  }

  attachEventListeners() {
    const app = document.getElementById('app');

    // Remove previous listeners
    if (this.boundHandleClick) {
      app.removeEventListener('click', this.boundHandleClick);
    }
    if (this.boundHandleKeydown) {
      app.removeEventListener('keydown', this.boundHandleKeydown);
    }
    if (this.boundHandleInput) {
      app.removeEventListener('input', this.boundHandleInput);
    }
    if (this.boundHandleChange) {
      app.removeEventListener('change', this.boundHandleChange);
    }

    // Bind functions to preserve 'this' context
    this.boundHandleClick = this.handleClick.bind(this);
    this.boundHandleKeydown = this.handleKeydown.bind(this);
    this.boundHandleInput = this.handleInput.bind(this);
    this.boundHandleChange = this.handleChange.bind(this);

    // Add new listeners
    app.addEventListener('click', this.boundHandleClick);
    app.addEventListener('keydown', this.boundHandleKeydown);
    app.addEventListener('input', this.boundHandleInput);
    app.addEventListener('change', this.boundHandleChange);
  
    // Add document-level keyboard listener for shortcuts
    if (this.documentKeyListener) {
      document.removeEventListener('keydown', this.documentKeyListener);
    }

    this.documentKeyListener = (e) => {
      if (this.currentMode === 'practice' && this.currentExercise && !this.sessionEnded) {
        // Shift+Cmd/Ctrl+I for showing answer
        if ((e.metaKey || e.ctrlKey) && e.shiftKey && (e.key === 'I' || e.key === 'i')) {
          if (!this.currentExercise.showAnswer) {
            e.preventDefault();
            e.stopPropagation();
            
            this.currentExercise.showAnswer = true;
            this.currentExercise.feedback = 'shown';
            this.render();
            this.attachEventListeners();
            return;
          }
        }
        
        // Shift+Cmd/Ctrl+Enter OR Tab for next verb
        if (this.currentExercise.showAnswer && (((e.metaKey || e.ctrlKey) && e.shiftKey && e.key === 'Enter') || e.key === 'Tab')) {
          e.preventDefault();
          e.stopPropagation();
          
          this.goToNextVerb();
        }
      }
    };

    document.addEventListener('keydown', this.documentKeyListener);
  }

  goToNextVerb() {
    if (this.checkSessionEnd()) return;
    
    this.generateNewExercise();
    this.render();
    this.attachEventListeners();
    setTimeout(() => document.getElementById('verb-input')?.focus(), 100);
  }

  handleChange(e) {
    // Handle dropdown changes
    if (e.target.id === 'category-select') {
      this.sessionSettings.category = e.target.value;
    }
    
    if (e.target.id === 'tense-select') {
      this.sessionSettings.tense = e.target.value;
    }

    // Handle settings changes
    if (e.target.name === 'sessionType') {
      this.userSettings.defaultSessionType = e.target.value;
      // Re-render settings to show only relevant options
      if (this.currentMode === 'settings') {
        this.render();
        this.attachEventListeners();
      }
      return;
    }
    
    if (e.target.name === 'verbCount') {
      this.userSettings.defaultVerbCount = parseInt(e.target.value);
      this.updateSettingsUI();
    }
    
    if (e.target.name === 'timeLimit') {
      this.userSettings.defaultTimeLimit = parseInt(e.target.value);
      this.updateSettingsUI();
    }
  }

  updateSettingsUI() {
    // Update visual selection in settings
    document.querySelectorAll('.setting-option').forEach(option => {
      const input = option.querySelector('input');
      if (input?.checked) {
        option.classList.add('selected');
      } else {
        option.classList.remove('selected');
      }
    });
  }

  handleClick(e) {
    const target = e.target;

    // Settings navigation
    if (target.id === 'open-settings') {
      this.currentMode = 'settings';
      this.render();
      this.attachEventListeners();
      return;
    }

    if (target.id === 'save-settings') {
      this.saveUserSettings();
      // Update session settings for next session
      this.sessionSettings.sessionType = this.userSettings.defaultSessionType;
      this.sessionSettings.verbCount = this.userSettings.defaultVerbCount;
      this.sessionSettings.timeLimit = this.userSettings.defaultTimeLimit;
      
      this.currentMode = 'setup';
      this.render();
      this.attachEventListeners();
      return;
    }

    // Start practice
    if (target.id === 'start-practice') {
      this.currentMode = 'practice';
      this.sessionSettings.sessionType = this.userSettings.defaultSessionType;
      this.sessionSettings.verbCount = this.userSettings.defaultVerbCount;
      this.sessionSettings.timeLimit = this.userSettings.defaultTimeLimit;
      
      this.startSession();
      this.generateNewExercise();
      this.render();
      this.attachEventListeners();
      setTimeout(() => document.getElementById('verb-input')?.focus(), 100);
      return;
    }

    // Practice again (same settings)
    if (target.id === 'practice-again') {
      this.currentMode = 'practice';
      this.startSession();
      this.generateNewExercise();
      this.render();
      this.attachEventListeners();
      setTimeout(() => document.getElementById('verb-input')?.focus(), 100);
      return;
    }

    // Back to setup
    if (target.id === 'back-to-setup') {
      // Clear any running timers
      if (this.sessionTimer) {
        clearTimeout(this.sessionTimer);
        this.sessionTimer = null;
      }
      if (this.updateTimer) {
        clearInterval(this.updateTimer);
        this.updateTimer = null;
      }
      
      this.currentMode = 'setup';
      this.render();
      this.attachEventListeners();
      return;
    }

    // End session manually
    if (target.id === 'end-session') {
      if (confirm('Are you sure you want to end this session?')) {
        this.endSession('manual');
      }
      return;
    }

    // Check answer
    if (target.id === 'check-answer') {
      const input = document.getElementById('verb-input');
      if (input && input.value.trim()) {
        this.checkAnswer(input.value);
        this.render();
        this.attachEventListeners();
      }
      return;
    }

    // Show answer
    if (target.id === 'show-answer') {
      this.currentExercise.showAnswer = true;
      this.currentExercise.feedback = 'shown';
      this.questionsAnswered++; // Count shown answers too
      
      // Check if session should end
      this.checkSessionEnd();
      
      this.render();
      this.attachEventListeners();
      return;
    }

    // Next verb
    if (target.id === 'next-verb' || target.closest('#next-verb')) {
      this.goToNextVerb();
      return;
    }

    // Show stats
    if (target.id === 'show-stats') {
      const stats = this.verbSelector.getSessionStats();
      const sessionTime = this.sessionStartTime ? Math.round((Date.now() - this.sessionStartTime) / 60000) : 0;
      alert(`Current Session:
Verbs Practiced: ${this.questionsAnswered}
Correct: ${this.correctAnswers}
Accuracy: ${this.questionsAnswered > 0 ? ((this.correctAnswers / this.questionsAnswered) * 100).toFixed(1) : 0}%
Session Time: ${sessionTime} min`);
      return;
    }
  }

  handleKeydown(e) {
    if (this.currentMode === 'practice' && !this.sessionEnded) {
      // SHIFT + CMD/CTRL + ENTER for next verb (when answer is shown)
      if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key === 'Enter') {
        e.preventDefault();
        e.stopPropagation();
        
        if (this.currentExercise && this.currentExercise.showAnswer) {
          this.goToNextVerb();
        }
        return;
      }
      
      // Regular ENTER for checking answer
      if (e.key === 'Enter' && !e.metaKey && !e.ctrlKey && !e.shiftKey) {
        e.preventDefault();
        
        if (!this.currentExercise.showAnswer) {
          const input = document.getElementById('verb-input');
          if (input && input.value.trim()) {
            this.checkAnswer(input.value);
            this.render();
            this.attachEventListeners();
          }
        }
      }
    }
  }

  handleInput(e) {
    if (e.target.id === 'verb-input' && this.currentExercise) {
      this.currentExercise.userInput = e.target.value;
      
      // Update button state
      const checkBtn = document.getElementById('check-answer');
      if (checkBtn) {
        checkBtn.disabled = !e.target.value.trim();
      }
    }
  }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
  new VerbTrainer();
});