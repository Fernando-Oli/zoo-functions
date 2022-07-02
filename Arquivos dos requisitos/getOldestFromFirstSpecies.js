const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const arrayAnimalsId = data.employees.find((e) => e.id === id).responsibleFor;
  const arrayAnimals = data.species.find((animal) => animal.id === arrayAnimalsId[0]).residents;
  const info = arrayAnimals.reduce((acc, curr) => ((acc.age > curr.age) ? acc : curr));
  return [info.name, info.sex, info.age];
}
module.exports = getOldestFromFirstSpecies;
