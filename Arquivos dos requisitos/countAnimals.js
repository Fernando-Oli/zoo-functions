const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  const obj = {};
  const { species } = data;
  if (animal === undefined) {
    species.forEach((e) => {
      obj[e.name] = e.residents.length;
    });
    return obj;
  }
  if (animal.sex !== undefined) {
    return species.find((e) => e.name === animal.specie)
      .residents.filter((i) => i.sex === animal.sex).length;
  }
  return species.find((e) => e.name === animal.specie).residents.length;
}

module.exports = countAnimals;
