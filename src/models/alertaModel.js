const database = require("../database/config");

function paramsRam(idEmpresa, warning, danger) {
    const instrucao = `
        MERGE INTO parametrosDeAlerta AS target
        USING (SELECT '${idEmpresa}' AS idEmpresa, '${warning}' AS ramWarning, '${danger}' AS ramDanger) AS source
        ON target.idEmpresa = source.idEmpresa
        WHEN MATCHED THEN
            UPDATE SET ramWarning = source.ramWarning, ramDanger = source.ramDanger
        WHEN NOT MATCHED THEN
            INSERT (idEmpresa, ramWarning, ramDanger)
            VALUES (source.idEmpresa, source.ramWarning, source.ramDanger);`;

    return database.executar(instrucao).then(() => {
        console.log(instrucao);
    });
}


function paramsProcessador(idEmpresa, warning, danger) {
    const instrucao = `
        MERGE INTO parametrosDeAlerta AS target
        USING (SELECT '${idEmpresa}' AS idEmpresa, '${warning}' AS processadorWarning, '${danger}' AS processadorDanger) AS source
        ON target.idEmpresa = source.idEmpresa
        WHEN MATCHED THEN
            UPDATE SET processadorWarning = source.processadorWarning, processadorDanger = source.processadorDanger
        WHEN NOT MATCHED THEN
            INSERT (idEmpresa, processadorWarning, processadorDanger)
            VALUES (source.idEmpresa, source.processadorWarning, source.processadorDanger);`;

    return database.executar(instrucao).then(() => {
        console.log(instrucao);
    });
}


function paramsRede(idEmpresa, warning, danger) {
    const instrucao = `
        MERGE INTO parametrosDeAlerta AS target
        USING (SELECT '${idEmpresa}' AS idEmpresa, '${warning}' AS internetWarning, '${danger}' AS internetDanger) AS source
        ON target.idEmpresa = source.idEmpresa
        WHEN MATCHED THEN
            UPDATE SET internetWarning = source.internetWarning, internetDanger = source.internetDanger
        WHEN NOT MATCHED THEN
            INSERT (idEmpresa, internetWarning, internetDanger)
            VALUES (source.idEmpresa, source.internetWarning, source.internetDanger);`;

    return database.executar(instrucao).then(() => {
        console.log(instrucao);
    });
}


function paramsDisco(idEmpresa, warning, danger) {
    const instrucao = `
        MERGE INTO parametrosDeAlerta AS target
        USING (SELECT '${idEmpresa}' AS idEmpresa, '${warning}' AS discoWarning, '${danger}' AS discoDanger) AS source
        ON target.idEmpresa = source.idEmpresa
        WHEN MATCHED THEN
            UPDATE SET discoWarning = source.discoWarning, discoDanger = source.discoDanger
        WHEN NOT MATCHED THEN
            INSERT (idEmpresa, discoWarning, discoDanger)
            VALUES (source.idEmpresa, source.discoWarning, source.discoDanger);`;

    return database.executar(instrucao).then(() => {
        console.log(instrucao);
    });
}


function getAllparams(idEmpresa) {
    const instrucao = `SELECT * FROM parametrosDeAlerta WHERE idEmpresa = '${idEmpresa}'`;
    return database.executar(instrucao);
}

function deleteProcessador(idEmpresa) {
    const instrucao = `UPDATE parametrosDeAlerta SET processadorWarning = NULL, processadorDanger = NULL WHERE idEmpresa = '${idEmpresa}'`;
    return database.executar(instrucao);
}

function deleteRam(idEmpresa) {
    const instrucao = `UPDATE parametrosDeAlerta SET RamWarning = NULL, RamDanger = NULL WHERE idEmpresa = '${idEmpresa}'`;
    return database.executar(instrucao);
}

function deleteDisco(idEmpresa) {
    const instrucao = `UPDATE parametrosDeAlerta SET discoWarning = NULL, discoDanger = NULL WHERE idEmpresa = '${idEmpresa}'`;
    return database.executar(instrucao);
}


function deleteRede(idEmpresa){
    const instrucao = `UPDATE parametrosDeAlerta SET internetWarning = NULL, internetDanger = NULL WHERE idEmpresa = '${idEmpresa}'`;
    return database.executar(instrucao);
}

module.exports = {
    paramsRam,
    paramsRede,
    paramsProcessador,
    paramsDisco,
    getAllparams,
    deleteProcessador,
    deleteRam,
    deleteDisco,
    deleteRede,
};
