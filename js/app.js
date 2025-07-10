// js/app.js - Updated with progress dots and verb coloring
import { VerbSelector } from './verbSelector.js';
import { AnswerValidator } from './answerValidator.js';

class VerbTrainer {
  constructor() {
    this.verbSelector = new VerbSelector();
    this.currentMode = 'setup';
    this.currentExercise = null;
    this.sessionSettings = {
      category: 'essential',
      tense: 'present'
    };
    this.sessionStartTime = null;
    this.questionsAnswered = 0;
    
    this.categories = [
      { id: 'essential', name: 'Essential', desc: 'sein, haben, werden...' },
      { id: 'modal', name: 'Modal', desc: 'können, müssen, wollen...' },
      { id: 'regular', name: 'Regular', desc: 'machen, sagen, lernen...' },
      { id: 'strong', name: 'Strong', desc: 'gehen, nehmen, geben...' },
      { id: 'separable', name: 'Separable', desc: 'aufstehen, ankommen...' },
      { id: 'inseparable', name: 'Inseparable', desc: 'verstehen, beginnen...' },
      { id: 'ieren', name: '-ieren', desc: 'studieren, funktionieren...' }
    ];

    this.tenses = [
      { id: 'present', name: 'Präsens', desc: 'Present tense' },
      { id: 'perfect', name: 'Perfekt', desc: 'Present perfect' },
      { id: 'preterite', name: 'Präteritum', desc: 'Simple past' },
      { id: 'imperative', name: 'Imperativ', desc: 'Commands' },
      { id: 'subjunctive1', name: 'Konjunktiv I', desc: 'Indirect speech' },
      { id: 'subjunctive2', name: 'Konjunktiv II', desc: 'Hypothetical/Polite' }
    ];

    this.init();
  }

  init() {
    this.render();
    this.attachEventListeners();
  }

  generateNewExercise() {
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
    if (!this.currentExercise) return null;

    const result = AnswerValidator.validate(userInput, this.currentExercise.correctAnswers);
    
    this.verbSelector.recordAttempt(
      this.currentExercise.verb.infinitive, 
      this.sessionSettings.tense, 
      result.isCorrect
    );

    this.currentExercise.feedback = result.isCorrect ? 'correct' : 'incorrect';
    this.currentExercise.showAnswer = true;
    this.questionsAnswered++;

    return result;
  }

  renderProgressDots() {
    const totalQuestions = 20;
    const completed = this.questionsAnswered;
    
    let dots = '';
    for (let i = 0; i < totalQuestions; i++) {
      const dotClass = i < completed ? 'progress-dot completed' : 'progress-dot';
      dots += `<div class="${dotClass}"></div>`;
    }
    
    return `<div class="progress-indicator">${dots}</div>`;
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
            </div>
          </div>
        </div>

        <!-- Main Practice Area -->
        <div class="practice-main">
          <div class="practice-card">
            <!-- Progress indicator -->
            ${this.renderProgressDots()}

            <!-- Verb presentation -->
            <div class="verb-display ${exercise.showAnswer ? exercise.feedback : ''}">
              <div class="verb-main">
                ${exercise.infinitive} <span class="verb-english">${exercise.english}</span>
              </div>
              <div class="verb-pronoun">
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

            ${exercise.showAnswer && exercise.feedback === 'incorrect' ? `
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

  render() {
    const app = document.getElementById('app');
    
    if (this.currentMode === 'setup') {
      app.innerHTML = this.renderSetupScreen();
    } else {
      app.innerHTML = this.renderPracticeScreen();
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
  }

  handleChange(e) {
    // Handle dropdown changes
    if (e.target.id === 'category-select') {
      this.sessionSettings.category = e.target.value;
    }
    
    if (e.target.id === 'tense-select') {
      this.sessionSettings.tense = e.target.value;
    }
  }

  handleClick(e) {
    const target = e.target;

    // Start practice
    if (target.id === 'start-practice') {
      this.currentMode = 'practice';
      this.sessionStartTime = Date.now();
      this.questionsAnswered = 0;
      this.generateNewExercise();
      this.render();
      this.attachEventListeners();
      setTimeout(() => document.getElementById('verb-input')?.focus(), 100);
    }

    // Back to setup
    if (target.id === 'back-to-setup') {
      this.currentMode = 'setup';
      this.render();
      this.attachEventListeners();
    }

    // Check answer
    if (target.id === 'check-answer') {
      const input = document.getElementById('verb-input');
      if (input && input.value.trim()) {
        this.checkAnswer(input.value);
        this.render();
        this.attachEventListeners();
      }
    }

    // Show answer
    if (target.id === 'show-answer') {
      this.currentExercise.showAnswer = true;
      this.currentExercise.feedback = 'shown';
      this.render();
      this.attachEventListeners();
    }

    // Next verb
    if (target.id === 'next-verb') {
      this.generateNewExercise();
      this.render();
      this.attachEventListeners();
      setTimeout(() => document.getElementById('verb-input')?.focus(), 100);
    }

    // Show stats
    if (target.id === 'show-stats') {
      const stats = this.verbSelector.getSessionStats();
      const sessionTime = this.sessionStartTime ? Math.round((Date.now() - this.sessionStartTime) / 60000) : 0;
      alert(`Session Stats:
Total Attempts: ${stats.totalAttempts}
Correct: ${stats.totalCorrect}
Accuracy: ${(stats.averageAccuracy * 100).toFixed(1)}%
Verbs Practiced: ${stats.verbsPracticed}
Session Time: ${sessionTime} min`);
    }
  }

  handleKeydown(e) {
    if (e.key === 'Enter' && this.currentMode === 'practice') {
      e.preventDefault();
      
      if (!this.currentExercise.showAnswer) {
        // Enter submits the answer
        const input = document.getElementById('verb-input');
        if (input && input.value.trim()) {
          this.checkAnswer(input.value);
          this.render();
          this.attachEventListeners();
        }
      } else {
        // Enter goes to next verb when answer is shown
        this.generateNewExercise();
        this.render();
        this.attachEventListeners();
        setTimeout(() => document.getElementById('verb-input')?.focus(), 100);
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