var buffs = {
    // DRK
    [ib.Delerium]: {
        name: "Delerium",
        duration: 10, cd: 90,
        color: "red", icon: "delirium",
        self: false, target: false, party: true,
        ast_only: true,
    },
    // WAR
    [ib.InnerRelease]: {
        name: "Inner Release",
        duration: 10, cd: 90,
        color: "orange", icon: "innerrelease",
        self: false, target: false, party: true,
        ast_only: true,
    },
    // PLD
    // GNB
    // SCH
    [ib.Chain]: {
        name: "Chain Stratagem",
        duration: 15, cd: 120,
        color: "blue", icon: "chain",
        self: false, target: true, party: false,
    },
    // WHM
    // AST
    [ib.Balance]: {
        name: "The Balance",
        duration: 15, noCd: true,
        color: "orange", icon: "thebalance",
        self: true, target: false, party: false,
    },
    [ib.Bole]: {
        name: "The Bole",
        duration: 15, noCd: true,
        color: "green", icon: "thebole",
        self: true, target: false, party: false,
    },
    [ib.Spear]: {
        name: "The Spear",
        duration: 15, noCd: true,
        color: "blue", icon: "thespear",
        self: true, target: false, party: false,
    },
    [ib.Spire]: {
        name: "The Spire",
        duration: 15, noCd: true,
        color: "yellow", icon: "thespire",
        self: true, target: false, party: false,
    },
    [ib.Arrow]: {
        name: "The Arrow",
        duration: 15, noCd: true,
        color: "blue", icon: "thearrow",
        self: true, target: false, party: false,
    },
    [ib.Ewer]: {
        name: "The Ewer",
        duration: 15, noCd: true,
        color: "blue", icon: "theewer",
        self: true, target: false, party: false,
    },
    [ib.LadyOfCrowns]: {
        name: "LadyOfCrowns",
        duration: 15, noCd: true,
        color: "purple", icon: "ladyofcrowns",
        self: true, target: false, party: false,
    },
    [ib.LordOfCrowns]: {
        name: "The Ewer",
        duration: 15, noCd: true,
        color: "red", icon: "lordofcrowns",
        self: true, target: false, party: false,
    },
    [ib.Divination]: {
        name: "Divination",
        duration: 15, cd: 120,
        color: "yellow", icon: "divination",
        self: true, target: false, party: false,
    },
    // MNK
    [ib.Brotherhood]: {
        name: "Brotherhood",
        duration: 15, cd: 90,
        color: "orange", icon: "brotherhood",
        self: true, target: false, party: false,
    },
    [ib.RiddleOfFire]: {
        name: "Riddle of Fire",
        duration: 20, cd: 90,
        color: "red", icon: "riddleoffire",
        self: false, target: false, party: true,
        ast_only: true,
    },
    // DRG
    [ib.LeftEye]: {
        name: "Dragon Sight",
        duration: 20, cd: 120,
        color: "red", icon: "dragonsight",
        self: true, target: false, party: false,
    },
    [ib.BattleLitany]: {
        name: "Battle Litany",
        duration: 20, cd: 180,
        color: "blue", icon: "battlelitany",
        self: true, target: false, party: false,
    },
    [ib.LanceCharge]: {
        name: "Lance Charge",
        duration: 20, cd: 90,
        color: "red", icon: "lancecharge",
        self: false, target: false, party: true,
        ast_only: true,
    },
    [ia.Nastrond]: {
        name: "Life of the Dragon",
        duration: 20, cd: 90, noRefresh: true,
        color: "red", icon: "nastrond",
        self: false, target: false, party: true,
        ast_only: true,
    },
    // NIN
    [ib.TrickAttack]: {
        name: "Trick Attack",
        duration: 15, cd: 60,
        color: "yellow", icon: "trickattack",
        self: false, target: true, party: false,
    },
    [ib.Bunshin]: {
        name: "Bunshin",
        duration: 10, cd: 90, noRefresh: true,
        color: "orange", icon: "bunshin",
        self: false, target: false, party: true,
        ast_only: true,
    },
    // SAM
    // BRD
    [ib.BattleVoice]: {
        name: "Battle Voice",
        duration: 20, cd: 180,
        color: "orange", icon: "battlevoice",
        self: true, target: false, party: false,
    },
    [ib.RagingStrikes]: {
        name: "Raging Strikes",
        duration: 20, cd: 80,
        color: "yellow", icon: "ragingstrikes",
        self: false, target: false, party: true,
        ast_only: true,
    },
    // MCH
    // DNC
    [ib.TechnicalFinish]: {
        name: "Technical Finish",
        duration: 20, cd: 120,
        color: "red", icon: "technicalfinish",
        self: true, target: false, party: false,
    },
    [ib.Devilment]: {
        name: "Devilment",
        duration: 20, cd: 120,
        color: "green", icon: "devilment",
        self: true, target: false, party: false,
    },
    // BLM
    // SMN
    [ib.Devotion]: {
        name: "Devotion",
        duration: 15, cd: 180,
        color: "yellow", icon: "devotion",
        self: true, target: false, party: false,
    },
    [ia.SummonBahamut]: {
        name: "Summon Bahamut",
        duration: 20, cd: 60,
        color: "blue", icon: "summonbahamut",
        self: false, target: false, party: true,
        ast_only: true,
    },
    [ia.FirebirdTrance]: {
        name: "Firebird Trance",
        duration: 20, cd: 60,
        color: "orange", icon: "firebirdtrance",
        self: false, target: false, party: true,
        ast_only: true,
    },
    // RDM
    [ib.Embolden]: {
        name: "Embolden",
        duration: 20, cd: 120, noRefresh: true,
        color: "blue", icon: "embolden",
        self: true, target: false, party: false,
    },
    [ib.Manification]: {
        name: "Manfication",
        duration: 10, cd: 110,
        color: "blue", icon: "manafication",
        self: false, target: false, party: true,
        ast_only: true,
    },
    // BLU
    [ib.PeculiarLight]: {
        name: "Peculiar Light",
        duration: 15, cd: 60,
        color: "red", icon: "peculiarlight",
        self: false, target: true, party: false,
    },
    [ib.OffGuard]: {
        name: "Off Guard",
        duration: 15, cd: 60,
        color: "green", icon: "offguard",
        self: false, target: true, party: false,
    },
};