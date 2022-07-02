const data = require('../data/zoo_data');

const isTheEmployeeExist = (funcionarioID) => {
  const result = data.employees.find((fun) => fun.id === funcionarioID.id);
  if (result === undefined) {
    throw new Error('Informações inválidas');
  }
};
const getSpeciesOrLocation = (animaisPorFuncionário, tipo) => animaisPorFuncionário
  .map((animais) => data.species
    .find((element) => element.id === animais)[tipo]);
const createObj = (arr) => arr.map((i) => ({
  id: i.id,
  fullName: `${i.firstName} ${i.lastName}`,
  species: getSpeciesOrLocation(i.responsibleFor, 'name'),
  locations: getSpeciesOrLocation(i.responsibleFor, 'location'),
}));
function getEmployeesCoverage(e) {
  // seu código aqui
  if (e === undefined) {
    return createObj(data.employees);
  }
  if (Object.keys(e)[0] === 'name') {
    const employee = [data.employees
      .find((funN) => funN.firstName === e.name || funN.lastName === e.name)];
    return createObj(employee)[0];
  }
  if (Object.keys(e)[0] === 'id') {
    isTheEmployeeExist(e);
    const employee = [data.employees
      .find((fun) => fun.id === e.id)];
    return createObj(employee)[0];
  }
}
console.log(getEmployeesCoverage({ name: 'Sharonda' }));
module.exports = getEmployeesCoverage;
