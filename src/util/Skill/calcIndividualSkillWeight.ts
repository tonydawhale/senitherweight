import {SkillWeightEntity} from "../../types";
import {skillWeightGroup} from "../../constants";
import {getSkillLevel} from "./getSkillLevel";
import {calculateSkillWeight} from "./calculateSkillWeight";

/** @internal */
export function calcIndividualSkillWeight(exp: number, skill: string) {
    const skillGroup: SkillWeightEntity = skillWeightGroup[skill]
    const level = getSkillLevel(exp, skill) as number || 0

    return calculateSkillWeight(skillGroup, level, exp)
}