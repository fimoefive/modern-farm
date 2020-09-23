import {createAsparagus} from "./seeds/asparagus.js";

let fieldCrops = [];

export const addPlant = (seedObj) => {
    fieldCrops.push(seedObj);
};

export const usePlants = () => {
    return fieldCrops.slice;
};

console.log(addPlant);
console.log(fieldCrops);