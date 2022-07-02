const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const obj = {
    child: 0,
    adult: 0,
    senior: 0,
  };
  entrants.forEach((element) => {
    if (element.age >= 18 && element.age < 50) {
      obj.adult += 1;
    } else if (element.age >= 50) {
      obj.senior += 1;
    } else if (element.age < 18) {
      obj.child += 1;
    }
  });
  return obj;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const pessoas = countEntrants(entrants);
  const adultoPreço = pessoas.adult * data.prices.adult;
  const criançaPreço = pessoas.child * data.prices.child;
  const velhoPreço = pessoas.senior * data.prices.senior;
  return adultoPreço + criançaPreço + velhoPreço;
}

module.exports = { calculateEntry, countEntrants };
