import {dungeon_xp} from "../../constants";

/**@internal*/
export function getDungeonLevel(xp: number) {
    let level = 0
    let percentage = 0.0
    for (let i = 0; i < dungeon_xp.length; i++) {
        if (dungeon_xp[i][1] > xp) {
            level = dungeon_xp[i][0]
            let a = xp - dungeon_xp[i - 1][1]
            let b = dungeon_xp[i][1] - dungeon_xp[i - 1][1]
            percentage = a / b
            break;
        }
    }
    let res = level + percentage - 1
    if (res != -1) return res
    else return undefined
}