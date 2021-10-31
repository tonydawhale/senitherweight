import {dungeonWeight, slayerWeight} from "./calculations";

export * from "./types/parameters/parameterTypes"
export * from "./calculations"

let svenWeight = dungeonWeight("catacombs", 25000)
console.log(svenWeight)