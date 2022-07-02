const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('testa se a função existe', () => {
    expect(typeof handlerElephants).toBe('function');
  });
  it('testa se o parãmetro não for definido, retorna undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('testa se o parâmetro não for uma string, retorna Parâmetro inválido, é necessário uma string', () => {
    expect(handlerElephants(2)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('testa se o parâmetro for count, retorna o número de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('testa se o parâmetro for uma string, mas não conrreponder a meu dado', () => {
    expect(handlerElephants('Fernando')).toBeNull();
  });
  it('testa se o parâmetro for names, retorna os nomes dos elefantes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('testa se o parâmetro for averageAge, retorna a média dos elefantes de idade', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  it('testa se o parâmetro for location, retorna onde no zoo eles ficam', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('testa se o parâmetro for popularity, retorna popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('testa se o parâmetro for availability, retorna os dias da semana que se pode visitar os elefantes', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  const result = [
    { name: 'Ilana', sex: 'female', age: 11 },
    { name: 'Orval', sex: 'male', age: 15 },
    { name: 'Bea', sex: 'female', age: 12 },
    { name: 'Jefferson', sex: 'male', age: 4 },
  ];
  it('testa se o parâmetro for availability, retorna os dias da semana que se pode visitar os elefantes', () => {
    expect(handlerElephants('residents')).toEqual(result);
  });
});
