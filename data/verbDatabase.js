# Create with printf to ensure proper Unicode:
printf '// data/verbDatabase.js - With proper Unicode characters
export const verbDatabase = {
  
  essential: [
    {
      infinitive: "sein", english: "to be", frequency: 1, category: "essential", auxiliary: "sein",
      conjugations: {
        present: { ich: ["ich bin"], du: ["du bist"], er: ["er ist", "sie ist", "es ist"], wir: ["wir sind"], ihr: ["ihr seid"], sie: ["sie sind", "Sie sind"] },
        subjunctive2: { ich: ["ich wäre"], du: ["du wärst"], er: ["er wäre", "sie wäre", "es wäre"], wir: ["wir wären"], ihr: ["ihr wärt"], sie: ["sie wären", "Sie wären"] }
      }
    },
    {
      infinitive: "haben", english: "to have", frequency: 2, category: "essential", auxiliary: "haben",
      conjugations: {
        present: { ich: ["ich habe"], du: ["du hast"], er: ["er hat", "sie hat", "es hat"], wir: ["wir haben"], ihr: ["ihr habt"], sie: ["sie haben", "Sie haben"] },
        subjunctive2: { ich: ["ich hätte"], du: ["du hättest"], er: ["er hätte", "sie hätte", "es hätte"], wir: ["wir hätten"], ihr: ["ihr hättet"], sie: ["sie hätten", "Sie hätten"] }
      }
    }
  ],

  modal: [
    {
      infinitive: "können", english: "can, to be able to", frequency: 4, category: "modal",
      conjugations: {
        present: { ich: ["ich kann"], du: ["du kannst"], er: ["er kann", "sie kann", "es kann"], wir: ["wir können"], ihr: ["ihr könnt"], sie: ["sie können", "Sie können"] },
        subjunctive2: { ich: ["ich könnte"], du: ["du könntest"], er: ["er könnte", "sie könnte", "es könnte"], wir: ["wir könnten"], ihr: ["ihr könntet"], sie: ["sie könnten", "Sie könnten"] }
      }
    },
    {
      infinitive: "müssen", english: "must, to have to", frequency: 5, category: "modal",
      conjugations: {
        present: { ich: ["ich muss"], du: ["du musst"], er: ["er muss", "sie muss", "es muss"], wir: ["wir müssen"], ihr: ["ihr müsst"], sie: ["sie müssen", "Sie müssen"] },
        subjunctive2: { ich: ["ich müsste"], du: ["du müsstest"], er: ["er müsste", "sie müsste", "es müsste"], wir: ["wir müssten"], ihr: ["ihr müsstet"], sie: ["sie müssten", "Sie müssten"] }
      }
    }
  ],

  regular: [
    {
      infinitive: "sagen", english: "to say", frequency: 6, category: "regular", auxiliary: "haben",
      conjugations: {
        present: { ich: ["ich sage"], du: ["du sagst"], er: ["er sagt", "sie sagt", "es sagt"], wir: ["wir sagen"], ihr: ["ihr sagt"], sie: ["sie sagen", "Sie sagen"] }
      }
    }
  ],

  strong: [
    {
      infinitive: "geben", english: "to give", frequency: 8, category: "strong", auxiliary: "haben",
      conjugations: {
        present: { ich: ["ich gebe"], du: ["du gibst"], er: ["er gibt", "sie gibt", "es gibt"], wir: ["wir geben"], ihr: ["ihr gebt"], sie: ["sie geben", "Sie geben"] },
        subjunctive2: { ich: ["ich gäbe"], du: ["du gäbest"], er: ["er gäbe", "sie gäbe", "es gäbe"], wir: ["wir gäben"], ihr: ["ihr gäbet"], sie: ["sie gäben", "Sie gäben"] }
      }
    }
  ],

  separable: [],
  inseparable: [],
  ieren: []
};

export const verbsByFrequency = [
  { infinitive: "sein", frequency: 1, category: "essential" },
  { infinitive: "haben", frequency: 2, category: "essential" },
  { infinitive: "können", frequency: 4, category: "modal" },
  { infinitive: "müssen", frequency: 5, category: "modal" },
  { infinitive: "sagen", frequency: 6, category: "regular" },
  { infinitive: "geben", frequency: 8, category: "strong" }
];

export default verbDatabase;' > data/verbDatabase.js