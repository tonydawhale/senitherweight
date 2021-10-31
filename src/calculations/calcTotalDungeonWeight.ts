import {calcIndividualDungeonWeight} from "../util/Dungeon/calcIndividualDungeonWeight";


/**
 * Fetches the skill weight from a profile derived from the Hypixel api.
 * @returns {dungeonsWeightReturn}
 * @param profileData
 * @example
 * Example using the @zikeji/hypixel Api Wrapper.
 *
 * import { Client as Hypixel } from "@zikeji/hypixel";
 * const client = new Hypixel("API_KEY")
 * const profile = await client.skyblock.profiles.uuid(uuid)
 * const dungeonWeight = totalDungeonWeight(profile)
 */
export function totalDungeonWeight(profileData: any) {
    const catacombs = calcIndividualDungeonWeight("catacombs", profileData?.dungeons?.dungeon_types?.catacombs?.experience as number || 0)
    const healer = calcIndividualDungeonWeight("healer", profileData?.dungeons?.player_classes?.healer?.experience as number || 0)
    const mage = calcIndividualDungeonWeight("mage", profileData?.dungeons?.player_classes?.mage?.experience as number || 0)
    const berserker = calcIndividualDungeonWeight("berserker", profileData?.dungeons?.player_classes?.berserker?.experience as number || 0)
    const archer = calcIndividualDungeonWeight("archer", profileData?.dungeons?.player_classes?.archer?.experience as number || 0)
    const tank = calcIndividualDungeonWeight("tank", profileData?.dungeons?.player_classes?.tank?.experience as number || 0)

    const weight = catacombs.weight + healer.weight + mage.weight + berserker.weight + archer.weight + tank.weight
    const overflow = catacombs.weight_overflow + healer.weight_overflow + mage.weight_overflow + berserker.weight_overflow + archer.weight_overflow + tank.weight_overflow

    return {
        total: weight + overflow,
        weight,
        overflow,
        catacombs,
        healer,
        mage,
        berserker,
        archer,
        tank
    }
}