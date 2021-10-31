import {SlayerWeightGroup} from "../../types";
import {slayerWeightGroup} from "../../constants"

/** @internal */
export function calcIndividualSlayerWeight(experience: number, type: string) {
    const slayerWeight = slayerWeightGroup[type]

    if (experience <= 1000000) {
        return {
            weight: experience == 0 ? 0 : experience / slayerWeight.divider,
            weight_overflow: 0,
        }
    }

    let base = 1000000 / slayerWeight.divider
    let remaining = experience - 1000000

    let modifier = slayerWeight.modifier
    let overflow = 0

    while (remaining > 0) {
        let left = Math.min(remaining, 1000000)

        overflow += Math.pow(left / (slayerWeight.divider * (1.5 + modifier)), 0.942)
        modifier += slayerWeight.modifier
        remaining -= left
    }

    return {
        weight: base,
        weight_overflow: overflow,
    }
}