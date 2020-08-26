import {createPlan} from "./plan.js";
import {addPlant, usePlants} from "./field.js";
import { createAsparagus } from "./seeds/asparagus.js";
import { createSoyBean } from "./seeds/soybean.js";
import { createCorn } from "./seeds/corn.js";
import { createSunFlower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";
import { createPotato } from "./seeds/potato.js";

console.log("Welcome to the main module");

const yearlyPlan = createPlan();
console.log(yearlyPlan);

const asparagusSeed = createAsparagus();
console.log(asparagusSeed);

const soyBeanSeed = createSoyBean();
console.log(soyBeanSeed);

const cornSeed = createCorn();
console.log(cornSeed);

const sunFlowerSeed = createSunFlower();
console.log(sunFlowerSeed);

const wheatSeed = createWheat();
console.log(wheatSeed);

const potatoSeed = createPotato();
console.log(potatoSeed);

addPlant(asparagusSeed);
addPlant(soyBeanSeed);
addPlant(cornSeed);
addPlant(sunFlowerSeed);
addPlant(wheatSeed);
addPlant(potatoSeed);