function validarEmail(email) {
    // Regex para validar o formato de e-mail
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Lista de cenários para teste
const casosDeTeste = [
    { email: "teste@dominio.com", esperado: true },
    { email: "nome.sobrenome@empresa.org", esperado: true },
    { email: "usuario123@sub.dominio.br", esperado: true },
    { email: "emailsemarroba.com", esperado: false },
    { email: "email@semdominio", esperado: false },
    { email: "@semusuario.com", esperado: false },
    { email: "espaco no@email.com", esperado: false }
];

// Execução dos testes

const casosDeTeste = [
    { email: "teste@dominio.com", esperado: true },
    { email: "nome.sobrenome@empresa.org", esperado: true },
    { email: "usuario123@sub.dominio.br", esperado: true },
    { email: "emailsemarroba.com", esperado: false },
    { email: "email@semdominio", esperado: false },
    { email: "@semusuario.com", esperado: false },
    { email: "espaco no@email.com", esperado: false }
];

// Execução dos testes
casosDeTeste.forEach(({ email, esperado }) => {
    const resultado = validarEmail(email);
    console.log(`E-mail: "${email}" | Esperado: ${esperado} | 
        Resultado: ${resultado} |
        ${resultado === esperado ? "✅ PASSEI" : "❌ FALHEI"}`);
});
