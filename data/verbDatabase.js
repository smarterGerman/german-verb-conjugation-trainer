// data/verbDatabase.js - Complete with all tenses
export const verbDatabase = {
  
  essential: [
    {
      infinitive: "sein", english: "to be", frequency: 1, category: "essential", auxiliary: "sein",
      conjugations: {
        present: { 
          ich: ["ich bin"], 
          du: ["du bist"], 
          er: ["er ist", "sie ist", "es ist"], 
          wir: ["wir sind"], 
          ihr: ["ihr seid"], 
          sie: ["sie sind", "Sie sind"] 
        },
        perfect: { 
          ich: ["ich bin gewesen"], 
          du: ["du bist gewesen"], 
          er: ["er ist gewesen", "sie ist gewesen", "es ist gewesen"], 
          wir: ["wir sind gewesen"], 
          ihr: ["ihr seid gewesen"], 
          sie: ["sie sind gewesen", "Sie sind gewesen"] 
        },
        preterite: { 
          ich: ["ich war"], 
          du: ["du warst"], 
          er: ["er war", "sie war", "es war"], 
          wir: ["wir waren"], 
          ihr: ["ihr wart"], 
          sie: ["sie waren", "Sie waren"] 
        },
        imperative: { 
          du: ["sei"], 
          ihr: ["seid"], 
          Sie: ["seien Sie"] 
        },
        subjunctive1: { 
          ich: ["ich sei"], 
          du: ["du seist", "du seiest"], 
          er: ["er sei", "sie sei", "es sei"], 
          wir: ["wir seien"], 
          ihr: ["ihr seiet"], 
          sie: ["sie seien", "Sie seien"] 
        },
        subjunctive2: { 
          ich: ["ich wäre"], 
          du: ["du wärst", "du wärest"], 
          er: ["er wäre", "sie wäre", "es wäre"], 
          wir: ["wir wären"], 
          ihr: ["ihr wärt", "ihr wäret"], 
          sie: ["sie wären", "Sie wären"] 
        }
      }
    },
    {
      infinitive: "haben", english: "to have", frequency: 2, category: "essential", auxiliary: "haben",
      conjugations: {
        present: { 
          ich: ["ich habe"], 
          du: ["du hast"], 
          er: ["er hat", "sie hat", "es hat"], 
          wir: ["wir haben"], 
          ihr: ["ihr habt"], 
          sie: ["sie haben", "Sie haben"] 
        },
        perfect: { 
          ich: ["ich habe gehabt"], 
          du: ["du hast gehabt"], 
          er: ["er hat gehabt", "sie hat gehabt", "es hat gehabt"], 
          wir: ["wir haben gehabt"], 
          ihr: ["ihr habt gehabt"], 
          sie: ["sie haben gehabt", "Sie haben gehabt"] 
        },
        preterite: { 
          ich: ["ich hatte"], 
          du: ["du hattest"], 
          er: ["er hatte", "sie hatte", "es hatte"], 
          wir: ["wir hatten"], 
          ihr: ["ihr hattet"], 
          sie: ["sie hatten", "Sie hatten"] 
        },
        imperative: { 
          du: ["hab", "habe"], 
          ihr: ["habt"], 
          Sie: ["haben Sie"] 
        },
        subjunctive1: { 
          ich: ["ich habe"], 
          du: ["du habest"], 
          er: ["er habe", "sie habe", "es habe"], 
          wir: ["wir haben"], 
          ihr: ["ihr habet"], 
          sie: ["sie haben", "Sie haben"] 
        },
        subjunctive2: { 
          ich: ["ich hätte"], 
          du: ["du hättest"], 
          er: ["er hätte", "sie hätte", "es hätte"], 
          wir: ["wir hätten"], 
          ihr: ["ihr hättet"], 
          sie: ["sie hätten", "Sie hätten"] 
        }
      }
    },
    {
      infinitive: "werden", english: "to become, will", frequency: 3, category: "essential", auxiliary: "sein",
      conjugations: {
        present: { 
          ich: ["ich werde"], 
          du: ["du wirst"], 
          er: ["er wird", "sie wird", "es wird"], 
          wir: ["wir werden"], 
          ihr: ["ihr werdet"], 
          sie: ["sie werden", "Sie werden"] 
        },
        perfect: { 
          ich: ["ich bin geworden"], 
          du: ["du bist geworden"], 
          er: ["er ist geworden", "sie ist geworden", "es ist geworden"], 
          wir: ["wir sind geworden"], 
          ihr: ["ihr seid geworden"], 
          sie: ["sie sind geworden", "Sie sind geworden"] 
        },
        preterite: { 
          ich: ["ich wurde"], 
          du: ["du wurdest"], 
          er: ["er wurde", "sie wurde", "es wurde"], 
          wir: ["wir wurden"], 
          ihr: ["ihr wurdet"], 
          sie: ["sie wurden", "Sie wurden"] 
        },
        imperative: { 
          du: ["werd", "werde"], 
          ihr: ["werdet"], 
          Sie: ["werden Sie"] 
        },
        subjunctive1: { 
          ich: ["ich werde"], 
          du: ["du werdest"], 
          er: ["er werde", "sie werde", "es werde"], 
          wir: ["wir werden"], 
          ihr: ["ihr werdet"], 
          sie: ["sie werden", "Sie werden"] 
        },
        subjunctive2: { 
          ich: ["ich würde"], 
          du: ["du würdest"], 
          er: ["er würde", "sie würde", "es würde"], 
          wir: ["wir würden"], 
          ihr: ["ihr würdet"], 
          sie: ["sie würden", "Sie würden"] 
        }
      }
    }
  ],

  modal: [
    {
      infinitive: "können", english: "can, to be able to", frequency: 4, category: "modal",
      conjugations: {
        present: { 
          ich: ["ich kann"], 
          du: ["du kannst"], 
          er: ["er kann", "sie kann", "es kann"], 
          wir: ["wir können"], 
          ihr: ["ihr könnt"], 
          sie: ["sie können", "Sie können"] 
        },
        perfect: { 
          ich: ["ich habe gekonnt"], 
          du: ["du hast gekonnt"], 
          er: ["er hat gekonnt", "sie hat gekonnt", "es hat gekonnt"], 
          wir: ["wir haben gekonnt"], 
          ihr: ["ihr habt gekonnt"], 
          sie: ["sie haben gekonnt", "Sie haben gekonnt"] 
        },
        preterite: { 
          ich: ["ich konnte"], 
          du: ["du konntest"], 
          er: ["er konnte", "sie konnte", "es konnte"], 
          wir: ["wir konnten"], 
          ihr: ["ihr konntet"], 
          sie: ["sie konnten", "Sie konnten"] 
        },
        subjunctive1: { 
          ich: ["ich könne"], 
          du: ["du könnest"], 
          er: ["er könne", "sie könne", "es könne"], 
          wir: ["wir können"], 
          ihr: ["ihr könnet"], 
          sie: ["sie können", "Sie können"] 
        },
        subjunctive2: { 
          ich: ["ich könnte"], 
          du: ["du könntest"], 
          er: ["er könnte", "sie könnte", "es könnte"], 
          wir: ["wir könnten"], 
          ihr: ["ihr könntet"], 
          sie: ["sie könnten", "Sie könnten"] 
        }
      }
    },
    {
      infinitive: "müssen", english: "must, to have to", frequency: 5, category: "modal",
      conjugations: {
        present: { 
          ich: ["ich muss"], 
          du: ["du musst"], 
          er: ["er muss", "sie muss", "es muss"], 
          wir: ["wir müssen"], 
          ihr: ["ihr müsst"], 
          sie: ["sie müssen", "Sie müssen"] 
        },
        perfect: { 
          ich: ["ich habe gemusst"], 
          du: ["du hast gemusst"], 
          er: ["er hat gemusst", "sie hat gemusst", "es hat gemusst"], 
          wir: ["wir haben gemusst"], 
          ihr: ["ihr habt gemusst"], 
          sie: ["sie haben gemusst", "Sie haben gemusst"] 
        },
        preterite: { 
          ich: ["ich musste"], 
          du: ["du musstest"], 
          er: ["er musste", "sie musste", "es musste"], 
          wir: ["wir mussten"], 
          ihr: ["ihr musstet"], 
          sie: ["sie mussten", "Sie mussten"] 
        },
        subjunctive1: { 
          ich: ["ich müsse"], 
          du: ["du müssest"], 
          er: ["er müsse", "sie müsse", "es müsse"], 
          wir: ["wir müssen"], 
          ihr: ["ihr müsset"], 
          sie: ["sie müssen", "Sie müssen"] 
        },
        subjunctive2: { 
          ich: ["ich müsste"], 
          du: ["du müsstest"], 
          er: ["er müsste", "sie müsste", "es müsste"], 
          wir: ["wir müssten"], 
          ihr: ["ihr müsstet"], 
          sie: ["sie müssten", "Sie müssten"] 
        }
      }
    }
  ],

  regular: [
    {
      infinitive: "sagen", english: "to say", frequency: 6, category: "regular", auxiliary: "haben",
      conjugations: {
        present: { 
          ich: ["ich sage"], 
          du: ["du sagst"], 
          er: ["er sagt", "sie sagt", "es sagt"], 
          wir: ["wir sagen"], 
          ihr: ["ihr sagt"], 
          sie: ["sie sagen", "Sie sagen"] 
        },
        perfect: { 
          ich: ["ich habe gesagt"], 
          du: ["du hast gesagt"], 
          er: ["er hat gesagt", "sie hat gesagt", "es hat gesagt"], 
          wir: ["wir haben gesagt"], 
          ihr: ["ihr habt gesagt"], 
          sie: ["sie haben gesagt", "Sie haben gesagt"] 
        },
        preterite: { 
          ich: ["ich sagte"], 
          du: ["du sagtest"], 
          er: ["er sagte", "sie sagte", "es sagte"], 
          wir: ["wir sagten"], 
          ihr: ["ihr sagtet"], 
          sie: ["sie sagten", "Sie sagten"] 
        },
        imperative: { 
          du: ["sag", "sage"], 
          ihr: ["sagt"], 
          Sie: ["sagen Sie"] 
        },
        subjunctive1: { 
          ich: ["ich sage"], 
          du: ["du sagest"], 
          er: ["er sage", "sie sage", "es sage"], 
          wir: ["wir sagen"], 
          ihr: ["ihr saget"], 
          sie: ["sie sagen", "Sie sagen"] 
        },
        subjunctive2: { 
          ich: ["ich sagte"], 
          du: ["du sagtest"], 
          er: ["er sagte", "sie sagte", "es sagte"], 
          wir: ["wir sagten"], 
          ihr: ["ihr sagtet"], 
          sie: ["sie sagten", "Sie sagten"] 
        }
      }
    },
    {
      infinitive: "machen", english: "to make, to do", frequency: 7, category: "regular", auxiliary: "haben",
      conjugations: {
        present: { 
          ich: ["ich mache"], 
          du: ["du machst"], 
          er: ["er macht", "sie macht", "es macht"], 
          wir: ["wir machen"], 
          ihr: ["ihr macht"], 
          sie: ["sie machen", "Sie machen"] 
        },
        perfect: { 
          ich: ["ich habe gemacht"], 
          du: ["du hast gemacht"], 
          er: ["er hat gemacht", "sie hat gemacht", "es hat gemacht"], 
          wir: ["wir haben gemacht"], 
          ihr: ["ihr habt gemacht"], 
          sie: ["sie haben gemacht", "Sie haben gemacht"] 
        },
        preterite: { 
          ich: ["ich machte"], 
          du: ["du machtest"], 
          er: ["er machte", "sie machte", "es machte"], 
          wir: ["wir machten"], 
          ihr: ["ihr machtet"], 
          sie: ["sie machten", "Sie machten"] 
        },
        imperative: { 
          du: ["mach", "mache"], 
          ihr: ["macht"], 
          Sie: ["machen Sie"] 
        },
        subjunctive1: { 
          ich: ["ich mache"], 
          du: ["du machest"], 
          er: ["er mache", "sie mache", "es mache"], 
          wir: ["wir machen"], 
          ihr: ["ihr machet"], 
          sie: ["sie machen", "Sie machen"] 
        },
        subjunctive2: { 
          ich: ["ich machte"], 
          du: ["du machtest"], 
          er: ["er machte", "sie machte", "es machte"], 
          wir: ["wir machten"], 
          ihr: ["ihr machtet"], 
          sie: ["sie machten", "Sie machten"] 
        }
      }
    }
  ],

  strong: [
    {
      infinitive: "geben", english: "to give", frequency: 8, category: "strong", auxiliary: "haben",
      conjugations: {
        present: { 
          ich: ["ich gebe"], 
          du: ["du gibst"], 
          er: ["er gibt", "sie gibt", "es gibt"], 
          wir: ["wir geben"], 
          ihr: ["ihr gebt"], 
          sie: ["sie geben", "Sie geben"] 
        },
        perfect: { 
          ich: ["ich habe gegeben"], 
          du: ["du hast gegeben"], 
          er: ["er hat gegeben", "sie hat gegeben", "es hat gegeben"], 
          wir: ["wir haben gegeben"], 
          ihr: ["ihr habt gegeben"], 
          sie: ["sie haben gegeben", "Sie haben gegeben"] 
        },
        preterite: { 
          ich: ["ich gab"], 
          du: ["du gabst"], 
          er: ["er gab", "sie gab", "es gab"], 
          wir: ["wir gaben"], 
          ihr: ["ihr gabt"], 
          sie: ["sie gaben", "Sie gaben"] 
        },
        imperative: { 
          du: ["gib"], 
          ihr: ["gebt"], 
          Sie: ["geben Sie"] 
        },
        subjunctive1: { 
          ich: ["ich gebe"], 
          du: ["du gebest"], 
          er: ["er gebe", "sie gebe", "es gebe"], 
          wir: ["wir geben"], 
          ihr: ["ihr gebet"], 
          sie: ["sie geben", "Sie geben"] 
        },
        subjunctive2: { 
          ich: ["ich gäbe"], 
          du: ["du gäbest"], 
          er: ["er gäbe", "sie gäbe", "es gäbe"], 
          wir: ["wir gäben"], 
          ihr: ["ihr gäbet"], 
          sie: ["sie gäben", "Sie gäben"] 
        }
      }
    },
    {
      infinitive: "kommen", english: "to come", frequency: 9, category: "strong", auxiliary: "sein",
      conjugations: {
        present: { 
          ich: ["ich komme"], 
          du: ["du kommst"], 
          er: ["er kommt", "sie kommt", "es kommt"], 
          wir: ["wir kommen"], 
          ihr: ["ihr kommt"], 
          sie: ["sie kommen", "Sie kommen"] 
        },
        perfect: { 
          ich: ["ich bin gekommen"], 
          du: ["du bist gekommen"], 
          er: ["er ist gekommen", "sie ist gekommen", "es ist gekommen"], 
          wir: ["wir sind gekommen"], 
          ihr: ["ihr seid gekommen"], 
          sie: ["sie sind gekommen", "Sie sind gekommen"] 
        },
        preterite: { 
          ich: ["ich kam"], 
          du: ["du kamst"], 
          er: ["er kam", "sie kam", "es kam"], 
          wir: ["wir kamen"], 
          ihr: ["ihr kamt"], 
          sie: ["sie kamen", "Sie kamen"] 
        },
        imperative: { 
          du: ["komm", "komme"], 
          ihr: ["kommt"], 
          Sie: ["kommen Sie"] 
        },
        subjunctive1: { 
          ich: ["ich komme"], 
          du: ["du kommest"], 
          er: ["er komme", "sie komme", "es komme"], 
          wir: ["wir kommen"], 
          ihr: ["ihr kommet"], 
          sie: ["sie kommen", "Sie kommen"] 
        },
        subjunctive2: { 
          ich: ["ich käme"], 
          du: ["du kämest"], 
          er: ["er käme", "sie käme", "es käme"], 
          wir: ["wir kämen"], 
          ihr: ["ihr kämet"], 
          sie: ["sie kämen", "Sie kämen"] 
        }
      }
    },
    {
      infinitive: "gehen", english: "to go", frequency: 12, category: "strong", auxiliary: "sein",
      conjugations: {
        present: { 
          ich: ["ich gehe"], 
          du: ["du gehst"], 
          er: ["er geht", "sie geht", "es geht"], 
          wir: ["wir gehen"], 
          ihr: ["ihr geht"], 
          sie: ["sie gehen", "Sie gehen"] 
        },
        perfect: { 
          ich: ["ich bin gegangen"], 
          du: ["du bist gegangen"], 
          er: ["er ist gegangen", "sie ist gegangen", "es ist gegangen"], 
          wir: ["wir sind gegangen"], 
          ihr: ["ihr seid gegangen"], 
          sie: ["sie sind gegangen", "Sie sind gegangen"] 
        },
        preterite: { 
          ich: ["ich ging"], 
          du: ["du gingst"], 
          er: ["er ging", "sie ging", "es ging"], 
          wir: ["wir gingen"], 
          ihr: ["ihr gingt"], 
          sie: ["sie gingen", "Sie gingen"] 
        },
        imperative: { 
          du: ["geh", "gehe"], 
          ihr: ["geht"], 
          Sie: ["gehen Sie"] 
        },
        subjunctive1: { 
          ich: ["ich gehe"], 
          du: ["du gehest"], 
          er: ["er gehe", "sie gehe", "es gehe"], 
          wir: ["wir gehen"], 
          ihr: ["ihr gehet"], 
          sie: ["sie gehen", "Sie gehen"] 
        },
        subjunctive2: { 
          ich: ["ich ginge"], 
          du: ["du gingest"], 
          er: ["er ginge", "sie ginge", "es ginge"], 
          wir: ["wir gingen"], 
          ihr: ["ihr ginget"], 
          sie: ["sie gingen", "Sie gingen"] 
        }
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
  { infinitive: "werden", frequency: 3, category: "essential" },
  { infinitive: "können", frequency: 4, category: "modal" },
  { infinitive: "müssen", frequency: 5, category: "modal" },
  { infinitive: "sagen", frequency: 6, category: "regular" },
  { infinitive: "machen", frequency: 7, category: "regular" },
  { infinitive: "geben", frequency: 8, category: "strong" },
  { infinitive: "kommen", frequency: 9, category: "strong" },
  { infinitive: "gehen", frequency: 12, category: "strong" }
];

export default verbDatabase;