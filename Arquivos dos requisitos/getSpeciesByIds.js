const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(ids, ids2) {
  // seu código aqui
  return ids === undefined ? [] : species.filter((e) => e.id === ids || e.id === ids2);
}

module.exports = getSpeciesByIds;
