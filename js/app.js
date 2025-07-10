// js/app.js - Main Application
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

    return result;
  }

  renderSetupScreen() {
    return `
      <div class="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div class="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full">
          <div class="text-center mb-8">
            <h1 class="text-3xl font-light text-gray-800 mb-2">German Verb Trainer</h1>
            <p class="text-gray-600">Select your practice focus</p>
          </div>

          <div class="space-y-8">
            <div>
              <h3 class="text-lg font-medium text-gray-800 mb-4">Verb Category</h3>
              <div class="grid grid-cols-2 gap-3" id="category-selection">
                ${this.categories.map(category => `
                  <button
                    data-category="${category.id}"
                    class="category-btn p-4 rounded-xl border-2 transition-all text-left ${
                      this.sessionSettings.category === category.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }"
                  >
                    <div class="font-medium text-gray-800">${category.name}</div>
                    <div class="text-sm text-gray-600 mt-1">${category.desc}</div>
                  </button>
                `).join('')}
              </div>
            </div>

            <div>
              <h3 class="text-lg font-medium text-gray-800 mb-4">Tense/Mood</h3>
              <div class="grid grid-cols-2 gap-3" id="tense-selection">
                ${this.tenses.map(tense => `
                  <button
                    data-tense="${tense.id}"
                    class="tense-btn p-4 rounded-xl border-2 transition-all text-left ${
                      this.sessionSettings.tense === tense.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }"
                  >
                    <div class="font-medium text-gray-800">${tense.name}</div>
                    <div class="text-sm text-gray-600 mt-1">${tense.desc}</div>
                  </button>
                `).join('')}
              </div>
            </div>

            <button
              id="start-practice"
              class="w-full bg-blue-600 text-white py-4 rounded-xl font-medium hover:bg-blue-700 transition-colors"
            >
              Start Practice
            </button>
          </div>
        </div>
      </div>
    `;
  }

  renderPracticeScreen() {
    const exercise = this.currentExercise;
    if (!exercise) return '';

    return `
      <div class="min-h-screen bg-gray-50">
        <!-- Header -->
        <div class="bg-white border-b border-gray-200 px-6 py-4">
          <div class="flex items-center justify-between max-w-4xl mx-auto">
            <button
              id="back-to-setup"
              class="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
            >
               Setup
            </button>
            
            <div class="text-center">
              <div class="text-sm text-gray-500">
                ${this.categories.find(c => c.id === this.sessionSettings.category)?.name}  
                ${this.tenses.find(t => t.id === this.sessionSettings.tense)?.name}
              </div>
            </div>

            <div class="flex items-center space-x-4">
              <button id="show-stats" class="p-2 text-gray-600 hover:text-gray-800 transition-colors">
                
              </button>
            </div>
          </div>
        </div>

        <!-- Main Practice Area -->
        <div class="max-w-2xl mx-auto p-6 pt-12">
          <div class="bg-white rounded-2xl shadow-lg p-8">
            <!-- Verb presentation -->
            <div class="text-center mb-8">
              <div class="text-4xl font-light text-gray-800 mb-6">
                ${exercise.infinitive} <span class="text-2xl text-gray-600">${exercise.english}</span>
              </div>
              <div class="text-2xl text-blue-600 font-medium">
                ${exercise.pronoun}
              </div>
            </div>

            <!-- Input area -->
            <div class="space-y-4">
              <div class="relative">
                <input
                  type="text"
                  id="verb-input"
                  value="${exercise.userInput}"
                  placeholder="Type pronoun + verb (e.g., er geht)..."
                  ${exercise.showAnswer ? 'disabled' : ''}
                  class="w-full p-4 text-lg border-2 rounded-xl transition-all outline-none ${
                    exercise.feedback === 'correct' 
                      ? 'border-green-500 bg-green-50' 
                      : exercise.feedback === 'incorrect'
                      ? 'border-red-500 bg-red-50'
                      : 'border-gray-300 focus:border-blue-500'
                  }"
                />
              </div>

              <!-- Feedback -->
              ${exercise.showAnswer ? `
                <div class="text-center">
                  ${exercise.feedback === 'correct' ? `
                    <div class="text-green-600 font-medium"> Correct!</div>
                  ` : `
                    <div class="space-y-2">
                      <div class="text-red-600 font-medium"> Incorrect</div>
                      <div class="text-gray-700">
                        Correct answer: <span class="font-medium">
                          ${exercise.correctAnswers.join(' / ')}
                        </span>
                      </div>
                    </div>
                  `}
                </div>
              ` : ''}

              <!-- Action buttons -->
              <div class="flex gap-3 justify-center pt-4">
                ${!exercise.showAnswer ? `
                  <button
                    id="check-answer"
                    class="px-8 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
                  >
                    Check
                  </button>
                  <button
                    id="show-answer"
                    class="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-medium hover:border-gray-400 transition-colors"
                  >
                    Show Answer
                  </button>
                ` : `
                  <button
                    id="next-verb"
                    class="px-8 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
                  >
                    Next Verb 
                  </button>
                `}
              </div>
            </div>
          </div>

          <!-- Quick restart -->
          <div class="text-center mt-6">
            <button
              id="reset-exercise"
              class="text-gray-600 hover:text-gray-800 transition-colors"
            >
               Reset Exercise
            </button>
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
    app.removeEventListener('click', this.handleClick);
    app.removeEventListener('keypress', this.handleKeypress);
    app.removeEventListener('input', this.handleInput);

    // Add new listeners
    this.handleClick = this.handleClick.bind(this);
    this.handleKeypress = this.handleKeypress.bind(this);
    this.handleInput = this.handleInput.bind(this);

    app.addEventListener('click', this.handleClick);
    app.addEventListener('keypress', this.handleKeypress);
    app.addEventListener('input', this.handleInput);
  }

  handleClick(e) {
    const target = e.target;

    // Category selection
    if (target.classList.contains('category-btn') || target.closest('.category-btn')) {
      const btn = target.closest('.category-btn') || target;
      this.sessionSettings.category = btn.dataset.category;
      this.render();
      this.attachEventListeners();
    }

    // Tense selection
    if (target.classList.contains('tense-btn') || target.closest('.tense-btn')) {
      const btn = target.closest('.tense-btn') || target;
      this.sessionSettings.tense = btn.dataset.tense;
      this.render();
      this.attachEventListeners();
    }

    // Start practice
    if (target.id === 'start-practice') {
      this.currentMode = 'practice';
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
      this.checkAnswer(input.value);
      this.render();
      this.attachEventListeners();
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

    // Reset exercise
    if (target.id === 'reset-exercise') {
      this.generateNewExercise();
      this.render();
      this.attachEventListeners();
      setTimeout(() => document.getElementById('verb-input')?.focus(), 100);
    }

    // Show stats
    if (target.id === 'show-stats') {
      const stats = this.verbSelector.getSessionStats();
      alert(`Session Stats:
Total Attempts: ${stats.totalAttempts}
Correct: ${stats.totalCorrect}
Accuracy: ${(stats.averageAccuracy * 100).toFixed(1)}%
Verbs Practiced: ${stats.verbsPracticed}`);
    }
  }

  handleKeypress(e) {
  if (e.key === 'Enter' && this.currentMode === 'practice') {
    e.preventDefault(); // Prevent form submission
    
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
    }
  }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
  new VerbTrainer();
});
