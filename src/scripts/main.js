import { createPlan } from "./plan.js";
import { usePlants } from "./field.js";
import { plantSeeds } from "./tractor.js";
import { harvestPlants } from "./harvester.js";
import { catalog } from "./catalog.js";

const yearlyPlan = createPlan();
plantSeeds(yearlyPlan);
const plantsUsed = usePlants()
const harvestArray = harvestPlants(plantsUsed);
const parentHTMLElement = document.querySelector(".container");
parentHTMLElement.innerHTML = catalog(harvestArray);
console.log(yearlyPlan);
console.log(plantsUsed);
console.log(harvestArray);





