import {DungeonWeightGroup, SkillWeightGroup, SlayerWeightGroup} from "../types";

export const level50SkillExp = 55172425
export const level60SkillExp = 111672425
export const level_50_skills: string[] = ["fishing", "foraging", "taming", "alchemy", "carpentry"]
export const level_60_skills: string[] = ["combat", "mining", "enchanting", "farming"]
export const SKILL_XP_TABLE = [[0, 0], [1, 50], [2, 175], [3, 375], [4, 675], [5, 1175], [6, 1925], [7, 2925], [8, 4425], [9, 6425], [10, 9925], [11, 14925],
    [12, 22425], [13, 32425], [14, 47425], [15, 67425], [16, 97425], [17, 147425], [18, 222425], [19, 322425], [20, 522425],
    [21, 822425], [22, 1222425], [23, 1722425], [24, 2322425], [25, 3022425], [26, 3822425], [27, 4722425], [28, 5722425],
    [29, 6822425], [30, 8022425], [31, 9322425], [32, 10722425], [33, 12222425], [34, 13822425], [35, 15522425],
    [36, 17322425], [37, 19222425], [38, 21222425], [39, 23322425], [40, 25522425], [41, 27822425], [42, 30222425],
    [43, 32722425], [44, 35322425], [45, 38072425], [46, 40972425], [47, 44072425], [48, 47472425], [49, 51172425],
    [50, 55172425], [51, 59472425], [52, 64072425], [53, 68972425], [54, 74172425], [55, 79672425], [56, 85472425],
    [57, 91572425], [58, 97972425], [59, 104672425], [60, 111672425], [61, 1000000000000]]

export const dungeon_xp = [
    [0, 0],
    [1, 50],
    [2, 125],
    [3, 235],
    [4, 395],
    [5, 625],
    [6, 955],
    [7, 1425],
    [8, 2095],
    [9, 3045],
    [10, 4385],
    [11, 6275],
    [12, 8940],
    [13, 12700],
    [14, 17960],
    [15, 25340],
    [16, 35640],
    [17, 50040],
    [18, 70040],
    [19, 97640],
    [20, 135640],
    [21, 188140],
    [22, 259640],
    [23, 356640],
    [24, 488640],
    [25, 668640],
    [26, 911640],
    [27, 1239640],
    [28, 1684640],
    [29, 2284640],
    [30, 3084640],
    [31, 4149640],
    [32, 5559640],
    [33, 7459640],
    [34, 9959640],
    [35, 13259640],
    [36, 17559640],
    [37, 23159640],
    [38, 30359640],
    [39, 39559640],
    [40, 51559640],
    [41, 66559640],
    [42, 85559640],
    [43, 109559640],
    [44, 139559640],
    [45, 177559640],
    [46, 225559640],
    [47, 285559640],
    [48, 360559640],
    [49, 453559640],
    [50, 569809640],
    [51, 708815308],
    [52, 878166305],
    [53, 1083705521],
    [54, 1332256501],
    [55, 1631764764],
    [56, 1991456278],
    [57, 2422014775],
    [58, 2935779757],
    [59, 3546967162],
    [60, 4271914829],
    [61, 1000000000000]
]

export const weightSkills: string[] = ['mining', 'foraging', 'enchanting', 'farming', 'combat', 'fishing', 'alchemy', 'taming']

export const skillWeightGroup: SkillWeightGroup = {
    // Maxes out mining at 1,750 points at 60.
    mining: {
        exponent: 1.18207448,
        divider: 259634,
        maxLevel: 60,
    },
    // Maxes out foraging at 850 points at level 50.
    foraging: {
        exponent: 1.232826,
        divider: 259634,
        maxLevel: 50,
    },
    // Maxes out enchanting at 450 points at level 60.
    enchanting: {
        exponent: 0.96976583,
        divider: 882758,
        maxLevel: 60,
    },
    // Maxes out farming at 2,200 points at level 60.
    farming: {
        exponent: 1.217848139,
        divider: 220689,
        maxLevel: 60,
    },
    // Maxes out combat at 1,500 points at level 60.
    combat: {
        exponent: 1.15797687265,
        divider: 275862,
        maxLevel: 60,
    },
    // Maxes out fishing at 2,500 points at level 50.
    fishing: {
        exponent: 1.406418,
        divider: 88274,
        maxLevel: 50,
    },
    // Maxes out alchemy at 200 points at level 50.
    alchemy: {
        exponent: 1.0,
        divider: 1103448,
        maxLevel: 50,
    },
    // Maxes out taming at 500 points at level 50.
    taming: {
        exponent: 1.14744,
        divider: 441379,
        maxLevel: 50,
    },
    // Sets up carpentry and runecrafting without any weight components.
    carpentry: {
        maxLevel: 50,
    },
    runecrafting: {
        maxLevel: 25,
    },
}

export const dungeonWeightGroup: DungeonWeightGroup = {
    catacombs: 0.0002149604615,
    healer: 0.0000045254834,
    mage: 0.0000045254834,
    berserker: 0.0000045254834,
    archer: 0.0000045254834,
    tank: 0.0000045254834,
}

export const slayerWeightGroup: SlayerWeightGroup = {
    revenant: {
        divider: 2208,
        modifier: 0.15,
    },
    tarantula: {
        divider: 2118,
        modifier: 0.08,
    },
    sven: {
        divider: 1962,
        modifier: 0.015,
    },
    enderman: {
        divider: 1430,
        modifier: .017,
    }
}