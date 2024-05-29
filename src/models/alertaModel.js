const { rmSync } = require("fs");
var database = require("../database/config");

function paramsRam(idEmpresa, warning, danger) {
    const instrucao = `UPDATE parametrosDeAlerta SET ramWarning = '${warning}', ramDanger = '${danger}' WHERE idEmpresa = '${idEmpresa}'`;
    return database.executar(instrucao).then(() => {
        console.log(instrucao);
    });
}

function paramsProcessador(idEmpresa, warning, danger) {
    const instrucao = `insert into parametrosDeAlerta (processadorWarning, processadorDanger, idEmpresa) values ('${warning}', '${danger}', '${idEmpresa}')`;
    return database.executar(instrucao).then(() => {
        console.log(instrucao);
    });
}

function paramsRede(idEmpresa, warning, danger, overFlow) {
    const instrucao = `UPDATE parametrosDeAlerta SET internetWarning = '${warning}', internetDanger = '${danger}', internetOverFlow = '${overFlow}' WHERE idEmpresa = '${idEmpresa}'`;
    return database.executar(instrucao);
}

function paramsDisco(idEmpresa, warning, danger) {
    const instrucao = `UPDATE parametrosDeAlerta SET discoWarning = '${warning}', discoDanger = '${danger}' WHERE idEmpresa = '${idEmpresa}'`;
    return database.executar(instrucao);
}

function getAllparams(idEmpresa){
    var instrucao = `SELECT * from parametrosDeAlerta where idEmpresa = '${idEmpresa}';`
    return database.executar(instrucao)

}rmSync











module.exports = {
    paramsRam,
    paramsRede,
    paramsProcessador,
    paramsDisco,
    getAllparams

}