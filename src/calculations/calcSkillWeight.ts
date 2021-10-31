import { calcIndividualSkillWeight } from "../util/Skill/calcIndividualSkillWeight";

/**
 * Gets the players weight for a specified skill.
 * @param skillType {skillTypes}
 * A skill type from the skillTypes object.
 * @param xp
 * A number exp value that is greater than or equal to 0
 * @returns {total: number, weight: number, overflow: number}
 * {total: number, weight: number, overflow: number}
 * @example
 * const combatWeight = skillWeight(skillTypes.COMBAT, 25000)
 */
export function skillWeight (skillType: string, xp: number) {
    const data = calcIndividualSkillWeight(xp, skillType)
    const total = data.weight + data.weight_overflow || 0

    return {
        total,
        weight: data.weight,
        overflow: data.weight_overflow
    }
}