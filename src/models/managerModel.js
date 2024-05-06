var database = require("../database/config")


function listarEmpresas() {
    var instrucaoSql = `SELECT * FROM empresa`
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}















module.exports = {
    listarEmpresas
    // autenticar,
    // cadastrarFunc,
    // listarFunc,
    // deletarFunc,
    // editarFunc,
    // findEmpresaById
};