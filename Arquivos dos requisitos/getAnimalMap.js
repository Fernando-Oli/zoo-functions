const data = require('../data/zoo_data');

const { species } = data;
const localizeTheAnimals = (loc) => species
  .filter((specAni) => specAni.location === loc)
  .map((vluesOfSpec) => vluesOfSpec.name);

const createObjWithAnimalsNames = (aniByLoc, ordenado) => {
  const objAnimalsNames = {};
  species.forEach((specAni) => {
    objAnimalsNames[specAni.name] = specAni.residents.map((caracSpec) => caracSpec.name);
  });
  if (ordenado === true) {
    return aniByLoc
      .map((animalsByLocSorted) => ({ [animalsByLocSorted]: objAnimalsNames[animalsByLocSorted]
        .sort() }));
  }
  return aniByLoc
    .map((animalsByLoc) => ({ [animalsByLoc]: objAnimalsNames[animalsByLoc] }));
};

const getAnimalsSex = (animals, sexo, ordem) => {
  const obj = {};
  species.forEach((aniSpec) => {
    obj[aniSpec.name] = aniSpec.residents
      .filter((animalBySpec) => animalBySpec.sex === sexo).map((NomesAni) => NomesAni.name);
  });
  return ordem === false ? animals.map((e) => ({ [e]: obj[e] })) : animals
    .map((i) => ({ [i]: obj[i].sort() }));
};

const createArrayOfAnimalNames = (func, para1, para2) => {
  const obj1 = {
    NE: func(localizeTheAnimals('NE'), para1, para2),
    NW: func(localizeTheAnimals('NW'), para1, para2),
    SE: func(localizeTheAnimals('SE'), para1, para2),
    SW: func(localizeTheAnimals('SW'), para1, para2),
  };
  return obj1;
};

const createObjOfAnimalsByLocal = (funcao) => ({
  NE: funcao('NE'),
  NW: funcao('NW'),
  SE: funcao('SE'),
  SW: funcao('SW'),
});
const validateTheOptions = (option) => {
  if (option === undefined || option.includeNames === undefined || option
    .includeNames === false) {
    return createObjOfAnimalsByLocal(localizeTheAnimals);
  }
};
function getAnimalMap(options) {
  // seu código aqui
  if (validateTheOptions(options) !== undefined) {
    return validateTheOptions(options);
  }
  const { sex, sorted } = options;
  const objArrayNomes = (ord) => createArrayOfAnimalNames(createObjWithAnimalsNames, ord);
  const objArrayNmSex = (sexo, order) => createArrayOfAnimalNames(getAnimalsSex, sexo, order);
  if (sex === undefined) {
    return sorted === true ? objArrayNomes(true) : objArrayNomes(false);
  }
  return sorted === true ? objArrayNmSex(sex, sorted) : objArrayNmSex(sex, false);
}
module.exports = getAnimalMap;
