import { verbDatabase } from '../data/verbDatabase.js';

export class VerbSelector {
  constructor() {
    this.sessionData = new Map();
  }

  selectNextVerb(category, tense, excludeRecent = 3) {
    const availableVerbs = this.getVerbsByCategory(category);
    const weightedVerbs = this.calculateWeights(availableVerbs, tense, excludeRecent);
    return this.weightedRandomSelection(weightedVerbs);
  }

  getVerbsByCategory(category) {
    switch (category) {
      case 'essential': return verbDatabase.essential || [];
      case 'modal': return verbDatabase.modal || [];
      case 'regular': return verbDatabase.regular || [];
      case 'strong': return verbDatabase.strong || [];
      case 'separable': return verbDatabase.separable || [];
      case 'ieren': return verbDatabase.ieren || [];
      case 'inseparable': return verbDatabase.inseparable || [];
      case 'all': return Object.values(verbDatabase).flat();
      default: return verbDatabase.essential || [];
    }
  }

  calculateWeights(verbs, tense, excludeRecent) {
    return verbs.map(verb => {
      const key = `${verb.infinitive}-${tense}`;
      const stats = this.sessionData.get(key) || { 
        attempts: 0, correct: 0, lastSeen: 0, difficulty: 1 
      };

      let weight = 100 - verb.frequency;
      const timeSinceLastSeen = Date.now() - stats.lastSeen;
      if (timeSinceLastSeen < excludeRecent * 60000) weight *= 0.1;

      if (stats.attempts > 0) {
        const accuracy = stats.correct / stats.attempts;
        if (accuracy < 0.5) weight *= 3;
        else if (accuracy < 0.8) weight *= 1.5;
        else weight *= 0.7;
      }

      return { verb, weight };
    });
  }

  weightedRandomSelection(weightedVerbs) {
    const totalWeight = weightedVerbs.reduce((sum, item) => sum + item.weight, 0);
    let random = Math.random() * totalWeight;
    
    for (const item of weightedVerbs) {
      random -= item.weight;
      if (random <= 0) return item.verb;
    }
    
    return weightedVerbs[0]?.verb;
  }

  recordAttempt(verb, tense, correct) {
    const key = `${verb}-${tense}`;
    const stats = this.sessionData.get(key) || { 
      attempts: 0, correct: 0, lastSeen: 0, difficulty: 1 
    };

    stats.attempts++;
    if (correct) stats.correct++;
    stats.lastSeen = Date.now();
    
    this.sessionData.set(key, stats);
  }

  getSessionStats() {
    const stats = Array.from(this.sessionData.values());
    return {
      totalAttempts: stats.reduce((sum, s) => sum + s.attempts, 0),
      totalCorrect: stats.reduce((sum, s) => sum + s.correct, 0),
      verbsPracticed: stats.length,
      averageAccuracy: stats.length > 0 
        ? stats.reduce((sum, s) => sum + (s.correct / s.attempts), 0) / stats.length 
        : 0
    };
  }
}
