import {SkillWeightEntity} from "../../types";
import {level50SkillExp, level60SkillExp} from "../../constants";

/** @internal */
export function calculateSkillWeight(skillGroup: SkillWeightEntity, level: number, experience: number) {
    if (skillGroup.exponent == undefined || skillGroup.divider == undefined) {
        return {
            weight: 0,
            weight_overflow: 0,
        }
    }

    let maxSkillLevelXP = skillGroup.maxLevel == 60 ? level60SkillExp : level50SkillExp

    let base = Math.pow(level * 10, 0.5 + skillGroup.exponent + level / 100) / 1250
    if (experience > maxSkillLevelXP) {
        base = Math.round(base)
    }

    if (experience <= maxSkillLevelXP) {
        return {
            weight: base,
            weight_overflow: 0,
        }
    }

    return {
        weight: base,
        weight_overflow: Math.pow((experience - maxSkillLevelXP) / skillGroup.divider, 0.968)
    }
}