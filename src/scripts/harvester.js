export const harvestPlants = (plantsArray) => {
    let seedsHarvested = [];
        for (let plant of plantsArray) {
            if (plant.type === "Corn") {
                for (let i = 0; i < plant.output / 2; i++) {
                    seedsHarvested.push(plant);
                }
                } else {
                    for (let i = 0; i < plant.output; i++) {
                    seedsHarvested.push(plant);
                    }
                }
            }
    return seedsHarvested;
};
