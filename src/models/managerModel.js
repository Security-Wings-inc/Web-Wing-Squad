var database = require("../database/config")


function listarEmpresa() {
    var instrucaoSql = `SELECT * FROM Empresa`
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function listarAdmin(idEmpresa) {
    var instrucaoSql = `
        SELECT idUsuario, nome, cpf, email, isAdmin 
        FROM usuario 
        WHERE fkEmpresa = ${idEmpresa} AND isAdmin = 1;
    `;

    return database.executar(instrucaoSql, { idEmpresa: idEmpresa });
}



function deletarAdmin(idVar) {
    var instrucaoSql = `DELETE FROM usuario WHERE idUsuario = '${idVar}';`;
    return database.executar(instrucaoSql);

}

function revogarAdmin(idVar) {
    var instrucaoSql = `UPDATE usuario SET isAdmin = 0 WHERE idUsuario = ${idVar};`;
    return database.executar(instrucaoSql);
}


function cadastrarAdmin(nome, email, senha, idEmpresa, isAdmin, cpf) {

    var instrucaoSql = `
        INSERT INTO usuario (nome, cpf,email,isAdmin,senha,fkEmpresa) VALUES ('${nome}','${cpf}','${email}','${isAdmin}', '${senha}','${idEmpresa}');`;
    return database.executar(instrucaoSql);
}


function updateCnpjAndTel(cnpj, tel, id) {
    var instrucaoSql = `UPDATE empresa set cnpj = '${cnpj}' ,telefone  = '${tel}' where idEmpresa = '${id}'`
    return database.executar(instrucaoSql)
}


function deleteEmpresa(id) {
    
    var instrucaoSqlMonitoramento = `
        DELETE m FROM Monitoramento m
        JOIN ComputadorESpec c ON m.fkComputador = c.idComputador
        WHERE c.fkEmpresa = ${id};
    `;
    
    var instrucaoSqlComputadores = `
        DELETE FROM ComputadorESpec WHERE fkEmpresa = ${id};
    `;
    
    var instrucaoSqlParametros = `
        DELETE FROM parametrosDeAlerta WHERE idEmpresa = ${id};
    `;
    
    
    var instrucaoSqlPermissoes = `
        DELETE FROM permissoes WHERE fkEmpresa = ${id};
    `;
    
    
    var instrucaoSqlUsuarios = `
        DELETE FROM usuario WHERE fkEmpresa = ${id};
    `;
    
    
    var instrucaoSqlEnderecos = `
        DELETE FROM Endereco WHERE fkEmpresa = ${id};
    `;
    

    var instrucaoSqlEmpresa = `
        DELETE FROM Empresa WHERE idEmpresa = ${id};
    `;
    
    return database.executar(instrucaoSqlMonitoramento)
        .then(() => database.executar(instrucaoSqlComputadores))
        .then(() => database.executar(instrucaoSqlParametros))
        .then(() => database.executar(instrucaoSqlPermissoes))
        .then(() => database.executar(instrucaoSqlUsuarios))
        .then(() => database.executar(instrucaoSqlEnderecos))
        .then(() => database.executar(instrucaoSqlEmpresa))
        .catch(error => {
            console.error("Erro ao deletar a empresa e seus dados vinculados: ", error);
        });
}





module.exports = {
    listarEmpresa,
    listarAdmin,
    deletarAdmin,
    revogarAdmin,
    cadastrarAdmin,
    updateCnpjAndTel,
    deleteEmpresa

};