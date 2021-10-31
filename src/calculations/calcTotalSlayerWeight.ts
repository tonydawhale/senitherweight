import {calcIndividualSlayerWeight} from "../util/Slayer/calcIndividualSlayerWeight";
import {slayerWeightGroup} from "../constants"
import {slayerWeightReturn} from "../types/generatorTypes";

/**
 * Fetches the slayer weight from a profile derived from the Hypixel api.
 * @returns {slayerWeightReturn}
 * @param profileData
 * @example
 * Example using the @zikeji/hypixel Api Wrapper.
 *
 * import { Client as Hypixel } from "@zikeji/hypixel";
 * const client = new Hypixel("API_KEY")
 * const profile = await client.skyblock.profiles.uuid(uuid)
 * const slayerWeight = totalSlayerWeight(profile)
 */
export function totalSlayerWeight(profileData: any) {
    const revData = calcIndividualSlayerWeight(profileData?.slayer_bosses?.zombie?.xp as number || 0, "revenant")
    const taraData = calcIndividualSlayerWeight(profileData?.slayer_bosses?.spider?.xp as number || 0, "tarantula")
    const svenData = calcIndividualSlayerWeight(profileData?.slayer_bosses?.wolf?.xp as number || 0, "sven")
    const emanData = calcIndividualSlayerWeight(profileData?.slayer_bosses?.enderman?.xp as number || 0,"enderman")

    const weight = revData.weight + taraData.weight + svenData.weight + emanData.weight
    const overflow = revData.weight_overflow + taraData.weight_overflow + svenData.weight_overflow + emanData.weight_overflow

    return {
        total: weight + overflow,
        weight,
        overflow,
        revenant: revData,
        tarantula: taraData,
        sven: svenData,
        enderman: emanData
    }
}
/** @internal */
function sumWeights(slayers: any, type: string) {
    return Object.keys(slayerWeightGroup)
        .map(v => slayers.bosses[v][type])
        .reduce((accumulator, current) => accumulator + current)
}