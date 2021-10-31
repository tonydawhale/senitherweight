# senitherweight package
## Basic Details
The npm-senitherweight package is a typescript package that takes Hypixel Skyblock API data and returns the player's senither weight. The package does not make the api calls so if an api call is required as a parameter, you will have to do that on your own.

## Credits
- [Senither](https://github.com/Senither) - Creator of the weight formulas

## Installation 

## Usage
### Total Weight Methods
Returns an object of total weight values for a player's profile given a Skyblock profile as a parameter.
```typescript
// Example using the @zikeji/hypixel Api Wrapper.
const senither = require("senitherweight");
import { Client as Hypixel } from "@zikeji/hypixel";
const client = new Hypixel("API_KEY")

const profile = await client.skyblock.profiles.uuid(uuid)
const weight = senither.totalWeight(profile)

// Output: 
{
  total: 15000,
  weight: 13000,
  overflow: 2000
}
```
### Skill Weight Methods
Returns the skill weight of a specified skill given the specified experience.
```typescript
const senither = require("senitherweight");

let combatWeight = senither.skillWeight("combat", 2500000)

console.log(combatWeight)

// Output: 
{ total: 27.25162609118836, weight: 27.25162609118836, overflow: 0 }
```
Returns an object of skill weight values for a player's profile given a Skyblock profile as a parameter.
```typescript
// Example using the @zikeji/hypixel Api Wrapper.
const senither = require("senitherweight");
import { Client as Hypixel } from "@zikeji/hypixel";
const client = new Hypixel("API_KEY")

const profile = await client.skyblock.profiles.uuid(uuid)
const skillWeight = senither.totalSkillWeight(profile)

// Output: 
{
    total: 0,
    weight: 0,
    weight_overflow: 0,
    mining: {
        weight: 0,
        weight_overflow: 0,
    },
    foraging: {
        weight: 0,
        weight_overflow: 0,
    },
    enchanting: {
        weight: 0,
        weight_overflow: 0,
    },
    farming: {
        weight: 0,
        weight_overflow: 0,
    },
    combat: {
        weight: 0,
        weight_overflow: 0,
    },
    fishing: {
        weight: 0,
        weight_overflow: 0,
    },
    alchemy: {
        weight: 0,
        weight_overflow: 0,
    },
    taming: {
        weight: 0,
        weight_overflow: 0,
    }
}
```
### Slayer Weight Methods
Returns the slayer weight of a specified slayer given the specified experience.
```typescript
const senither = require("senitherweight");

let svenWeight = senither.slayerWeight("sven", 25000)

console.log(svenWeight)

// Output:
{ total: 12.7420998980632, weight: 12.7420998980632, overflow: 0 }
```
Returns an object of slayer weight values for a player's profile given a Skyblock profile as a parameter.
```typescript
// Example using the @zikeji/hypixel Api Wrapper.
const senither = require("senitherweight");
import { Client as Hypixel } from "@zikeji/hypixel";
const client = new Hypixel("API_KEY")

const profile = await client.skyblock.profiles.uuid(uuid)
const slayerWeight = senither.totalSlayerWeight(profile)

// Output: 
{
    total: 0,
    weight: 0,
    overflow: 0,
    revenant: {
        weight: 0,
        weight_overflow: 0,
    },
    tarantula: {
        weight: 0,
        weight_overflow: 0,
    },
    sven: {
        weight: 0,
        weight_overflow: 0,
    },
    enderman: {
        weight: 0,
        weight_overflow: 0,
    }
}
```
### Dungeon Weight Methods
Returns the dungeon weight of a specified dungeon skill or class given the specified experience.
```typescript
const senither = require("senitherweight");

let catacombsWeight = senither.dungeonWeight("catacombs", 25000)

console.log(svenWeight)

// Output:
{ total: 41.567850815986695, weight: 41.567850815986695, overflow: 0 }
```
Returns an object of dungeon weight values for a player's profile given a Skyblock profile as a parameter.
```typescript
// Example using the @zikeji/hypixel Api Wrapper.
const senither = require("senitherweight");
import { Client as Hypixel } from "@zikeji/hypixel";
const client = new Hypixel("API_KEY")

const profile = await client.skyblock.profiles.uuid(uuid)
const dungeonWeight = senither.totalDungeonWeight(profile)

// Output:
{
    total: 0,
    weight: 0,
    overflow: 0,
    catacombs: {
        weight: 0,
        weight_overflow: 0,
    },
    healer: {
        weight: 0,
        weight_overflow: 0,
    },
    mage: {
        weight: 0,
        weight_overflow: 0,
    },
    berserker: {
        weight: 0,
        weight_overflow: 0,
    },
    archer: {
        weight: 0,
        weight_overflow: 0,
    },
    tank: {
        weight: 0,
        weight_overflow: 0,
    }
}
```
## License
The senitherweight package is open-sourced software licensed under the [MIT License](https://opensource.org/licenses/MIT)
