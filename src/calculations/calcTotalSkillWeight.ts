import { weightSkills } from "../constants";
import { calcIndividualSkillWeight } from "../util/Skill/calcIndividualSkillWeight";
import {skillsWeightReturn} from "../types/generatorTypes";

/**
 * Fetches the skill weight from a profile derived from the Hypixel api.
 * @returns {skillsWeightReturn}
 * @param profileData
 * @example
 * Example using the @zikeji/hypixel Api Wrapper.
 *
 * import { Client as Hypixel } from "@zikeji/hypixel";
 * const client = new Hypixel("API_KEY")
 * const profile = await client.skyblock.profiles.uuid(uuid)
 * const skillWeight = totalSkillWeight(profile)
 */
export function totalSkillWeight(profileData: any) {
    const miningData = calcIndividualSkillWeight(profileData?.experience_skill_mining as number || 0, "mining")
    const foragingData = calcIndividualSkillWeight(profileData?.experience_skill_foraging as number || 0, "foraging")
    const enchantingData = calcIndividualSkillWeight(profileData?.experience_skill_enchanting as number || 0, "enchanting")
    const farmingData = calcIndividualSkillWeight(profileData?.experience_skill_farming as number || 0, "farming")
    const combatData = calcIndividualSkillWeight(profileData?.experience_skill_combat as number || 0, "combat")
    const fishingData = calcIndividualSkillWeight(profileData?.experience_skill_fishing as number || 0, "fishing")
    const alchemyData = calcIndividualSkillWeight(profileData?.experience_skill_alchemy as number || 0, "alchemy")
    const tamingData = calcIndividualSkillWeight(profileData?.experience_skill_taming as number || 0, "taming")

    let skills: skillsWeightReturn = {
        total: 0,
        weight: 0,
        weight_overflow: 0,
        mining: miningData,
        foraging: foragingData,
        enchanting: enchantingData,
        farming: farmingData,
        combat: combatData,
        fishing: fishingData,
        alchemy: alchemyData,
        taming: tamingData,
    }

    const weight = sumWeights(skills, 'weight')
    const overflow = sumWeights(skills, 'weight_overflow')
    skills.total = weight + overflow
    skills.weight = weight
    skills.weight_overflow = overflow

    return skills as skillsWeightReturn
}
/** @internal */
function sumWeights(skills: any, type: string) {
    return weightSkills.map(v => {
        return skills[v][type]
    })
        .reduce((accumulator, current) => accumulator + current)
}