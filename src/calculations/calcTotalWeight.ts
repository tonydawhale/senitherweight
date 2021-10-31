import { totalWeightReturn } from "../types/generatorTypes"
import { totalSkillWeight } from "./calcTotalSkillWeight"
import {totalSlayerWeight} from "./calcTotalSlayerWeight";
import {totalDungeonWeight} from "./calcTotalDungeonWeight";

/**
 * Fetches the total weight from a profile derived from the Hypixel api.
 * @returns {totalWeightReturn}
 * @param profileData
 * @example
 * Example using the @zikeji/hypixel Api Wrapper.
 *
 * import { Client as Hypixel } from "@zikeji/hypixel";
 * const client = new Hypixel("API_KEY")
 * const profile = await client.skyblock.profiles.uuid(uuid)
 * const dungeonWeight = totalWeight(profile)
 */
export function totalWeight(profileData: any) {
    const skillWeight = totalSkillWeight(profileData)
    const slayerWeight = totalSlayerWeight(profileData)
    const dungeonWeight = totalDungeonWeight(profileData)

    let total = skillWeight.total + slayerWeight.total + dungeonWeight.total
    let weight = skillWeight.weight + slayerWeight.weight + dungeonWeight.weight
    let overflow = skillWeight.weight_overflow + slayerWeight.overflow + dungeonWeight.overflow

    return {
        total,
        weight,
        overflow
    }
}