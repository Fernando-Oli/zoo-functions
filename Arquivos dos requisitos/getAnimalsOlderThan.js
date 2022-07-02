const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return data.species.reduce((ele, curr) => {
    if (curr.name === animal) {
      return curr.residents.every((i) => i.age >= age);
    }
    return ele;
  }, false);
}
console.log(getAnimalsOlderThan('otters', 8));
module.exports = getAnimalsOlderThan;
