const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  const array = [];
  data.employees.forEach((e) => e.managers.forEach((i) => array.push(i)));
  return array.some((x) => x === id);
}

function getRelatedEmployees(managerId) {
  const boolean = isManager(managerId);
  if (boolean === true) {
    const resultado = [];
    data.employees.forEach((e) => e.managers.forEach((i) => {
      if (i === managerId) {
        resultado.push(`${e.firstName} ${e.lastName}`);
      }
    }));
    return resultado;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
module.exports = { isManager, getRelatedEmployees };
