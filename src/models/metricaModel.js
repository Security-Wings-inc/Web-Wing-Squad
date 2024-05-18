var database = require("../database/config")

function autenticar(email, senha) {
    var instrucao = `SELECT idEmpresa, nome, email FROM Empresa WHERE email = '${email}' AND senha = '${senha}';`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}




module.exports = {
    autenticar,
    
};