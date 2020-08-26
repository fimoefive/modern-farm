import {createAsparagus} from "./seeds/asparagus.js";

let fieldCrops = [];
const Asparagus = createAsparagus();

export const addPlant = (seedObj) => {
    fieldCrops.push(seedObj);
};

export const usePlants = () => {
    return fieldCrops;
};


console.log(addPlant);
console.log(fieldCrops);