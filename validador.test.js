
const validarEmail = require('./validar_email.js');

describe('Testes da função validarEmail', () => {
  
  it('deve retornar true para e-mails válidos', () => {
    expect(validarEmail("usuario@exemplo.com")).toBe(true);
    expect(validarEmail("nome.sobrenome@dominio.br")).toBe(true);
  });

  it('deve aceitar o sinal de "+" (comum em e-mails Gmail)', () => {
    expect(validarEmail("usuario+tag@exemplo.com")).toBe(true);
  });

  it('deve retornar false para e-mails sem arroba(@)', () => {
    expect(validarEmail("email-invalido.com")).toBe(false);
  });

  it('deve retornar false para e-mails sem domínio', () => {
    expect(validarEmail("usuario@dominio")).toBe(false);
  });

  it('deve rejeitar e-mails com múltiplos arrobas', () => {
    expect(validarEmail("usuario@@exemplo.com")).toBe(false);
  });

  it('deve retornar false para strings vazias', () => {
    expect(validarEmail("")).toBe(false);
  });
});