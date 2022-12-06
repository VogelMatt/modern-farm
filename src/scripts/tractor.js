import { addPlant } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";
// import { allPlants } from "./field.js";
/**
use for of loop to iterate through parent array 
use another for of loop to get through child array
*/
export const plantSeeds = (yearlyPlan) => {
    for (let plan of yearlyPlan) {
        for(let seed of plan) {
            if (seed === "Asparagus") {
                addPlant(createAsparagus()); 
            }
            if (seed === "Corn") { 
                addPlant(createCorn());
            }
            if (seed === "Potato") {
                addPlant(createPotato());
            }
            if (seed === "Sunflower") {
                addPlant(createSunflower());
            }
            if (seed === "Wheat") {
                addPlant(createWheat());
            }
            if (seed === "Soybean") {
                addPlant(createSoybean());
            }
        }
    }
}