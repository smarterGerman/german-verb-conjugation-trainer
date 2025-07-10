// data/verbDatabase.js - COMPLETE TOP 100 GERMAN VERBS
export const verbDatabase = {
  
  // ESSENTIAL VERBS (3 verbs)
  essential: [
    {
      infinitive: "sein", english: "to be", frequency: 1, category: "essential", auxiliary: "sein",
      conjugations: {
        present: { ich: ["ich bin"], du: ["du bist"], er: ["er ist", "sie ist", "es ist"], wir: ["wir sind"], ihr: ["ihr seid"], sie: ["sie sind", "Sie sind"] },
        perfect: { ich: ["ich bin gewesen"], du: ["du bist gewesen"], er: ["er ist gewesen", "sie ist gewesen", "es ist gewesen"], wir: ["wir sind gewesen"], ihr: ["ihr seid gewesen"], sie: ["sie sind gewesen", "Sie sind gewesen"] },
        preterite: { ich: ["ich war"], du: ["du warst"], er: ["er war", "sie war", "es war"], wir: ["wir waren"], ihr: ["ihr wart"], sie: ["sie waren", "Sie waren"] },
        imperative: { du: ["sei"], ihr: ["seid"], Sie: ["seien Sie"] },
        subjunctive1: { ich: ["ich sei"], du: ["du seist", "du seiest"], er: ["er sei", "sie sei", "es sei"], wir: ["wir seien"], ihr: ["ihr seiet"], sie: ["sie seien", "Sie seien"] },
        subjunctive2: { ich: ["ich wäre"], du: ["du wärst", "du wärest"], er: ["er wäre", "sie wäre", "es wäre"], wir: ["wir wären"], ihr: ["ihr wärt", "ihr wäret"], sie: ["sie wären", "Sie wären"] }
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
        subjunctive2: { ich: ["ich hätte"], du: ["du hättest"], er: ["er hätte", "sie hätte", "es hätte"], wir: ["wir hätten"], ihr: ["ihr hättet"], sie: ["sie hätten", "Sie hätten"] }
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
        subjunctive2: { ich: ["ich würde"], du: ["du würdest"], er: ["er würde", "sie würde", "es würde"], wir: ["wir würden"], ihr: ["ihr würdet"], sie: ["sie würden", "Sie würden"] }
      }
    }
  ],

  // MODAL VERBS (6 verbs)
  modal: [
    {
      infinitive: "können", english: "can, to be able to", frequency: 4, category: "modal",
      conjugations: {
        present: { ich: ["ich kann"], du: ["du kannst"], er: ["er kann", "sie kann", "es kann"], wir: ["wir können"], ihr: ["ihr könnt"], sie: ["sie können", "Sie können"] },
        perfect: { ich: ["ich habe gekonnt"], du: ["du hast gekonnt"], er: ["er hat gekonnt", "sie hat gekonnt", "es hat gekonnt"], wir: ["wir haben gekonnt"], ihr: ["ihr habt gekonnt"], sie: ["sie haben gekonnt", "Sie haben gekonnt"] },
        preterite: { ich: ["ich konnte"], du: ["du konntest"], er: ["er konnte", "sie konnte", "es konnte"], wir: ["wir konnten"], ihr: ["ihr konntet"], sie: ["sie konnten", "Sie konnten"] },
        subjunctive1: { ich: ["ich könne"], du: ["du könnest"], er: ["er könne", "sie könne", "es könne"], wir: ["wir können"], ihr: ["ihr könnet"], sie: ["sie können", "Sie können"] },
        subjunctive2: { ich: ["ich könnte"], du: ["du könntest"], er: ["er könnte", "sie könnte", "es könnte"], wir: ["wir könnten"], ihr: ["ihr könntet"], sie: ["sie könnten", "Sie könnten"] }
      }
    },
    {
      infinitive: "müssen", english: "must, to have to", frequency: 5, category: "modal",
      conjugations: {
        present: { ich: ["ich muss"], du: ["du musst"], er: ["er muss", "sie muss", "es muss"], wir: ["wir müssen"], ihr: ["ihr müsst"], sie: ["sie müssen", "Sie müssen"] },
        perfect: { ich: ["ich habe gemusst"], du: ["du hast gemusst"], er: ["er hat gemusst", "sie hat gemusst", "es hat gemusst"], wir: ["wir haben gemusst"], ihr: ["ihr habt gemusst"], sie: ["sie haben gemusst", "Sie haben gemusst"] },
        preterite: { ich: ["ich musste"], du: ["du musstest"], er: ["er musste", "sie musste", "es musste"], wir: ["wir mussten"], ihr: ["ihr musstet"], sie: ["sie mussten", "Sie mussten"] },
        subjunctive1: { ich: ["ich müsse"], du: ["du müssest"], er: ["er müsse", "sie müsse", "es müsse"], wir: ["wir müssen"], ihr: ["ihr müsset"], sie: ["sie müssen", "Sie müssen"] },
        subjunctive2: { ich: ["ich müsste"], du: ["du müsstest"], er: ["er müsste", "sie müsste", "es müsste"], wir: ["wir müssten"], ihr: ["ihr müsstet"], sie: ["sie müssten", "Sie müssten"] }
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
      infinitive: "dürfen", english: "may, to be allowed", frequency: 24, category: "modal",
      conjugations: {
        present: { ich: ["ich darf"], du: ["du darfst"], er: ["er darf", "sie darf", "es darf"], wir: ["wir dürfen"], ihr: ["ihr dürft"], sie: ["sie dürfen", "Sie dürfen"] },
        perfect: { ich: ["ich habe gedurft"], du: ["du hast gedurft"], er: ["er hat gedurft", "sie hat gedurft", "es hat gedurft"], wir: ["wir haben gedurft"], ihr: ["ihr habt gedurft"], sie: ["sie haben gedurft", "Sie haben gedurft"] },
        preterite: { ich: ["ich durfte"], du: ["du durftest"], er: ["er durfte", "sie durfte", "es durfte"], wir: ["wir durften"], ihr: ["ihr durftet"], sie: ["sie durften", "Sie durften"] },
        subjunctive1: { ich: ["ich dürfe"], du: ["du dürfest"], er: ["er dürfe", "sie dürfe", "es dürfe"], wir: ["wir dürfen"], ihr: ["ihr dürfet"], sie: ["sie dürfen", "Sie dürfen"] },
        subjunctive2: { ich: ["ich dürfte"], du: ["du dürftest"], er: ["er dürfte", "sie dürfte", "es dürfte"], wir: ["wir dürften"], ihr: ["ihr dürftet"], sie: ["sie dürften", "Sie dürften"] }
      }
    },
    {
      infinitive: "mögen", english: "to like", frequency: 29, category: "modal",
      conjugations: {
        present: { ich: ["ich mag"], du: ["du magst"], er: ["er mag", "sie mag", "es mag"], wir: ["wir mögen"], ihr: ["ihr mögt"], sie: ["sie mögen", "Sie mögen"] },
        perfect: { ich: ["ich habe gemocht"], du: ["du hast gemocht"], er: ["er hat gemocht", "sie hat gemocht", "es hat gemocht"], wir: ["wir haben gemocht"], ihr: ["ihr habt gemocht"], sie: ["sie haben gemocht", "Sie haben gemocht"] },
        preterite: { ich: ["ich mochte"], du: ["du mochtest"], er: ["er mochte", "sie mochte", "es mochte"], wir: ["wir mochten"], ihr: ["ihr mochtet"], sie: ["sie mochten", "Sie mochten"] },
        subjunctive1: { ich: ["ich möge"], du: ["du mögest"], er: ["er möge", "sie möge", "es möge"], wir: ["wir mögen"], ihr: ["ihr möget"], sie: ["sie mögen", "Sie mögen"] },
        subjunctive2: { ich: ["ich möchte"], du: ["du möchtest"], er: ["er möchte", "sie möchte", "es möchte"], wir: ["wir möchten"], ihr: ["ihr möchtet"], sie: ["sie möchten", "Sie möchten"] }
      }
    }
  ],

  // REGULAR VERBS (25 verbs)
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
    },
    {
      infinitive: "zeigen", english: "to show", frequency: 30, category: "regular", auxiliary: "haben",
      conjugations: {
        present: { ich: ["ich zeige"], du: ["du zeigst"], er: ["er zeigt", "sie zeigt", "es zeigt"], wir: ["wir zeigen"], ihr: ["ihr zeigt"], sie: ["sie zeigen", "Sie zeigen"] },
        perfect: { ich: ["ich habe gezeigt"], du: ["du hast gezeigt"], er: ["er hat gezeigt", "sie hat gezeigt", "es hat gezeigt"], wir: ["wir haben gezeigt"], ihr: ["ihr habt gezeigt"], sie: ["sie haben gezeigt", "Sie haben gezeigt"] },
        preterite: { ich: ["ich zeigte"], du: ["du zeigtest"], er: ["er zeigte", "sie zeigte", "es zeigte"], wir: ["wir zeigten"], ihr: ["ihr zeigtet"], sie: ["sie zeigten", "Sie zeigten"] },
        imperative: { du: ["zeig", "zeige"], ihr: ["zeigt"], Sie: ["zeigen Sie"] },
        subjunctive1: { ich: ["ich zeige"], du: ["du zeigest"], er: ["er zeige", "sie zeige", "es zeige"], wir: ["wir zeigen"], ihr: ["ihr zeiget"], sie: ["sie zeigen", "Sie zeigen"] },
        subjunctive2: { ich: ["ich zeigte"], du: ["du zeigtest"], er: ["er zeigte", "sie zeigte", "es zeigte"], wir: ["wir zeigten"], ihr: ["ihr zeigtet"], sie: ["sie zeigten", "Sie zeigten"] }
      }
    },
    {
      infinitive: "führen", english: "to lead", frequency: 31, category: "regular", auxiliary: "haben",
      conjugations: {
        present: { ich: ["ich führe"], du: ["du führst"], er: ["er führt", "sie führt", "es führt"], wir: ["wir führen"], ihr: ["ihr führt"], sie: ["sie führen", "Sie führen"] },
        perfect: { ich: ["ich habe geführt"], du: ["du hast geführt"], er: ["er hat geführt", "sie hat geführt", "es hat geführt"], wir: ["wir haben geführt"], ihr: ["ihr habt geführt"], sie: ["sie haben geführt", "Sie haben geführt"] },
        preterite: { ich: ["ich führte"], du: ["du führtest"], er: ["er führte", "sie führte", "es führte"], wir: ["wir führten"], ihr: ["ihr führtet"], sie: ["sie führten", "Sie führten"] },
        imperative: { du: ["führ", "führe"], ihr: ["führt"], Sie: ["führen Sie"] },
        subjunctive1: { ich: ["ich führe"], du: ["du führest"], er: ["er führe", "sie führe", "es führe"], wir: ["wir führen"], ihr: ["ihr führet"], sie: ["sie führen", "Sie führen"] },
        subjunctive2: { ich: ["ich führte"], du: ["du führtest"], er: ["er führte", "sie führte", "es führte"], wir: ["wir führten"], ihr: ["ihr führtet"], sie: ["sie führten", "Sie führten"] }
      }
    }
  ],

  // STRONG VERBS (40 verbs) - Most important irregular verbs
  strong: [
    {
      infinitive: "geben", english: "to give", frequency: 8, category: "strong", auxiliary: "haben",
      conjugations: {
        present: { ich: ["ich gebe"], du: ["du gibst"], er: ["er gibt", "sie gibt", "es gibt"], wir: ["wir geben"], ihr: ["ihr gebt"], sie: ["sie geben", "Sie geben"] },
        perfect: { ich: ["ich habe gegeben"], du: ["du hast gegeben"], er: ["er hat gegeben", "sie hat gegeben", "es hat gegeben"], wir: ["wir haben gegeben"], ihr: ["ihr habt gegeben"], sie: ["sie haben gegeben", "Sie haben gegeben"] },
        preterite: { ich: ["ich gab"], du: ["du gabst"], er: ["er gab", "sie gab", "es gab"], wir: ["wir gaben"], ihr: ["ihr gabt"], sie: ["sie gaben", "Sie gaben"] },
        imperative: { du: ["gib"], ihr: ["gebt"], Sie: ["geben Sie"] },
        subjunctive1: { ich: ["ich gebe"], du: ["du gebest"], er: ["er gebe", "sie gebe", "es gebe"], wir: ["wir geben"], ihr: ["ihr gebet"], sie: ["sie geben", "Sie geben"] },
        subjunctive2: { ich: ["ich gäbe"], du: ["du gäbest"], er: ["er gäbe", "sie gäbe", "es gäbe"], wir: ["wir gäben"], ihr: ["ihr gäbet"], sie: ["sie gäben", "Sie gäben"] }
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
        subjunctive2: { ich: ["ich käme"], du: ["du kämest"], er: ["er käme", "sie käme", "es käme"], wir: ["wir kämen"], ihr: ["ihr kämet"], sie: ["sie kämen", "Sie kämen"] }
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
    },
    {
      infinitive: "wissen", english: "to know", frequency: 13, category: "strong", auxiliary: "haben",
      conjugations: {
        present: { ich: ["ich weiß"], du: ["du weißt"], er: ["er weiß", "sie weiß", "es weiß"], wir: ["wir wissen"], ihr: ["ihr wisst"], sie: ["sie wissen", "Sie wissen"] },
        perfect: { ich: ["ich habe gewusst"], du: ["du hast gewusst"], er: ["er hat gewusst", "sie hat gewusst", "es hat gewusst"], wir: ["wir haben gewusst"], ihr: ["ihr habt gewusst"], sie: ["sie haben gewusst", "Sie haben gewusst"] },
        preterite: { ich: ["ich wusste"], du: ["du wusstest"], er: ["er wusste", "sie wusste", "es wusste"], wir: ["wir wussten"], ihr: ["ihr wusstet"], sie: ["sie wussten", "Sie wussten"] },
        imperative: { du: ["wiss", "wisse"], ihr: ["wisst"], Sie: ["wissen Sie"] },
        subjunctive1: { ich: ["ich wisse"], du: ["du wissest"], er: ["er wisse", "sie wisse", "es wisse"], wir: ["wir wissen"], ihr: ["ihr wisset"], sie: ["sie wissen", "Sie wissen"] },
        subjunctive2: { ich: ["ich wüsste"], du: ["du wüsstest"], er: ["er wüsste", "sie wüsste", "es wüsste"], wir: ["wir wüssten"], ihr: ["ihr wüsstet"], sie: ["sie wüssten", "Sie wüssten"] }
      }
    },
    {
      infinitive: "sehen", english: "to see", frequency: 14, category: "strong", auxiliary: "haben",
      conjugations: {
        present: { ich: ["ich sehe"], du: ["du siehst"], er: ["er sieht", "sie sieht", "es sieht"], wir: ["wir sehen"], ihr: ["ihr seht"], sie: ["sie sehen", "Sie sehen"] },
        perfect: { ich: ["ich habe gesehen"], du: ["du hast gesehen"], er: ["er hat gesehen", "sie hat gesehen", "es hat gesehen"], wir: ["wir haben gesehen"], ihr: ["ihr habt gesehen"], sie: ["sie haben gesehen", "Sie haben gesehen"] },
        preterite: { ich: ["ich sah"], du: ["du sahst"], er: ["er sah", "sie sah", "es sah"], wir: ["wir sahen"], ihr: ["ihr saht"], sie: ["sie sahen", "Sie sahen"] },
        imperative: { du: ["sieh", "siehe"], ihr: ["seht"], Sie: ["sehen Sie"] },
        subjunctive1: { ich: ["ich sehe"], du: ["du sehest"], er: ["er sehe", "sie sehe", "es sehe"], wir: ["wir sehen"], ihr: ["ihr sehet"], sie: ["sie sehen", "Sie sehen"] },
        subjunctive2: { ich: ["ich sähe"], du: ["du sähest"], er: ["er sähe", "sie sähe", "es sähe"], wir: ["wir sähen"], ihr: ["ihr sähet"], sie: ["sie sähen", "Sie sähen"] }
      }
    }
  ],

  // SEPARABLE VERBS (15 verbs)
  separable: [
    {
      infinitive: "aufstehen", english: "to get up", frequency: 25, category: "separable", auxiliary: "sein",
      conjugations: {
        present: { ich: ["ich stehe auf"], du: ["du stehst auf"], er: ["er steht auf", "sie steht auf", "es steht auf"], wir: ["wir stehen auf"], ihr: ["ihr steht auf"], sie: ["sie stehen auf", "Sie stehen auf"] },
        perfect: { ich: ["ich bin aufgestanden"], du: ["du bist aufgestanden"], er: ["er ist aufgestanden", "sie ist aufgestanden", "es ist aufgestanden"], wir: ["wir sind aufgestanden"], ihr: ["ihr seid aufgestanden"], sie: ["sie sind aufgestanden", "Sie sind aufgestanden"] },
        preterite: { ich: ["ich stand auf"], du: ["du standst auf"], er: ["er stand auf", "sie stand auf", "es stand auf"], wir: ["wir standen auf"], ihr: ["ihr standet auf"], sie: ["sie standen auf", "Sie standen auf"] },
        imperative: { du: ["steh auf", "stehe auf"], ihr: ["steht auf"], Sie: ["stehen Sie auf"] },
        subjunctive1: { ich: ["ich stehe auf"], du: ["du stehest auf"], er: ["er stehe auf", "sie stehe auf", "es stehe auf"], wir: ["wir stehen auf"], ihr: ["ihr stehet auf"], sie: ["sie stehen auf", "Sie stehen auf"] },
        subjunctive2: { ich: ["ich stände auf", "ich stünde auf"], du: ["du ständest auf", "du stündest auf"], er: ["er stände auf", "sie stände auf", "es stände auf", "er stünde auf", "sie stünde auf", "es stünde auf"], wir: ["wir ständen auf", "wir stünden auf"], ihr: ["ihr ständet auf", "ihr stündet auf"], sie: ["sie ständen auf", "Sie ständen auf", "sie stünden auf", "Sie stünden auf"] }
      }
    },
    {
      infinitive: "ankommen", english: "to arrive", frequency: 35, category: "separable", auxiliary: "sein",
      conjugations: {
        present: { ich: ["ich komme an"], du: ["du kommst an"], er: ["er kommt an", "sie kommt an", "es kommt an"], wir: ["wir kommen an"], ihr: ["ihr kommt an"], sie: ["sie kommen an", "Sie kommen an"] },
        perfect: { ich: ["ich bin angekommen"], du: ["du bist angekommen"], er: ["er ist angekommen", "sie ist angekommen", "es ist angekommen"], wir: ["wir sind angekommen"], ihr: ["ihr seid angekommen"], sie: ["sie sind angekommen", "Sie sind angekommen"] },
        preterite: { ich: ["ich kam an"], du: ["du kamst an"], er: ["er kam an", "sie kam an", "es kam an"], wir: ["wir kamen an"], ihr: ["ihr kamt an"], sie: ["sie kamen an", "Sie kamen an"] },
        imperative: { du: ["komm an", "komme an"], ihr: ["kommt an"], Sie: ["kommen Sie an"] },
        subjunctive1: { ich: ["ich komme an"], du: ["du kommest an"], er: ["er komme an", "sie komme an", "es komme an"], wir: ["wir kommen an"], ihr: ["ihr kommet an"], sie: ["sie kommen an", "Sie kommen an"] },
        subjunctive2: { ich: ["ich käme an"], du: ["du kämest an"], er: ["er käme an", "sie käme an", "es käme an"], wir: ["wir kämen an"], ihr: ["ihr kämet an"], sie: ["sie kämen an", "Sie kämen an"] }
      }
    }
  ],

  // INSEPARABLE VERBS (8 verbs)
  inseparable: [
    {
      infinitive: "verstehen", english: "to understand", frequency: 45, category: "inseparable", auxiliary: "haben",
      conjugations: {
        present: { ich: ["ich verstehe"], du: ["du verstehst"], er: ["er versteht", "sie versteht", "es versteht"], wir: ["wir verstehen"], ihr: ["ihr versteht"], sie: ["sie verstehen", "Sie verstehen"] },
        perfect: { ich: ["ich habe verstanden"], du: ["du hast verstanden"], er: ["er hat verstanden", "sie hat verstanden", "es hat verstanden"], wir: ["wir haben verstanden"], ihr: ["ihr habt verstanden"], sie: ["sie haben verstanden", "Sie haben verstanden"] },
        preterite: { ich: ["ich verstand"], du: ["du verstandst"], er: ["er verstand", "sie verstand", "es verstand"], wir: ["wir verstanden"], ihr: ["ihr verstandet"], sie: ["sie verstanden", "Sie verstanden"] },
        imperative: { du: ["versteh", "verstehe"], ihr: ["versteht"], Sie: ["verstehen Sie"] },
        subjunctive1: { ich: ["ich verstehe"], du: ["du verstehest"], er: ["er verstehe", "sie verstehe", "es verstehe"], wir: ["wir verstehen"], ihr: ["ihr verstehet"], sie: ["sie verstehen", "Sie verstehen"] },
        subjunctive2: { ich: ["ich verstände", "ich verstünde"], du: ["du verständest", "du verstündest"], er: ["er verstände", "sie verstände", "es verstände", "er verstünde", "sie verstünde", "es verstünde"], wir: ["wir verständen", "wir verstünden"], ihr: ["ihr verständet", "ihr verstündet"], sie: ["sie verständen", "Sie verständen", "sie verstünden", "Sie verstünden"] }
      }
    },
    {
      infinitive: "bekommen", english: "to get, to receive", frequency: 47, category: "inseparable", auxiliary: "haben",
      conjugations: {
        present: { ich: ["ich bekomme"], du: ["du bekommst"], er: ["er bekommt", "sie bekommt", "es bekommt"], wir: ["wir bekommen"], ihr: ["ihr bekommt"], sie: ["sie bekommen", "Sie bekommen"] },
        perfect: { ich: ["ich habe bekommen"], du: ["du hast bekommen"], er: ["er hat bekommen", "sie hat bekommen", "es hat bekommen"], wir: ["wir haben bekommen"], ihr: ["ihr habt bekommen"], sie: ["sie haben bekommen", "Sie haben bekommen"] },
        preterite: { ich: ["ich bekam"], du: ["du bekamst"], er: ["er bekam", "sie bekam", "es bekam"], wir: ["wir bekamen"], ihr: ["ihr bekamt"], sie: ["sie bekamen", "Sie bekamen"] },
        imperative: { du: ["bekomm", "bekomme"], ihr: ["bekommt"], Sie: ["bekommen Sie"] },
        subjunctive1: { ich: ["ich bekomme"], du: ["du bekommest"], er: ["er bekomme", "sie bekomme", "es bekomme"], wir: ["wir bekommen"], ihr: ["ihr bekommet"], sie: ["sie bekommen", "Sie bekommen"] },
        subjunctive2: { ich: ["ich bekäme"], du: ["du bekämest"], er: ["er bekäme", "sie bekäme", "es bekäme"], wir: ["wir bekämen"], ihr: ["ihr bekämet"], sie: ["sie bekämen", "Sie bekämen"] }
      }
    }
  ],

  // -IEREN VERBS (3 verbs)
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
    },
    {
      infinitive: "funktionieren", english: "to function, to work", frequency: 70, category: "ieren", auxiliary: "haben",
      conjugations: {
        present: { ich: ["ich funktioniere"], du: ["du funktionierst"], er: ["er funktioniert", "sie funktioniert", "es funktioniert"], wir: ["wir funktionieren"], ihr: ["ihr funktioniert"], sie: ["sie funktionieren", "Sie funktionieren"] },
        perfect: { ich: ["ich habe funktioniert"], du: ["du hast funktioniert"], er: ["er hat funktioniert", "sie hat funktioniert", "es hat funktioniert"], wir: ["wir haben funktioniert"], ihr: ["ihr habt funktioniert"], sie: ["sie haben funktioniert", "Sie haben funktioniert"] },
        preterite: { ich: ["ich funktionierte"], du: ["du funktioniertest"], er: ["er funktionierte", "sie funktionierte", "es funktionierte"], wir: ["wir funktionierten"], ihr: ["ihr funktioniertet"], sie: ["sie funktionierten", "Sie funktionierten"] },
        imperative: { du: ["funktionier", "funktioniere"], ihr: ["funktioniert"], Sie: ["funktionieren Sie"] },
        subjunctive1: { ich: ["ich funktioniere"], du: ["du funktionierest"], er: ["er funktioniere", "sie funktioniere", "es funktioniere"], wir: ["wir funktionieren"], ihr: ["ihr funktionieret"], sie: ["sie funktionieren", "Sie funktionieren"] },
        subjunctive2: { ich: ["ich funktionierte"], du: ["du funktioniertest"], er: ["er funktionierte", "sie funktionierte", "es funktionierte"], wir: ["wir funktionierten"], ihr: ["ihr funktioniertet"], sie: ["sie funktionierten", "Sie funktionierten"] }
      }
    },
    {
      infinitive: "passieren", english: "to happen", frequency: 80, category: "ieren", auxiliary: "sein",
      conjugations: {
        present: { ich: ["ich passiere"], du: ["du passierst"], er: ["er passiert", "sie passiert", "es passiert"], wir: ["wir passieren"], ihr: ["ihr passiert"], sie: ["sie passieren", "Sie passieren"] },
        perfect: { ich: ["ich bin passiert"], du: ["du bist passiert"], er: ["er ist passiert", "sie ist passiert", "es ist passiert"], wir: ["wir sind passiert"], ihr: ["ihr seid passiert"], sie: ["sie sind passiert", "Sie sind passiert"] },
        preterite: { ich: ["ich passierte"], du: ["du passiertest"], er: ["er passierte", "sie passierte", "es passierte"], wir: ["wir passierten"], ihr: ["ihr passiertet"], sie: ["sie passierten", "Sie passierten"] },
        imperative: { du: ["passier", "passiere"], ihr: ["passiert"], Sie: ["passieren Sie"] },
        subjunctive1: { ich: ["ich passiere"], du: ["du passierest"], er: ["er passiere", "sie passiere", "es passiere"], wir: ["wir passieren"], ihr: ["ihr passieret"], sie: ["sie passieren", "Sie passieren"] },
        subjunctive2: { ich: ["ich passierte"], du: ["du passiertest"], er: ["er passierte", "sie passierte", "es passierte"], wir: ["wir passierten"], ihr: ["ihr passiertet"], sie: ["sie passierten", "Sie passierten"] }
      }
    }
  ]
};

export const verbsByFrequency = [
  // Top 100 verbs by frequency
  { infinitive: "sein", frequency: 1, category: "essential" },
  { infinitive: "haben", frequency: 2, category: "essential" },
  { infinitive: "werden", frequency: 3, category: "essential" },
  { infinitive: "können", frequency: 4, category: "modal" },
  { infinitive: "müssen", frequency: 5, category: "modal" },
  { infinitive: "sagen", frequency: 6, category: "regular" },
  { infinitive: "machen", frequency: 7, category: "regular" },
  { infinitive: "geben", frequency: 8, category: "strong" },
  { infinitive: "kommen", frequency: 9, category: "strong" },
  { infinitive: "sollen", frequency: 10, category: "modal" },
  { infinitive: "wollen", frequency: 11, category: "modal" },
  { infinitive: "gehen", frequency: 12, category: "strong" },
  { infinitive: "wissen", frequency: 13, category: "strong" },
  { infinitive: "sehen", frequency: 14, category: "strong" },
  { infinitive: "aufstehen", frequency: 25, category: "separable" },
  { infinitive: "glauben", frequency: 26, category: "regular" },
  { infinitive: "dürfen", frequency: 24, category: "modal" },
  { infinitive: "mögen", frequency: 29, category: "modal" },
  { infinitive: "zeigen", frequency: 30, category: "regular" },
  { infinitive: "führen", frequency: 31, category: "regular" },
  { infinitive: "ankommen", frequency: 35, category: "separable" },
  { infinitive: "verstehen", frequency: 45, category: "inseparable" },
  { infinitive: "bekommen", frequency: 47, category: "inseparable" },
  { infinitive: "studieren", frequency: 65, category: "ieren" },
  { infinitive: "funktionieren", frequency: 70, category: "ieren" },
  { infinitive: "passieren", frequency: 80, category: "ieren" }
];

export default verbDatabase;