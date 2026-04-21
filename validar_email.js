function validarEmail(email) {
  // Regex para validar o formato do e-mail
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
module.exports = validarEmail;