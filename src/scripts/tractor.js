import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoyBean } from "./seeds/soybean.js";
import { createSunFlower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";
import {addPlant, usePlants} from "./field.js";


export const plantSeeds = (planArray) => {
for(let plantRows of planArray) {
    for(let row of plantRows) {

        if (row === "Asparagus") {
        const asparagusSeed = createAsparagus();
        addPlant(asparagusSeed);
    } else if( row === "Corn") {
        const cornSeed = createCorn();
        addPlant(cornSeed);
    } else if(row === "Potato") {
        const potatoSeed = createPotato();
        addPlant(potatoSeed);
    } else if(row === "SoyBean") {
        const soybeenSeed = createSoyBean();
        addPlant(soybeenSeed);
    } else if( row === "SunFlower") {
        const sunflowerSeed = createSunFlower();
        addPlant(sunflowerSeed); 
    } else (row === "Wheat") {
        const wheatSeed = createWheat();
        addPlant(wheatSeed);
    }
};

// {
//     [
//         ["Potato", "Soybean", "Soybean", "Corn"],
//         ["Wheat", "Corn", "Wheat", "Asparagus"],
//         ["Asparagus", "Wheat", "Soybean", "Corn"],
//         ["Asparagus", "Soybean", "Potato", "Wheat"]
//     ]    
// };