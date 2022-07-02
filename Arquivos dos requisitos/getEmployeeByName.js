const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) {
    return {};
  }
  return data.employees.find((e) => e.firstName === employeeName || e.lastName === employeeName);
}
console.log(getEmployeeByName('Nigel'));
module.exports = getEmployeeByName;
