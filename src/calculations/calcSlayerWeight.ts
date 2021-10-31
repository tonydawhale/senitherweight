import {calcIndividualSlayerWeight} from "../util/Slayer/calcIndividualSlayerWeight"

/**
 * Gets the players weight for a specified slayer.
 * @param slayerType A slayer type from slayerTypes
 * @param xp
 * A number exp value that is greater than or equal to 0
 * @returns {total: number, weight: number, overflow: number}
 * {total: number, weight: number, overflow: number}
 * @example
 * const svenWeight = slayerWeight(slayerTypes.SVEN, 25000)
 */
export function slayerWeight (slayerType: string, xp: number) {
    const data = calcIndividualSlayerWeight(xp, slayerType)
    const total = data.weight + data.weight_overflow

    return {
        total,
        weight: data.weight,
        overflow: data.weight_overflow
    }
}