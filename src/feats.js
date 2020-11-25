export class Feat {
    name;
    description;
    effects;

    constructor(name, description, effects) {
        this.name = name;
        this.description = description;
        this.effects = effects;
    }
}

export class Player {
    name;
    strength;
    dexterity;
    feats;
    constructor(name, strength, dexterity, feats) {
        this.name = name;
        this.strength = strength;
        this.dexterity = dexterity;
        this.feats = feats;
    }
}

export const FEAT_NAMES = {
    SNEAKY: 'Sneaky',
    QUICK: 'Quick',
    INLAW: 'In-Law',
    QT_PIE: 'Cutie Pie Special',
    JERK: 'Jerk',
    ATHLETIC: 'Athletic',
    RULE_BENDER: 'Rule Bender',
    LUCKY: 'Lucky',
    TALL: 'Tall',
    DEFENDER: 'Defender',
    GOOD_HANDS: 'Good Hands',
    LOCKED: 'Camera Shy'
}

const {
    SNEAKY,
    QUICK,
    INLAW,
    QT_PIE,
    JERK,
    ATHLETIC,
    RULE_BENDER,
    LUCKY,
    TALL,
    DEFENDER
} = FEAT_NAMES;

export const feats = {
    [SNEAKY]: new Feat(
        SNEAKY,
        'This player has a knack for waiting until the very last minute to make that clutch pick.',
        ['Can use their reaction to take the catch action on defense.']
    ),
    [QUICK]: new Feat(
        QUICK,
        'This player is exceptionally spry and difficult to touch down.',
        ['Can use their reaction to take the juke action.']),
    [INLAW]: new Feat(
        INLAW,
        'This player married into the family. It would be considered a faux pas to touch them down too aggressively.',
        [
            'Has advantage on rolls to juke players who do not have the In-Law or Jerk feat.',
            'Has disadvantage on rolls to not get caught cheating.'
        ]),
    [QT_PIE]: new Feat(
        QT_PIE,
        'Only a monster would tackle this player, who is incredibly cute and loveable.',
        ['Once per game, this player may score a free touchdown completely unopposed. Otherwise, they have a speed, strength, and dexterity of 0.']),
    [JERK]: new Feat(
        JERK,
        'This player is willing to do what it takes to win.',
        [
            'This player may stop a touchdown by a player with the Cutie Pie Special feat. If they stop the free touchdown, neither they nor the Cutie Pie may play for the rest of the game. The Jerk’s team also loses 10 cheers.',
            'This player gets advantage on attempts to touch In-Laws. In-Laws do not get advantage on attempts to juke them.'
        ]),
    [ATHLETIC]: new Feat(
        ATHLETIC,
        'This player is in better shape than most.',
        ['This player may dash twice per possession.']),
    [RULE_BENDER]: new Feat(
        RULE_BENDER,
        'This player has a flexible interpretation of the rules.',
        ['Once per possession, this player may rush the quarterback early without using a blitz.']),
    [LUCKY]: new Feat(
        LUCKY,
        'This player seems to get all the good bounces.',
        ['When this player rolls a d20, they may reroll 1s and 2s.']),
    [TALL]: new Feat(
        TALL,
      'This player is head and shoulders above the rest, literally.',
        [
            'If a pass goes over this player’s head, they may roll a dexterity check. If they make above 13, they tip the pass. If the pass is tipped, everyone within 5 yards may roll a d20. Anyone who rolls a 20 catches the pass. If two players from opposing teams each roll a 20, they make opposing strength checks to determine who controls the ball.'
        ]),
    [DEFENDER]: new Feat(
      DEFENDER,
      'This player never leaves their man open.',
      [
          'Has advantage on defend checks.'
      ]),
    [FEAT_NAMES.GOOD_HANDS]: new Feat(
      FEAT_NAMES.GOOD_HANDS,
      'You only need to get the ball close to this player for them to make the catch',
      ['Has advantage on catch checks']
    ),
    [FEAT_NAMES.LOCKED]: new Feat(
      FEAT_NAMES.LOCKED,
      'This player must be unlocked by spending cheers.',
      []
    )
}

export const [
    PAUL_M,
    DAVE,
    JONATHAN,
    PATRICK,
    ANDREW,
    HENRY,
    JACK,
    ROB,
    UNCLE_PAUL,
    BENJAMIN,
    AUSTIN
] = [
    'Paul M',
    'Dave',
    'Jonathan',
    'Patrick',
    'Andrew',
    'Henry',
    'Jack',
    'Rob',
    'Uncle Paul',
    'Benjamin',
    'Austin'
];

export const players = {
    [ANDREW]: new Player(
      ANDREW,
      2,
      1,
      [TALL, ATHLETIC]
    ),
    [AUSTIN]: new Player(
      AUSTIN,
      2,
      2,
      [TALL, ATHLETIC, FEAT_NAMES.GOOD_HANDS, SNEAKY, FEAT_NAMES.LOCKED]
    ),
    [BENJAMIN]: new Player(
      BENJAMIN,
      -20,
      -20,
      [QT_PIE, FEAT_NAMES.LOCKED]
    ),
    [DAVE]: new Player(
      'Dave',
      1,
      1,
      [INLAW, RULE_BENDER]
    ),
    [HENRY]: new Player(
      HENRY,
      1,
      2,
      [TALL, FEAT_NAMES.GOOD_HANDS]
    ),
    [JACK]: new Player(
      JACK,
      0,
      2,
      [FEAT_NAMES.GOOD_HANDS, INLAW, DEFENDER]
    ),
    [JONATHAN]: new Player(
      JONATHAN,
      1,
      2,
      [ATHLETIC, TALL]
    ),
    [PATRICK]: new Player(
      PATRICK,
      1,
      1,
      [LUCKY, DEFENDER]
    ),
    [PAUL_M]: new Player(
        'Paul M',
        2,
        0,
        [SNEAKY, JERK]
    ),
    [ROB]: new Player(
      ROB,
      2,
      0,
      [INLAW, LUCKY]
    ),
    [UNCLE_PAUL]: new Player(
      UNCLE_PAUL,
      0,
      0,
      [JERK, FEAT_NAMES.LOCKED]
    ),
}

