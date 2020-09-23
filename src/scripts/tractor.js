import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoyBean } from "./seeds/soybean.js";
import { createSunFlower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";


export const plantSeeds = (plantArray) => {
    [
        ["Potato", "Soybean", "Soybean", "Corn"],
        ["Wheat", "Corn", "Wheat", "Asparagus"],
        ["Asparagus", "Wheat", "Soybean", "Corn"],
        ["Asparagus", "Soybean", "Potato", "Wheat"]
    ]    
};