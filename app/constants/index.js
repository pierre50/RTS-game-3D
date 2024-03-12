export const cellWidth = 63
export const cellHeight = 30
export const cellDepth = 16

export const accelerator = 1
export const stepTime = 20

export const isMobile = window.innerWidth <= 800 && window.innerHeight <= 600
export const longClickDuration = 200

export const loadingFoodTypes = ['meat', 'wheat', 'berry', 'fish']

export const colorWhite = 0xffffff
export const colorBlack = 0x000000
export const colorGrey = 0x808080
export const colorRed = 0xff0000
export const colorOrange = 0xffa500
export const colorYellow = 0xffff00
export const colorGreen = 0x008000
export const colorBlue = 0x0000ff
export const colorIndigo = 0x4b0082
export const colorViolet = 0xee82ee
export const colorBone = 0xe2dac2
export const colorShipgrey = 0x3c3b3d

export const colorArrow = 0xe8e3df

export const typeAction = {
  Stone: 'minestone',
  Gold: 'minegold',
  Berrybush: 'forageberry',
  Tree: 'chopwood',
  Fish: 'fishing',
}

export const corpseTime = 120
export const rubbleTime = 120
export const maxSelectUnits = 10
export const populationMax = 200

export const config = {
  "buildings": {
    "House": {
      "size": 1,
      "sight": 3,
      "totalHitPoints": 75,
      "constructionTime": 20,
      "displayPopulation": true,
      "increasePopulation": 4,
      "cost": {
        "wood": 50
      },
      "sounds": {
        "create": 5126
      }
    },
    "Barracks": {
      "size": 3,
      "sight": 5,
      "totalHitPoints": 350,
      "constructionTime": 30,
      "cost": {
        "wood": 125
      },
      "units": ["Clubman", "Axeman", "ShortSwordsman", "BroadSwordsman", "LongSwordsman"],
      "technologies": ["BattleAxe", "ShortSword", "BroadSword", "LongSword"],
      "sounds": {
        "create": 5022
      }
    },
    "Granary": {
      "size": 3,
      "sight": 4,
      "totalHitPoints": 350,
      "constructionTime": 30,
      "cost": {
        "wood": 120
      },
      "accept": ["berry", "wheat"],
      "technologies": ["ResearchWatchTower","ResearchSentryTower",
       "ResearchSmallWall"],
      "sounds": {
        "create": 5096
      }
    },
    "StoragePit": {
      "size": 3,
      "sight": 4,
      "totalHitPoints": 350,
      "constructionTime": 30,
      "cost": {
        "wood": 120
      },
      "accept": ["wood", "stone", "gold", "meat", "fish"],
      "technologies": ["Toolworking", "Metalworking", "Metallurgy", 
      "BronzeShield", "IronShield",
      "LeatherArmorInfantry", "ScaleArmorInfantry", "ChainmailInfantry", 
      "LeatherArmorArchers", "ScaleArmorArchers", "ChainmailArchers", 
      "LeatherArmorCavalry", "ScaleArmorCavalry", "ChainmailCavalry"],
      "sounds": {
        "create": 5186
      }
    },
    "Dock": {
      "size": 3,
      "sight": 5,
      "totalHitPoints": 350,
      "constructionTime": 50,
      "buildOnWater": true,
      "units": ["FishingBoat"],
      "cost": {
        "wood": 150
      },
      "sounds": {
        "create": 5027
      }
    },
    "ArcheryRange": {
      "size": 3,
      "sight": 4,
      "totalHitPoints": 350,
      "constructionTime": 40,
      "cost": {
        "wood": 150
      },
      "conditions": [
        {
          "key": "age",
          "op": ">=",
          "value": 1
        },
        {
          "key": "hasBuilt",
          "op": "includes",
          "value": "Barracks"
        }
      ],
      "units": ["Bowman", "ImprovedBowman", "CompositeBowman", "ChariotArcher"],
      "technologies": ["ImprovedBow", "CompositeBow"],
      "sounds": {
        "create": 5008
      }
    },
    "Stable": {
      "size": 3,
      "sight": 4,
      "totalHitPoints": 350,
      "constructionTime": 40,
      "cost": {
        "wood": 150
      },
      "conditions": [
        {
          "key": "age",
          "op": ">=",
          "value": 1
        },
        {
          "key": "hasBuilt",
          "op": "includes",
          "value": "Barracks"
        }
      ],
      "units": ["Scout"],
      "sounds": {
        "create": 5123
      }
    },
    "Farm": {
      "size": 3,
      "sight": 3,
      "totalHitPoints": 50,
      "constructionTime": 24,
      "quantity": 250,
      "cost": {
        "wood": 75
      },
      "conditions": [
        {
          "key": "age",
          "op": ">=",
          "value": 1
        },
        {
          "key": "hasBuilt",
          "op": "includes",
          "value": "Market"
        }
      ],
      "sounds": {
        "create": 5176
      }
    },
    "WatchTower": {
      "size": 2,
      "sight": 8,
      "totalHitPoints": 125,
      "constructionTime": 72,
      "range": 5,
      "projectile": "Arrow",
      "pierceAttack": 3,
      "rateOfFire": 1.5,
      "cost": {
        "stone": 150
      },
      "conditions": [
        {
          "key": "age",
          "op": ">=",
          "value": 1
        },
        {
          "key": "technologies",
          "op": "includes",
          "value": "ResearchWatchTower"
        },
        {
          "key": "technologies",
          "op": "notincludes",
          "value": "ResearchSentryTower"
        }
      ],
      "sounds": {
        "create": 5201
      }
    },
    "SentryTower": {
      "size": 2,
      "sight": 9,
      "totalHitPoints": 185,
      "constructionTime": 65,
      "range": 7,
      "projectile": "Arrow",
      "pierceAttack": 6,
      "rateOfFire": 1.5,
      "cost": {
        "stone": 150
      },
      "conditions": [
        {
          "key": "age",
          "op": ">=",
          "value": 2
        },
        {
          "key": "technologies",
          "op": "includes",
          "value": "ResearchSentryTower"
        }
      ],
      "sounds": {
        "create": 5201
      }
    },
    "SmallWall": {
      "size": 1,
      "sight": 3,
      "totalHitPoints": 200,
      "constructionTime": 7,
      "cost": {
        "stone": 5
      },
      "conditions": [
        {
          "key": "age",
          "op": ">=",
          "value": 1
        },
        {
          "key": "technologies",
          "op": "includes",
          "value": "ResearchSmallWall"
        }
      ]
    },
    "Market": {
      "size": 3,
      "sight": 5,
      "totalHitPoints": 350,
      "constructionTime": 40,
      "cost": {
        "wood": 150
      },
      "conditions": [
        {
          "key": "age",
          "op": ">=",
          "value": 1
        },
        {
          "key": "hasBuilt",
          "op": "includes",
          "value": "Granary"
        }
      ],
      "technologies": ["Woodworking", "StoneMining", "GoldMining", "Domestication"],
      "sounds": {
        "create": 5142
      }
    },
    "Temple": {
      "size": 3,
      "sight": 5,
      "totalHitPoints": 350,
      "constructionTime": 60,
      "cost": {
        "wood": 200
      },
      "conditions": [
        {
          "key": "age",
          "op": ">=",
          "value": 2
        },
        {
          "key": "hasBuilt",
          "op": "includes",
          "value": "Market"
        }
      ],
      "units": ["Priest"],
      "sounds": {
        "create": 5196
      }
    },
    "GovernmentCenter": {
      "size": 3,
      "sight": 5,
      "totalHitPoints": 350,
      "constructionTime": 60,
      "cost": {
        "wood": 175
      },
      "conditions": [
        {
          "key": "age",
          "op": ">=",
          "value": 2
        },
        {
          "key": "hasBuilt",
          "op": "includes",
          "value": "Market"
        }
      ],
      "sounds": {
        "create": 5129
      }
    },
    "TownCenter": {
      "size": 3,
      "sight": 7,
      "totalHitPoints": 600,
      "constructionTime": 60,
      "increasePopulation": 4,
      "cost": {
        "wood": 200
      },
      "conditions": [
        {
          "key": "age",
          "op": ">=",
          "value": 2
        },
        {
          "key": "hasBuilt",
          "op": "includes",
          "value": "GovernmentCenter"
        }
      ],
      "units": ["Villager"],
      "technologies": ["ToolAge", "BronzeAge", "IronAge"],
      "sounds": {
        "create": 5044
      }
    },
    "SiegeWorkshop": {
      "size": 3,
      "sight": 5,
      "totalHitPoints": 350,
      "constructionTime": 60,
      "cost": {
        "wood": 200
      },
      "conditions": [
        {
          "key": "age",
          "op": ">=",
          "value": 2
        },
        {
          "key": "hasBuilt",
          "op": "includes",
          "value": "ArcheryRange"
        }
      ]
    },
    "Academy": {
      "size": 3,
      "sight": 5,
      "totalHitPoints": 350,
      "constructionTime": 60,
      "cost": {
        "wood": 150
      },
      "conditions": [
        {
          "key": "age",
          "op": ">=",
          "value": 2
        },
        {
          "key": "hasBuilt",
          "op": "includes",
          "value": "Stable"
        }
      ],
      "units": ["Hoplite"],
      "sounds": {
        "create": 5002
      }
    }
  },
  "units": {
    "Villager": {
      "category": "Civilian",
      "totalHitPoints": 25,
      "sight": 4,
      "speed": 0.92,
      "rateOfFire": 1.5,
      "trainingTime": 20,
      "icon": "000_50730",
      "meleeAttack": 3,
      "meleeArmor": 0,
      "pierceArmor": 0,
      "range": 4,
      "cost": {
        "food": 30
      },
      "showBuildings": true,
      "showLoading": true,
      "loadingMax": {
        "wheat": 10,
        "wood": 10,
        "berry": 10,
        "stone": 10,
        "gold": 10,
        "meat": 10,
        "fish": 10
      },
      "allAssets": {
        "default": {
          "standingSheet": "418",
          "walkingSheet": "657",
          "dyingSheet": "314",
          "corpseSheet": "373"
        },
        "attack": {
          "actionSheet": "224",
          "standingSheet": "418",
          "dyingSheet": "314",
          "walkingSheet": "657",
          "corpseSheet": "373"
        },
        "hunter": {
          "actionSheet": "624",
          "harvestSheet": "626",
          "standingSheet": "435",
          "walkingSheet": "676",
          "dyingSheet": "332",
          "corpseSheet": "389",
          "loadedSheet": "272"
        },
        "fisher": {
          "actionSheet": "631",
          "standingSheet": "431",
          "walkingSheet": "676",
          "dyingSheet": "332",
          "corpseSheet": "389",
          "loadedSheet": "271"
        },
        "farmer": {
          "actionSheet": "630",
          "standingSheet": "430",
          "walkingSheet": "670",
          "dyingSheet": "326",
          "corpseSheet": "388",
          "loadedSheet": "672"
        },
        "forager": {
          "actionSheet": "632",
          "standingSheet": "432",
          "walkingSheet": "672",
          "dyingSheet": "328",
          "corpseSheet": "390",
          "loadedSheet": "672"
        },
        "stoneminer": {
          "actionSheet": "633",
          "standingSheet": "441",
          "walkingSheet": "683",
          "dyingSheet": "315",
          "corpseSheet": "400",
          "loadedSheet": "274"
        },
        "goldminer": {
          "actionSheet": "633",
          "standingSheet": "441",
          "walkingSheet": "683",
          "dyingSheet": "315",
          "corpseSheet": "400",
          "loadedSheet": "281"
        },
        "woodcutter": {
          "actionSheet": "625",
          "standingSheet": "440",
          "walkingSheet": "682",
          "dyingSheet": "315",
          "corpseSheet": "399",
          "loadedSheet": "273"
        },
        "builder": {
          "actionSheet": "628",
          "standingSheet": "419",
          "walkingSheet": "658",
          "dyingSheet": "315",
          "corpseSheet": "374"
        }
      },
      "gatheringRate": {
        "forager": 0.45,
        "hunter": 0.4725,
        "fisher": 0.6,
        "farmer": 0.45,
        "woodcutter": 0.55,
        "stoneminer": 0.5175,
        "goldminer": 0.5175
      },
      "sounds": {
        "create": 5166,
        "hit": [5138, 5139, 5140],
        "die": [5055, 5056, 5057, 5058, 5059],
        "forageberry": 5217,
        "hunt": 5005,
        "farm": 5118,
        "build": 5118,
        "attack": 5118,
        "chopwood": 5180,
        "minestone": 5075,
        "minegold": 5075,
        "fishing": 5054,
        "move": 5006
      }
    },
    "Clubman": {
      "category": "Infantry",
      "totalHitPoints": 40,
      "sight": 4,
      "speed": 1,
      "rateOfFire": 1.5,
      "trainingTime": 26,
      "icon": "002_50730",
      "meleeAttack": 3,
      "meleeArmor": 0,
      "pierceArmor": 0,
      "cost": {
        "food": 50
      },
      "conditions": [
        {
          "key": "technologies",
          "op": "notincludes",
          "value": "BattleAxe"
        }
      ],
      "assets": {
        "standingSheet": "425",
        "walkingSheet": "664",
        "actionSheet": "212",
        "dyingSheet": "321",
        "corpseSheet": "380"
      },
      "sounds": {
        "hit": [5138, 5139, 5140],
        "die": [5060, 5061, 5062, 5063, 5064]
      }
    },
    "Scout": {
      "category": "Cavalery",
      "totalHitPoints": 60,
      "sight": 7,
      "speed": 1.66,
      "rateOfFire": 1.5,
      "trainingTime": 30,
      "icon": "031_50730",
      "meleeAttack": 3,
      "meleeArmor": 0,
      "pierceArmor": 0,
      "cost": {
        "food": 90
      },
      "assets": {
        "standingSheet": "445",
        "walkingSheet": "651",
        "actionSheet": "227",
        "dyingSheet": "343",
        "corpseSheet": "403"
      },
      "sounds": {
        "die": 5108,
        "hit": [5138, 5139, 5140]
      }
    },
    "Bowman": {
      "category": "Archer",
      "totalHitPoints": 35,
      "sight": 7,
      "speed": 1,
      "rateOfFire": 1.4,
      "trainingTime": 30,
      "icon": "006_50730",
      "pierceAttack": 3,
      "meleeArmor": 0,
      "pierceArmor": 0,
      "range": 5,
      "projectile": "Arrow",
      "cost": {
        "food": 40,
        "wood": 20
      },
      "assets": {
        "standingSheet": "413",
        "walkingSheet": "652",
        "actionSheet": "203",
        "dyingSheet": "308",
        "corpseSheet": "367"
      }
    },
    "Priest": {
      "category": "Civilian",
      "totalHitPoints": 25,
      "sight": 12,
      "speed": 0.66,
      "trainingTime": 50,
      "icon": "001_50730",
      "healing": 1,
      "meleeArmor": 0,
      "pierceArmor": 0,
      "range": 10,
      "cost": {
        "gold": 125
      },
      "assets": {
        "standingSheet": "443",
        "walkingSheet": "685",
        "actionSheet": "634",
        "dyingSheet": "341",
        "corpseSheet": "402"
      }
    },
    "Axeman": {
      "category": "Infantry",
      "totalHitPoints": 50,
      "sight": 4,
      "speed": 1,
      "rateOfFire": 1.5,
      "trainingTime": 26,
      "icon": "003_50730",
      "meleeAttack": 5,
      "meleeArmor": 0,
      "pierceArmor": 0,
      "cost": {
        "food": 50
      },
      "conditions": [
        {
          "key": "technologies",
          "op": "notincludes",
          "value": "ShortSword"
        },
        {
          "key": "technologies",
          "op": "includes",
          "value": "BattleAxe"
        }
      ],
      "assets": {
        "standingSheet": "415",
        "walkingSheet": "654",
        "actionSheet": "205",
        "dyingSheet": "311",
        "corpseSheet": "370"
      }
    },
    "ShortSwordsman": {
      "category": "Infantry",
      "totalHitPoints": 60,
      "sight": 4,
      "speed": 1,
      "rateOfFire": 1.5,
      "trainingTime": 26,
      "icon": "004_50730",
      "meleeAttack": 7,
      "meleeArmor": 1,
      "pierceArmor": 0,
      "cost": {
        "food": 35,
        "gold": 15
      },
      "conditions": [
        {
          "key": "technologies",
          "op": "notincludes",
          "value": "BroadSword"
        },
        {
          "key": "technologies",
          "op": "includes",
          "value": "ShortSword"
        }
      ],
      "assets": {
        "standingSheet": "416",
        "walkingSheet": "655",
        "actionSheet": "206",
        "dyingSheet": "312",
        "corpseSheet": "371"
      }
    },
    "BroadSwordsman": {
      "category": "Infantry",
      "totalHitPoints": 80,
      "sight": 4,
      "speed": 1,
      "rateOfFire": 1.5,
      "trainingTime": 26,
      "icon": "005_50730",
      "meleeAttack": 9,
      "meleeArmor": 1,
      "pierceArmor": 0,
      "cost": {
        "food": 35,
        "gold": 15
      },
      "conditions": [
        {
          "key": "technologies",
          "op": "notincludes",
          "value": "LongSword"
        },
        {
          "key": "technologies",
          "op": "includes",
          "value": "BroadSword"
        }
      ],
      "assets": {
        "standingSheet": "437",
        "walkingSheet": "678",
        "actionSheet": "220",
        "dyingSheet": "334",
        "corpseSheet": "395"
      }
    },
    "LongSwordsman": {
      "category": "Infantry",
      "totalHitPoints": 100,
      "sight": 4,
      "speed": 1,
      "rateOfFire": 1.5,
      "trainingTime": 26,
      "icon": "027_50730",
      "meleeAttack": 11,
      "meleeArmor": 2,
      "pierceArmor": 0,
      "cost": {
        "food": 35,
        "gold": 15
      },
      "conditions": [
        {
          "key": "technologies",
          "op": "includes",
          "value": "LongSword"
        }
      ],
      "assets": {
        "standingSheet": "436",
        "walkingSheet": "677",
        "actionSheet": "219",
        "dyingSheet": "333",
        "corpseSheet": "394"
      }
    },
    "ImprovedBowman": {
      "category": "Archer",
      "totalHitPoints": 40,
      "sight": 8,
      "speed": 1,
      "rateOfFire": 1.4,
      "trainingTime": 30,
      "icon": "007_50730",
      "pierceAttack": 4,
      "meleeArmor": 0,
      "pierceArmor": 0,
      "range": 6,
      "projectile": "Arrow",
      "cost": {
        "food": 40,
        "gold": 20
      },
      "conditions": [
        {
          "key": "technologies",
          "op": "notincludes",
          "value": "CompositeBow"
        },
        {
          "key": "technologies",
          "op": "includes",
          "value": "ImprovedBow"
        }
      ],
      "assets": {
        "standingSheet": "414",
        "walkingSheet": "653",
        "actionSheet": "204",
        "dyingSheet": "309",
        "corpseSheet": "368"
      }
    },
    "Hoplite": {
      "category": "Infantry",
      "totalHitPoints": 120,
      "sight": 4,
      "speed": 0.87,
      "rateOfFire": 1.5,
      "trainingTime": 36,
      "icon": "016_50730",
      "meleeAttack": 17,
      "meleeArmor": 5,
      "pierceArmor": 0,
      "cost": {
        "food": 60,
        "gold": 40
      },
      "assets": {
        "standingSheet": "442",
        "walkingSheet": "684",
        "actionSheet": "225",
        "dyingSheet": "340",
        "corpseSheet": "401"
      }
    },
    "CompositeBowman": {
      "category": "Archer",
      "totalHitPoints": 45,
      "sight": 9,
      "speed": 1,
      "rateOfFire": 1.4,
      "trainingTime": 30,
      "icon": "008_50730",
      "pierceAttack": 5,
      "meleeArmor": 0,
      "pierceArmor": 0,
      "range": 7,
      "projectile": "Arrow",
      "cost": {
        "food": 40,
        "gold": 20
      },
      "conditions": [
        {
          "key": "technologies",
          "op": "includes",
          "value": "CompositeBow"
        }
      ],
      "assets": {
        "standingSheet": "439",
        "walkingSheet": "681",
        "actionSheet": "223",
        "dyingSheet": "337",
        "corpseSheet": "398"
      }
    },
    "ChariotArcher": {
      "category": "Archer",
      "totalHitPoints": 70,
      "sight": 9,
      "speed": 1.66,
      "rateOfFire": 1.4,
      "trainingTime": 40,
      "icon": "028_50730",
      "pierceAttack": 4,
      "meleeArmor": 0,
      "pierceArmor": 0,
      "range": 7,
      "projectile": "Arrow",
      "cost": {
        "food": 70,
        "wood": 40
      },
      "conditions": [
        {
          "key": "technologies",
          "op": "includes",
          "value": "Wheel"
        }
      ],
      "assets": {
        "standingSheet": "412",
        "walkingSheet": "650",
        "actionSheet": "202",
        "dyingSheet": "310",
        "corpseSheet": "369"
      }
    },
    "FishingBoat": {
      "category": "Boat",
      "totalHitPoints": 45,
      "sight": 6,
      "speed": 1.4,
      "trainingTime": 40,
      "showLoading": true,
      "icon": "018_50730",
      "meleeArmor": 0,
      "pierceArmor": 0,
      "cost": {
        "wood": 50
      },
      "loadingMax": {
        "fish": 10
      },
      "gatheringRate": {
        "fisher": 0.4
      },
      "assets": {
        "standingSheet": "473",
        "walkingSheet": "473",
        "actionSheet": "473",
        "dyingSheet": "473",
        "corpseSheet": "473"
      }
    }
  },
  "resources": {
    "Berrybush": {
      "quantity": 200,
      "icon": "036_50730",
      "color": "#7B9051",
      "assets": ["000_240"]
    },
    "Tree": {
      "quantity": 300,
      "totalHitPoints": 25,
      "icon": "035_50730",
      "color": "#274F1F",
      "assets": {
        "Grass": ["000_492", "000_493", "000_494", "000_503", "000_509"],
        "Desert": ["000_463", "000_464", "000_465", "000_466"],
        "Jungle": ["000_463", "000_464", "000_465", "000_466"]
      }
    },
    "Gold": {
      "quantity": 400,
      "icon": "039_50730",
      "color": "#DECF10",
      "assets": ["000_481", "001_481", "002_481", "003_481", "004_481", "005_481", "006_481"]
    },
    "Stone": {
      "quantity": 250,
      "icon": "038_50730",
      "color": "#B3B3B3",
      "assets": ["000_622", "001_622", "002_622", "003_622", "004_622", "005_622", "006_622"]
    },
    "Salmon": {
      "category": "Fish",
      "quantity": 250,
      "icon": "034_50730",
      "allowAction": ["Villager", "FishingBoat"],
      "isAnimated": true,
      "assets": "594"
    }
  },
  "animals": {
    "Gazelle": {
      "totalHitPoints": 8,
      "sight": 2,
      "speed": 1.2,
      "strategy": "runaway",
      "icon": "037_50730",
      "quantity": 150,
      "assets": {
        "standingSheet": "479",
        "walkingSheet": "478",
        "runningSheet": "480",
        "dyingSheet": "331",
        "corpseSheet": "392"
      },
      "sounds": {
        "fall": 5003
      }
    },
    "Elephant": {
      "totalHitPoints": 45,
      "sight": 4,
      "speed": 1,
      "meleeAttack": 10,
      "icon": "033_50730",
      "rateOfFire": 1,
      "quantity": 300,
      "assets": {
        "actionSheet": "215",
        "standingSheet": "428",
        "walkingSheet": "667",
        "dyingSheet": "324",
        "corpseSheet": "386"
      },
      "sounds": {
        "die": 5216,
        "fall": 5239,
        "hit": 5070
      }
    },
    "Crocodile": {
      "totalHitPoints": 20,
      "sight": 5,
      "speed": 0.5,
      "meleeAttack": 4,
      "strategy": "attack",
      "icon": "041_50730",
      "rateOfFire": 2,
      "quantity": 100,
      "assets": {
        "actionSheet": "217",
        "standingSheet": "433",
        "walkingSheet": "673",
        "dyingSheet": "330",
        "corpseSheet": "391"
      },
      "sounds": {
        "fall": 5239
      }
    },
    "Lion": {
      "totalHitPoints": 20,
      "sight": 4,
      "speed": 1.1,
      "meleeAttack": 2,
      "strategy": "attack",
      "rateOfFire": 1,
      "icon": "040_50730",
      "quantity": 100,
      "assets": {
        "actionSheet": "222",
        "standingSheet": "497",
        "walkingSheet": "680",
        "dyingSheet": "336",
        "corpseSheet": "397"
      },
      "sounds": {
        "fall": 5003,
        "hit": 5132,
        "die": 5133
      }
    }
  },
  "projectiles": {
    "Spear": {
      "size": 10,
      "speed": 8,
      "sounds": {
        "start": 5125
      }
    },
    "Arrow": {
      "size": 3,
      "speed": 14,
      "sounds": {
        "start": [5009, 5010, 5011, 5012]
      }
    }
  },
  "cells": {
    "Desert": {
      "category": "Ground",
      "color": "#CFA443",
      "assets": [
        "000_15000",
        "001_15000",
        "002_15000",
        "003_15000",
        "004_15000",
        "005_15000",
        "006_15000",
        "007_15000",
        "008_15000"
      ]
    },
    "Grass": {
      "category": "Ground",
      "color": "#647B2F",
      "assets": [
        "000_15001",
        "001_15001",
        "002_15001",
        "003_15001",
        "004_15001",
        "005_15001",
        "006_15001",
        "007_15001",
        "008_15001"
      ]
    },
    "Jungle": {
      "category": "Ground",
      "color": "#647B2F",
      "assets": [
        "000_15001",
        "001_15001",
        "002_15001",
        "003_15001",
        "004_15001",
        "005_15001",
        "006_15001",
        "007_15001",
        "008_15001"
      ]
    },
    "Water": {
      "category": "Water",
      "color": "#17277B",
      "assets": ["000_15002", "001_15002", "002_15002", "003_15002"]
    }
  }
}