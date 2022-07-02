const data = require('../data/zoo_data');

const getAnimalsByDay = (day) => {
  const animaisPorDia = [];
  data.species.forEach((animals) => animals.availability.forEach((daysOfWeek) => {
    if (daysOfWeek === day) {
      animaisPorDia.push(animals.name);
    }
  }));
  return animaisPorDia;
};
const createOBj = () => {
  const obj = {};
  Object.entries(data.hours).forEach((e) => {
    obj[e[0]] = { officeHour: `Open from ${e[1].open}am until ${e[1].close}pm`,
      exhibition: getAnimalsByDay(e[0]) };
  });
  obj.Monday = { exhibition: 'The zoo will be closed!', officeHour: 'CLOSED' };
  return obj;
};
function getSchedule(scheduleTarget) {
  const boolean = data.species.some((ani) => ani.name === scheduleTarget);
  const dias = Object.entries(data.hours).some((dia) => dia[0] === scheduleTarget);
  if (boolean === true) {
    return data.species.find((e) => e.name === scheduleTarget).availability;
  }
  if (scheduleTarget === 'Monday') {
    return { Monday: { exhibition: 'The zoo will be closed!', officeHour: 'CLOSED' } };
  }
  if (dias === true) {
    return { [scheduleTarget]: createOBj()[scheduleTarget] };
  }
  return createOBj();
}
module.exports = getSchedule;
