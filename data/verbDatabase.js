// data/verbDatabase.js - COMPLETE WITH PROPER UTF-8 ENCODING
export const verbDatabase = {
  
  // ESSENTIAL VERBS (1-3) - Absolute must-haves
  essential: [
    {
      infinitive: "sein", english: "to be", frequency: 1, category: "essential", auxiliary: "sein",
      conjugations: {
        present: { ich: ["ich bin"], du: ["du bist"], er: ["er ist", "sie ist", "es ist"], wir: ["wir sind"], ihr: ["ihr seid"], sie: ["sie sind", "Sie sind"] },
        perfect: { ich: ["ich bin gewesen"], du: ["du bist gewesen"], er: ["er ist gewesen", "sie ist gewesen", "es ist gewesen"], wir: ["wir sind gewesen"], ihr: ["ihr seid gewesen"], sie: ["sie sind gewesen", "Sie sind gewesen"] },
        preterite: { ich: ["ich war"], du: ["du warst"], er: ["er war", "sie war", "es war"], wir: ["wir waren"], ihr: ["ihr wart"], sie: ["sie waren", "Sie waren"] },
        imperative: { du: ["sei"], ihr: ["seid"], Sie: ["seien Sie"] },
        subjunctive1: { ich: ["ich sei"], du: ["du seist", "du seiest"], er: ["er sei", "sie sei", "es sei"], wir: ["wir seien"], ihr: ["ihr seiet"], sie: ["sie seien", "Sie seien"] },
        subjunctive2: { ich: ["ich wre"], du: ["du wrst", "du wrest"], er: ["er wre", "sie wre", "es wre"], wir: ["wir wren"], ihr: ["ihr wrt", "ihr wret"], sie: ["sie wren", "Sie wren"] }
      }
    },
    {
      infinitive: "haben", english: "to have", frequency: 2, category: "essential", auxiliary: "haben",
      conjugations: {
        present: { ich: ["ich habe"], du: ["du hast"], er: ["er hat", "sie hat", "es hat"], wir: ["wir haben"], ihr: ["ihr habt"], sie: ["sie haben", "Sie haben"] },
        perfect: { ich: ["ich habe gehabt"], du: ["du hast gehabt"], er: ["er hat gehabt", "sie hat gehabt", "es hat gehabt"], wir: ["wir haben gehabt"], ihr: ["ihr habt gehabt"], sie: ["sie haben gehabt", "Sie haben gehabt"] },
        preterite: { ich: ["ich hatte"], du: ["du hattest"], er: ["er hatte", "sie hatte", "es hatte"], wir: ["wir hatten"], ihr: ["ihr hattet"], sie: ["sie hatten", "Sie hatten"] },
        imperative: { du: ["hab", "habe"], ihr: ["habt"], Sie: ["haben Sie"] },
        subjunctive1: { ich: ["ich habe"], du: ["du habest"], er: ["er habe", "sie habe", "es habe"], wir: ["wir haben"], ihr: ["ihr habet"], sie: ["sie haben", "Sie haben"] },
        subjunctive2: { ich: ["ich htte"], du: ["du httest"], er: ["er htte", "sie htte", "es htte"], wir: ["wir htten"], ihr: ["ihr httet"], sie: ["sie htten", "Sie htten"] }
      }
    },
    {
      infinitive: "werden", english: "to become, will", frequency: 3, category: "essential", auxiliary: "sein",
      conjugations: {
        present: { ich: ["ich werde"], du: ["du wirst"], er: ["er wird", "sie wird", "es wird"], wir: ["wir werden"], ihr: ["ihr werdet"], sie: ["sie werden", "Sie werden"] },
        perfect: { ich: ["ich bin geworden"], du: ["du bist geworden"], er: ["er ist geworden", "sie ist geworden", "es ist geworden"], wir: ["wir sind geworden"], ihr: ["ihr seid geworden"], sie: ["sie sind geworden", "Sie sind geworden"] },
        preterite: { ich: ["ich wurde"], du: ["du wurdest"], er: ["er wurde", "sie wurde", "es wurde"], wir: ["wir wurden"], ihr: ["ihr wurdet"], sie: ["sie wurden", "Sie wurden"] },
        imperative: { du: ["werd", "werde"], ihr: ["werdet"], Sie: ["werden Sie"] },
        subjunctive1: { ich: ["ich werde"], du: ["du werdest"], er: ["er werde", "sie werde", "es werde"], wir: ["wir werden"], ihr: ["ihr werdet"], sie: ["sie werden", "Sie werden"] },
        subjunctive2: { ich: ["ich wrde"], du: ["du wrdest"], er: ["er wrde", "sie wrde", "es wrde"], wir: ["wir wrden"], ihr: ["ihr wrdet"], sie: ["sie wrden", "Sie wrden"] }
      }
    }
  ],

  // MODAL VERBS (4-9) - Critical for German
  modal: [
    {
      infinitive: "knnen", english: "can, to be able to", frequency: 4, category: "modal",
      conjugations: {
        present: { ich: ["ich kann"], du: ["du kannst"], er: ["er kann", "sie kann", "es kann"], wir: ["wir knnen"], ihr: ["ihr knnt"], sie: ["sie knnen", "Sie knnen"] },
        perfect: { ich: ["ich habe gekonnt"], du: ["du hast gekonnt"], er: ["er hat gekonnt", "sie hat gekonnt", "es hat gekonnt"], wir: ["wir haben gekonnt"], ihr: ["ihr habt gekonnt"], sie: ["sie haben gekonnt", "Sie haben gekonnt"] },
        preterite: { ich: ["ich konnte"], du: ["du konntest"], er: ["er konnte", "sie konnte", "es konnte"], wir: ["wir konnten"], ihr: ["ihr konntet"], sie: ["sie konnten", "Sie konnten"] },
        subjunctive1: { ich: ["ich knne"], du: ["du knnest"], er: ["er knne", "sie knne", "es knne"], wir: ["wir knnen"], ihr: ["ihr knnet"], sie: ["sie knnen", "Sie knnen"] },
        subjunctive2: { ich: ["ich knnte"], du: ["du knntest"], er: ["er knnte", "sie knnte", "es knnte"], wir: ["wir knnten"], ihr: ["ihr knntet"], sie: ["sie knnten", "Sie knnten"] }
      }
    },
    {
      infinitive: "mssen", english: "must, to have to", frequency: 5, category: "modal",
      conjugations: {
        present: { ich: ["ich muss"], du: ["du musst"], er: ["er muss", "sie muss", "es muss"], wir: ["wir mssen"], ihr: ["ihr msst"], sie: ["sie mssen", "Sie mssen"] },
        perfect: { ich: ["ich habe gemusst"], du: ["du hast gemusst"], er: ["er hat gemusst", "sie hat gemusst", "es hat gemusst"], wir: ["wir haben gemusst"], ihr: ["ihr habt gemusst"], sie: ["sie haben gemusst", "Sie haben gemusst"] },
        preterite: { ich: ["ich musste"], du: ["du musstest"], er: ["er musste", "sie musste", "es musste"], wir: ["wir mussten"], ihr: ["ihr musstet"], sie: ["sie mussten", "Sie mussten"] },
        subjunctive1: { ich: ["ich msse"], du: ["du mssest"], er: ["er msse", "sie msse", "es msse"], wir: ["wir mssen"], ihr: ["ihr msset"], sie: ["sie mssen", "Sie mssen"] },
        subjunctive2: { ich: ["ich msste"], du: ["du msstest"], er: ["er msste", "sie msste", "es msste"], wir: ["wir mssten"], ihr: ["ihr msstet"], sie: ["sie mssten", "Sie mssten"] }
      }
    },
    {
      infinitive: "sollen", english: "should, to be supposed to", frequency: 10, category: "modal",
      conjugations: {
        present: { ich: ["ich soll"], du: ["du sollst"], er: ["er soll", "sie soll", "es soll"], wir: ["wir sollen"], ihr: ["ihr sollt"], sie: ["sie sollen", "Sie sollen"] },
        perfect: { ich: ["ich habe gesollt"], du: ["du hast gesollt"], er: ["er hat gesollt", "sie hat gesollt", "es hat gesollt"], wir: ["wir haben gesollt"], ihr: ["ihr habt gesollt"], sie: ["sie haben gesollt", "Sie haben gesollt"] },
        preterite: { ich: ["ich sollte"], du: ["du solltest"], er: ["er sollte", "sie sollte", "es sollte"], wir: ["wir sollten"], ihr: ["ihr solltet"], sie: ["sie sollten", "Sie sollten"] },
        subjunctive1: { ich: ["ich solle"], du: ["du sollest"], er: ["er solle", "sie solle", "es solle"], wir: ["wir sollen"], ihr: ["ihr sollet"], sie: ["sie sollen", "Sie sollen"] },
        subjunctive2: { ich: ["ich sollte"], du: ["du solltest"], er: ["er sollte", "sie sollte", "es sollte"], wir: ["wir sollten"], ihr: ["ihr solltet"], sie: ["sie sollten", "Sie sollten"] }
      }
    },
    {
      infinitive: "wollen", english: "to want", frequency: 11, category: "modal",
      conjugations: {
        present: { ich: ["ich will"], du: ["du willst"], er: ["er will", "sie will", "es will"], wir: ["wir wollen"], ihr: ["ihr wollt"], sie: ["sie wollen", "Sie wollen"] },
        perfect: { ich: ["ich habe gewollt"], du: ["du hast gewollt"], er: ["er hat gewollt", "sie hat gewollt", "es hat gewollt"], wir: ["wir haben gewollt"], ihr: ["ihr habt gewollt"], sie: ["sie haben gewollt", "Sie haben gewollt"] },
        preterite: { ich: ["ich wollte"], du: ["du wolltest"], er: ["er wollte", "sie wollte", "es wollte"], wir: ["wir wollten"], ihr: ["ihr wolltet"], sie: ["sie wollten", "Sie wollten"] },
        subjunctive1: { ich: ["ich wolle"], du: ["du wollest"], er: ["er wolle", "sie wolle", "es wolle"], wir: ["wir wollen"], ihr: ["ihr wollet"], sie: ["sie wollen", "Sie wollen"] },
        subjunctive2: { ich: ["ich wollte"], du: ["du wolltest"], er: ["er wollte", "sie wollte", "es wollte"], wir: ["wir wollten"], ihr: ["ihr wolltet"], sie: ["sie wollten", "Sie wollten"] }
      }
    },
    {
      infinitive: "drfen", english: "may, to be allowed", frequency: 24, category: "modal",
      conjugations: {
        present: { ich: ["ich darf"], du: ["du darfst"], er: ["er darf", "sie darf", "es darf"], wir: ["wir drfen"], ihr: ["ihr drft"], sie: ["sie drfen", "Sie drfen"] },
        perfect: { ich: ["ich habe gedurft"], du: ["du hast gedurft"], er: ["er hat gedurft", "sie hat gedurft", "es hat gedurft"], wir: ["wir haben gedurft"], ihr: ["ihr habt gedurft"], sie: ["sie haben gedurft", "Sie haben gedurft"] },
        preterite: { ich: ["ich durfte"], du: ["du durftest"], er: ["er durfte", "sie durfte", "es durfte"], wir: ["wir durften"], ihr: ["ihr durftet"], sie: ["sie durften", "Sie durften"] },
        subjunctive1: { ich: ["ich drfe"], du: ["du drfest"], er: ["er drfe", "sie drfe", "es drfe"], wir: ["wir drfen"], ihr: ["ihr drfet"], sie: ["sie drfen", "Sie drfen"] },
        subjunctive2: { ich: ["ich drfte"], du: ["du drftest"], er: ["er drfte", "sie drfte", "es drfte"], wir: ["wir drften"], ihr: ["ihr drftet"], sie: ["sie drften", "Sie drften"] }
      }
    },
    {
      infinitive: "mgen", english: "to like", frequency: 29, category: "modal",
      conjugations: {
        present: { ich: ["ich mag"], du: ["du magst"], er: ["er mag", "sie mag", "es mag"], wir: ["wir mgen"], ihr: ["ihr mgt"], sie: ["sie mgen", "Sie mgen"] },
        perfect: { ich: ["ich habe gemocht"], du: ["du hast gemocht"], er: ["er hat gemocht", "sie hat gemocht", "es hat gemocht"], wir: ["wir haben gemocht"], ihr: ["ihr habt gemocht"], sie: ["sie haben gemocht", "Sie haben gemocht"] },
        preterite: { ich: ["ich mochte"], du: ["du mochtest"], er: ["er mochte", "sie mochte", "es mochte"], wir: ["wir mochten"], ihr: ["ihr mochtet"], sie: ["sie mochten", "Sie mochten"] },
        subjunctive1: { ich: ["ich mge"], du: ["du mgest"], er: ["er mge", "sie mge", "es mge"], wir: ["wir mgen"], ihr: ["ihr mget"], sie: ["sie mgen", "Sie mgen"] },
        subjunctive2: { ich: ["ich mchte"], du: ["du mchtest"], er: ["er mchte", "sie mchte", "es mchte"], wir: ["wir mchten"], ihr: ["ihr mchtet"], sie: ["sie mchten", "Sie mchten"] }
      }
    }
  ],

  // REGULAR VERBS (High frequency)
  regular: [
    {
      infinitive: "sagen", english: "to say", frequency: 6, category: "regular", auxiliary: "haben",
      conjugations: {
        present: { ich: ["ich sage"], du: ["du sagst"], er: ["er sagt", "sie sagt", "es sagt"], wir: ["wir sagen"], ihr: ["ihr sagt"], sie: ["sie sagen", "Sie sagen"] },
        perfect: { ich: ["ich habe gesagt"], du: ["du hast gesagt"], er: ["er hat gesagt", "sie hat gesagt", "es hat gesagt"], wir: ["wir haben gesagt"], ihr: ["ihr habt gesagt"], sie: ["sie haben gesagt", "Sie haben gesagt"] },
        preterite: { ich: ["ich sagte"], du: ["du sagtest"], er: ["er sagte", "sie sagte", "es sagte"], wir: ["wir sagten"], ihr: ["ihr sagtet"], sie: ["sie sagten", "Sie sagten"] },
        imperative: { du: ["sag", "sage"], ihr: ["sagt"], Sie: ["sagen Sie"] },
        subjunctive1: { ich: ["ich sage"], du: ["du sagest"], er: ["er sage", "sie sage", "es sage"], wir: ["wir sagen"], ihr: ["ihr saget"], sie: ["sie sagen", "Sie sagen"] },
        subjunctive2: { ich: ["ich sagte"], du: ["du sagtest"], er: ["er sagte", "sie sagte", "es sagte"], wir: ["wir sagten"], ihr: ["ihr sagtet"], sie: ["sie sagten", "Sie sagten"] }
      }
    },
    {
      infinitive: "machen", english: "to make, to do", frequency: 7, category: "regular", auxiliary: "haben",
      conjugations: {
        present: { ich: ["ich mache"], du: ["du machst"], er: ["er macht", "sie macht", "es macht"], wir: ["wir machen"], ihr: ["ihr macht"], sie: ["sie machen", "Sie machen"] },
        perfect: { ich: ["ich habe gemacht"], du: ["du hast gemacht"], er: ["er hat gemacht", "sie hat gemacht", "es hat gemacht"], wir: ["wir haben gemacht"], ihr: ["ihr habt gemacht"], sie: ["sie haben gemacht", "Sie haben gemacht"] },
        preterite: { ich: ["ich machte"], du: ["du machtest"], er: ["er machte", "sie machte", "es machte"], wir: ["wir machten"], ihr: ["ihr machtet"], sie: ["sie machten", "Sie machten"] },
        imperative: { du: ["mach", "mache"], ihr: ["macht"], Sie: ["machen Sie"] },
        subjunctive1: { ich: ["ich mache"], du: ["du machest"], er: ["er mache", "sie mache", "es mache"], wir: ["wir machen"], ihr: ["ihr machet"], sie: ["sie machen", "Sie machen"] },
        subjunctive2: { ich: ["ich machte"], du: ["du machtest"], er: ["er machte", "sie machte", "es machte"], wir: ["wir machten"], ihr: ["ihr machtet"], sie: ["sie machten", "Sie machten"] }
      }
    },
    {
      infinitive: "glauben", english: "to believe", frequency: 26, category: "regular", auxiliary: "haben",
      conjugations: {
        present: { ich: ["ich glaube"], du: ["du glaubst"], er: ["er glaubt", "sie glaubt", "es glaubt"], wir: ["wir glauben"], ihr: ["ihr glaubt"], sie: ["sie glauben", "Sie glauben"] },
        perfect: { ich: ["ich habe geglaubt"], du: ["du hast geglaubt"], er: ["er hat geglaubt", "sie hat geglaubt", "es hat geglaubt"], wir: ["wir haben geglaubt"], ihr: ["ihr habt geglaubt"], sie: ["sie haben geglaubt", "Sie haben geglaubt"] },
        preterite: { ich: ["ich glaubte"], du: ["du glaubtest"], er: ["er glaubte", "sie glaubte", "es glaubte"], wir: ["wir glaubten"], ihr: ["ihr glaubtet"], sie: ["sie glaubten", "Sie glaubten"] },
        imperative: { du: ["glaub", "glaube"], ihr: ["glaubt"], Sie: ["glauben Sie"] },
        subjunctive1: { ich: ["ich glaube"], du: ["du glaubest"], er: ["er glaube", "sie glaube", "es glaube"], wir: ["wir glauben"], ihr: ["ihr glaubet"], sie: ["sie glauben", "Sie glauben"] },
        subjunctive2: { ich: ["ich glaubte"], du: ["du glaubtest"], er: ["er glaubte", "sie glaubte", "es glaubte"], wir: ["wir glaubten"], ihr: ["ihr glaubtet"], sie: ["sie glaubten", "Sie glaubten"] }
      }
    }
  ],

  // STRONG VERBS (Irregular patterns)
  strong: [
    {
      infinitive: "geben", english: "to give", frequency: 8, category: "strong", auxiliary: "haben",
      conjugations: {
        present: { ich: ["ich gebe"], du: ["du gibst"], er: ["er gibt", "sie gibt", "es gibt"], wir: ["wir geben"], ihr: ["ihr gebt"], sie: ["sie geben", "Sie geben"] },
        perfect: { ich: ["ich habe gegeben"], du: ["du hast gegeben"], er: ["er hat gegeben", "sie hat gegeben", "es hat gegeben"], wir: ["wir haben gegeben"], ihr: ["ihr habt gegeben"], sie: ["sie haben gegeben", "Sie haben gegeben"] },
        preterite: { ich: ["ich gab"], du: ["du gabst"], er: ["er gab", "sie gab", "es gab"], wir: ["wir gaben"], ihr: ["ihr gabt"], sie: ["sie gaben", "Sie gaben"] },
        imperative: { du: ["gib"], ihr: ["gebt"], Sie: ["geben Sie"] },
        subjunctive1: { ich: ["ich gebe"], du: ["du gebest"], er: ["er gebe", "sie gebe", "es gebe"], wir: ["wir geben"], ihr: ["ihr gebet"], sie: ["sie geben", "Sie geben"] },
        subjunctive2: { ich: ["ich gbe"], du: ["du gbest"], er: ["er gbe", "sie gbe", "es gbe"], wir: ["wir gben"], ihr: ["ihr gbet"], sie: ["sie gben", "Sie gben"] }
      }
    },
    {
      infinitive: "kommen", english: "to come", frequency: 9, category: "strong", auxiliary: "sein",
      conjugations: {
        present: { ich: ["ich komme"], du: ["du kommst"], er: ["er kommt", "sie kommt", "es kommt"], wir: ["wir kommen"], ihr: ["ihr kommt"], sie: ["sie kommen", "Sie kommen"] },
        perfect: { ich: ["ich bin gekommen"], du: ["du bist gekommen"], er: ["er ist gekommen", "sie ist gekommen", "es ist gekommen"], wir: ["wir sind gekommen"], ihr: ["ihr seid gekommen"], sie: ["sie sind gekommen", "Sie sind gekommen"] },
        preterite: { ich: ["ich kam"], du: ["du kamst"], er: ["er kam", "sie kam", "es kam"], wir: ["wir kamen"], ihr: ["ihr kamt"], sie: ["sie kamen", "Sie kamen"] },
        imperative: { du: ["komm", "komme"], ihr: ["kommt"], Sie: ["kommen Sie"] },
        subjunctive1: { ich: ["ich komme"], du: ["du kommest"], er: ["er komme", "sie komme", "es komme"], wir: ["wir kommen"], ihr: ["ihr kommet"], sie: ["sie kommen", "Sie kommen"] },
        subjunctive2: { ich: ["ich kme"], du: ["du kmest"], er: ["er kme", "sie kme", "es kme"], wir: ["wir kmen"], ihr: ["ihr kmet"], sie: ["sie kmen", "Sie kmen"] }
      }
    },
    {
      infinitive: "gehen", english: "to go", frequency: 12, category: "strong", auxiliary: "sein",
      conjugations: {
        present: { ich: ["ich gehe"], du: ["du gehst"], er: ["er geht", "sie geht", "es geht"], wir: ["wir gehen"], ihr: ["ihr geht"], sie: ["sie gehen", "Sie gehen"] },
        perfect: { ich: ["ich bin gegangen"], du: ["du bist gegangen"], er: ["er ist gegangen", "sie ist gegangen", "es ist gegangen"], wir: ["wir sind gegangen"], ihr: ["ihr seid gegangen"], sie: ["sie sind gegangen", "Sie sind gegangen"] },
        preterite: { ich: ["ich ging"], du: ["du gingst"], er: ["er ging", "sie ging", "es ging"], wir: ["wir gingen"], ihr: ["ihr gingt"], sie: ["sie gingen", "Sie gingen"] },
        imperative: { du: ["geh", "gehe"], ihr: ["geht"], Sie: ["gehen Sie"] },
        subjunctive1: { ich: ["ich gehe"], du: ["du gehest"], er: ["er gehe", "sie gehe", "es gehe"], wir: ["wir gehen"], ihr: ["ihr gehet"], sie: ["sie gehen", "Sie gehen"] },
        subjunctive2: { ich: ["ich ginge"], du: ["du gingest"], er: ["er ginge", "sie ginge", "es ginge"], wir: ["wir gingen"], ihr: ["ihr ginget"], sie: ["sie gingen", "Sie gingen"] }
      }
    }
  ],

  // SEPARABLE VERBS
  separable: [
    {
      infinitive: "aufstehen", english: "to get up", frequency: 25, category: "separable", auxiliary: "sein",
      conjugations: {
        present: { ich: ["ich stehe auf"], du: ["du stehst auf"], er: ["er steht auf", "sie steht auf", "es steht auf"], wir: ["wir stehen auf"], ihr: ["ihr steht auf"], sie: ["sie stehen auf", "Sie stehen auf"] },
        perfect: { ich: ["ich bin aufgestanden"], du: ["du bist aufgestanden"], er: ["er ist aufgestanden", "sie ist aufgestanden", "es ist aufgestanden"], wir: ["wir sind aufgestanden"], ihr: ["ihr seid aufgestanden"], sie: ["sie sind aufgestanden", "Sie sind aufgestanden"] },
        preterite: { ich: ["ich stand auf"], du: ["du standst auf"], er: ["er stand auf", "sie stand auf", "es stand auf"], wir: ["wir standen auf"], ihr: ["ihr standet auf"], sie: ["sie standen auf", "Sie standen auf"] },
        imperative: { du: ["steh auf", "stehe auf"], ihr: ["steht auf"], Sie: ["stehen Sie auf"] },
        subjunctive1: { ich: ["ich stehe auf"], du: ["du stehest auf"], er: ["er stehe auf", "sie stehe auf", "es stehe auf"], wir: ["wir stehen auf"], ihr: ["ihr stehet auf"], sie: ["sie stehen auf", "Sie stehen auf"] },
        subjunctive2: { ich: ["ich stnde auf", "ich stnde auf"], du: ["du stndest auf", "du stndest auf"], er: ["er stnde auf", "sie stnde auf", "es stnde auf", "er stnde auf", "sie stnde auf", "es stnde auf"], wir: ["wir stnden auf", "wir stnden auf"], ihr: ["ihr stndet auf", "ihr stndet auf"], sie: ["sie stnden auf", "Sie stnden auf", "sie stnden auf", "Sie stnden auf"] }
      }
    }
  ],

  // INSEPARABLE VERBS
  inseparable: [
    {
      infinitive: "verstehen", english: "to understand", frequency: 45, category: "inseparable", auxiliary: "haben",
      conjugations: {
        present: { ich: ["ich verstehe"], du: ["du verstehst"], er: ["er versteht", "sie versteht", "es versteht"], wir: ["wir verstehen"], ihr: ["ihr versteht"], sie: ["sie verstehen", "Sie verstehen"] },
        perfect: { ich: ["ich habe verstanden"], du: ["du hast verstanden"], er: ["er hat verstanden", "sie hat verstanden", "es hat verstanden"], wir: ["wir haben verstanden"], ihr: ["ihr habt verstanden"], sie: ["sie haben verstanden", "Sie haben verstanden"] },
        preterite: { ich: ["ich verstand"], du: ["du verstandst"], er: ["er verstand", "sie verstand", "es verstand"], wir: ["wir verstanden"], ihr: ["ihr verstandet"], sie: ["sie verstanden", "Sie verstanden"] },
        imperative: { du: ["versteh", "verstehe"], ihr: ["versteht"], Sie: ["verstehen Sie"] },
        subjunctive1: { ich: ["ich verstehe"], du: ["du verstehest"], er: ["er verstehe", "sie verstehe", "es verstehe"], wir: ["wir verstehen"], ihr: ["ihr verstehet"], sie: ["sie verstehen", "Sie verstehen"] },
        subjunctive2: { ich: ["ich verstnde", "ich verstnde"], du: ["du verstndest", "du verstndest"], er: ["er verstnde", "sie verstnde", "es verstnde", "er verstnde", "sie verstnde", "es verstnde"], wir: ["wir verstnden", "wir verstnden"], ihr: ["ihr verstndet", "ihr verstndet"], sie: ["sie verstnden", "Sie verstnden", "sie verstnden", "Sie verstnden"] }
      }
    }
  ],

  // -IEREN VERBS
  ieren: [
    {
      infinitive: "studieren", english: "to study", frequency: 65, category: "ieren", auxiliary: "haben",
      conjugations: {
        present: { ich: ["ich studiere"], du: ["du studierst"], er: ["er studiert", "sie studiert", "es studiert"], wir: ["wir studieren"], ihr: ["ihr studiert"], sie: ["sie studieren", "Sie studieren"] },
        perfect: { ich: ["ich habe studiert"], du: ["du hast studiert"], er: ["er hat studiert", "sie hat studiert", "es hat studiert"], wir: ["wir haben studiert"], ihr: ["ihr habt studiert"], sie: ["sie haben studiert", "Sie haben studiert"] },
        preterite: { ich: ["ich studierte"], du: ["du studiertest"], er: ["er studierte", "sie studierte", "es studierte"], wir: ["wir studierten"], ihr: ["ihr studiertet"], sie: ["sie studierten", "Sie studierten"] },
        imperative: { du: ["studier", "studiere"], ihr: ["studiert"], Sie: ["studieren Sie"] },
        subjunctive1: { ich: ["ich studiere"], du: ["du studierest"], er: ["er studiere", "sie studiere", "es studiere"], wir: ["wir studieren"], ihr: ["ihr studieret"], sie: ["sie studieren", "Sie studieren"] },
        subjunctive2: { ich: ["ich studierte"], du: ["du studiertest"], er: ["er studierte", "sie studierte", "es studierte"], wir: ["wir studierten"], ihr: ["ihr studiertet"], sie: ["sie studierten", "Sie studierten"] }
      }
    }
  ]
};

// Test verbs for now
export const verbsByFrequency = [
  { infinitive: "sein", frequency: 1, category: "essential" },
  { infinitive: "haben", frequency: 2, category: "essential" },
  { infinitive: "werden", frequency: 3, category: "essential" },
  { infinitive: "knnen", frequency: 4, category: "modal" },
  { infinitive: "mssen", frequency: 5, category: "modal" },
  { infinitive: "sagen", frequency: 6, category: "regular" },
  { infinitive: "machen", frequency: 7, category: "regular" },
  { infinitive: "geben", frequency: 8, category: "strong" },
  { infinitive: "kommen", frequency: 9, category: "strong" },
  { infinitive: "sollen", frequency: 10, category: "modal" },
  { infinitive: "wollen", frequency: 11, category: "modal" },
  { infinitive: "gehen", frequency: 12, category: "strong" }
];

export default verbDatabase;
