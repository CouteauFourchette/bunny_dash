import Network from './network';

const NEW_ENTITIES = 0.01;
const NETWORK_DIMENSIONS = [4, [16, 16], 1];
const GENETIC_CROSSOVER = 0.5;
const MUTATION_RANGE = 0.2;
const MUTATION_RATE = 0.02;

class Genetic {
  static newGeneration(players, oldGeneration) {
    players.forEach((brain) => {
      let newWeights;
      let newBias;
      if (oldGeneration) {
        const parent1 = Genetic.getFitParent(oldGeneration);
        const parent2 = Genetic.getFitParent(oldGeneration);
        newWeights = Genetic.produceChildWeights(parent1, parent2);
        newBias = parent1.getNetwork().extractBias();
      }

      if (Math.random() < NEW_ENTITIES) {
        newWeights = undefined;
      }

      brain.setNetwork(new Network(NETWORK_DIMENSIONS, newWeights, newBias));
    });
    return players;
  }

  static getFitParent(blobBrains) {
    const totalFit = blobBrains.reduce((acc, brain) => acc + brain.fitness, 0);
    const probability = Math.random();

    let cumProb = 0;
    for (let i = 0; i < blobBrains.length; i += 1) {
      const brain = blobBrains[i];
      if (probability < ((brain.fitness / totalFit) + cumProb)) {
        return brain;
      }
      cumProb += (brain.fitness / totalFit);
    }
  }

  static produceChildWeights(parent1, parent2) {
    return Genetic.breed(
      parent1.getNetwork().extractWeights(),
      parent2.getNetwork().extractWeights(),
    );
  }

  static produceChildBias(parent1, parent2) {
    return Genetic.breed(
      parent1.getNetwork().extractBias(),
      parent2.getNetwork().extractBias(),
    );
  }

  static breed(weightsA, weightsB) {
    const networkSize = weightsA.length;
    const newWeights = [];
    for (let i = 0; i < networkSize; i += 1) {
      newWeights[i] = [];
      for (let j = 0; j < weightsA[i].length; j += 1) {
        newWeights[i][j] = [];
        for (let k = 0; k < weightsA[i][j].length; k += 1) {
          if (Math.random() <= GENETIC_CROSSOVER) {
            newWeights[i][j][k] = weightsA[i][j][k];
          } else {
            newWeights[i][j][k] = weightsB[i][j][k];
          }

          if (Math.random() < MUTATION_RATE) {
            newWeights[i][j][k] += ((2 * Math.random()) - 1) * MUTATION_RANGE;
          }
        }
      }
    }
    return newWeights;
  }
}

export default Genetic;
