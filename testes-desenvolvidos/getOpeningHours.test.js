const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Testa se getOpeningHours é uma função', () => {
    expect(typeof getOpeningHours).toBe('function');
  });
  it('Caso o parâmetro seja vazio, retorna o horário de abertura e fechamentos dos dias', () => {
    const expectResult = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(expectResult);
  });
  it('Testa se ao enviar parâmetros válidos, ele retorna o zoo aberto', () => {
    expect(getOpeningHours('Friday', '02:00-PM')).toBe('The zoo is open');
  });
  it('Testa se ao enviar um horário depois do close, ele retorna fechado', () => {
    expect(getOpeningHours('Friday', '00:00-AM')).toBe('The zoo is closed');
  });
  it('Testa se não enviar o formato certo, ele lança um erro', () => {
    expect(() => getOpeningHours('Friday', 'Fernado')).toThrowError(new Error('The hour should represent a number'));
  });
  it('Testa se passar um mês que não existe, retorna um erro', () => {
    expect(() => getOpeningHours('MOndaq', '06:00-AM')).toThrowError(new Error('The day must be valid. Example: Monday'));
  });
  it('Testa se a abreviação estiver errada, retorn um erro', () => {
    expect(() => getOpeningHours('Monday', '06:00-MN')).toThrowError(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });
  it('Testa se minutos forem maior que 59, retorna um erro', () => {
    expect(() => getOpeningHours('Monday', '06:77-AM')).toThrowError(new Error('The minutes must be between 0 and 59'));
  });
  it('Testa se horas for maior que 12, retorna um erro', () => {
    expect(() => getOpeningHours('Monday', '13:00-AM')).toThrowError(new Error('The hour must be between 0 and 12'));
  });
  it('Testa se passando uma data e horário, ele retorna que o zoo está fechado', () => {
    expect(getOpeningHours('Monday', '00:00-AM')).toBe('The zoo is closed');
  });
});
