import {dungeonWeightGroup} from "../constants";
import {calcIndividualDungeonWeight} from "../util/Dungeon/calcIndividualDungeonWeight";

/**
 * Gets the players weight for a specified dungeon or dungeon class.
 * @param dungeonType {skillTypes}
 * A dungeon type from dungeonTypes object.
 * @param xp
 * A number exp value that is greater than or equal to 0
 * @returns {total: number, weight: number, overflow: number}
 * {total: number, weight: number, overflow: number}
 * @example
 * const catacombsWeight = skillWeight(dungeonTypes.CATACOMBS, 50000000)
 */
export function dungeonWeight (dungeonType: string, xp: number) {
    const data = calcIndividualDungeonWeight(dungeonType, xp)
    const total = data.weight + data.weight_overflow || 0

    return {
        total,
        weight: data.weight,
        overflow: data.weight_overflow
    }
}