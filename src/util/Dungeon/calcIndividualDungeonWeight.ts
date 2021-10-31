import {dungeonWeightGroup} from "../../constants";
import {getDungeonLevel} from "./getDungeonLevel";

let level50Experience = 569809640

export function calcIndividualDungeonWeight (type: string, experience: number) {
    let level = getDungeonLevel(experience) as number || 0
    let percentageModifier = dungeonWeightGroup[type]

    let base = Math.pow(level, 4.5) * percentageModifier

    if (experience <= level50Experience) {
        return {
            weight: base,
            weight_overflow: 0
        }
    }

    let remaining = experience - level50Experience
    let splitter = (4 * level50Experience) / base

    return {
        weight: Math.floor(base),
        weight_overflow: Math.pow(remaining / splitter, 0.968)
    }
}