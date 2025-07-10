export class AnswerValidator {
  static validate(userInput, correctAnswers) {
    const cleaned = userInput.toLowerCase().trim();
    const validAnswers = correctAnswers.map(answer => answer.toLowerCase().trim());
    
    return {
      isCorrect: validAnswers.includes(cleaned),
      correctAnswers: correctAnswers
    };
  }

  static getRandomPronoun(tense) {
    const pronouns = ['ich', 'du', 'er', 'wir', 'ihr', 'sie'];
    const weights = { 'ich': 2, 'du': 2, 'er': 3, 'wir': 1.5, 'ihr': 1, 'sie': 2 };

    if (tense === 'imperative') {
      return ['du', 'ihr', 'Sie'][Math.floor(Math.random() * 3)];
    }

    const totalWeight = Object.values(weights).reduce((a, b) => a + b, 0);
    let random = Math.random() * totalWeight;
    
    for (const [pronoun, weight] of Object.entries(weights)) {
      random -= weight;
      if (random <= 0) return pronoun;
    }
    
    return 'ich';
  }
}
