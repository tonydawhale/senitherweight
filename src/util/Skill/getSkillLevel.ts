import {level_50_skills, SKILL_XP_TABLE} from "../../constants";

/** @internal */
export function getSkillLevel(xp: number, skill: string) {
    let level = 0
    let percentage = 0.0

    for (let i = 0; i < SKILL_XP_TABLE.length; i++) {
        if (SKILL_XP_TABLE[i][1] > xp) {
            level = SKILL_XP_TABLE[i][0]
            let a = xp - SKILL_XP_TABLE[i - 1][1]
            let b = SKILL_XP_TABLE[i][1] - SKILL_XP_TABLE[i - 1][1]
            percentage = a / b
            break;
        }
    }
    if (level_50_skills.includes(skill) && level >= 50) {
        return 50
    } else {
        let res = level + percentage - 1
        if (res != -1) return res
        else return undefined
    }
}