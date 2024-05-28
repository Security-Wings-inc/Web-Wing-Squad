var database = require("../database/config");


function paramsRam(idEmpresa, warning, danger) {
    var instrucao = `INSERT INTO parametrosDeAlerta (ramWarning , ramDanger,fkEmpresa) values ('${warning}' , '${danger}', '${idEmpresa}');`
    return database.executar(instrucao);

}


function paramsProcessador(idEmpresa, warning, danger) {
    var instrucao = `INSERT INTO parametrosDeAlerta (processadorWarning , processadorDanger,fkEmpresa) values ('${warning}' , '${danger}', '${idEmpresa}');`
    return database.executar(instrucao);

}

function paramsRede(idEmpresa, warning, danger,overFlow) {
    var instrucao = `INSERT INTO parametrosDeAlerta (internetWarning , internetDanger,internetOverFlow,fkEmpresa) values ('${warning}' , '${danger}','${overFlow}' ,'${idEmpresa}');`
    return database.executar(instrucao);

}

function paramsDisco(idEmpresa, warning, danger) {
    var instrucao = `INSERT INTO parametrosDeAlerta (discoWarning , discoDanger,fkEmpresa) values ('${warning}' , '${danger}', '${idEmpresa}');`
    return database.executar(instrucao);

}












module.exports = {
    paramsRam,
    paramsRede,
    paramsProcessador,
    paramsDisco

}