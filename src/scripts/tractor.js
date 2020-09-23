import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoyBean } from "./seeds/soybean.js";
import { createSunFlower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";
import {addPlant, usePlants} from "./field.js";


export const plantSeeds = (plantArray) => {
for(cosnt plantRows of planArray) {
    for(cosnt row of planRows) {



        
    }
}

    [
        ["Potato", "Soybean", "Soybean", "Corn"],
        ["Wheat", "Corn", "Wheat", "Asparagus"],
        ["Asparagus", "Wheat", "Soybean", "Corn"],
        ["Asparagus", "Soybean", "Potato", "Wheat"]
    ]    
};