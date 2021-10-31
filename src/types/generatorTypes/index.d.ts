/** @internal */
export interface SkillsData {
    mining: number
    foraging: number
    enchanting: number
    farming: number
    combat: number
    fishing: number
    alchemy: number
    taming: number
    carpentry: number
    runecrafting: number
}
/** @internal */
export interface skillsWeightReturn {
    total: number
    weight: number
    weight_overflow: number
    mining: {
        weight: number
        weight_overflow: number
    }
    foraging: {
        weight: number
        weight_overflow: number
    }
    enchanting: {
        weight: number
        weight_overflow: number
    }
    farming: {
        weight: number
        weight_overflow: number
    }
    combat: {
        weight: number
        weight_overflow: number
    }
    fishing: {
        weight: number
        weight_overflow: number
    }
    alchemy: {
        weight: number
        weight_overflow: number
    }
    taming: {
        weight: number
        weight_overflow: number
    }
}

/** @internal */
export interface slayerWeightReturn {
    total: number
    weight: number
    overflow: number
    revenant: {
        weight: number
        weight_overflow: number
    }
    tarantula: {
        weight: number
        weight_overflow: number
    }
    sven: {
        weight: number
        weight_overflow: number
    }
    enderman: {
        weight: number
        weight_overflow: number
    }
}