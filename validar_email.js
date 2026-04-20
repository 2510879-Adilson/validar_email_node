function validarEmail(email) {
  // Regex para validar o formato do e-mail
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
//console.log(validarEmail("usuario@exemplo.com"));
//console.log(validarEmail("usuario@exemplo.com")); // true
//console.log(validarEmail("email-invalido.com"));   // false
//console.log(validarEmail("usuario@dominio"));      // false

module.exports = validarEmail;