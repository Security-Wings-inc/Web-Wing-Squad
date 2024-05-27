var database = require("../database/config")

function findMachineId(fkEmpresa,fkUsuario) {
    
    
    var instrucao = `SELECT idComputador from ComputadorEspec WHERE fkEmpresa = '${fkEmpresa}' and fkUsuario = '${fkUsuario}'; `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function getMachineData(idMachine){
    var instrucao = `SELECT * FROM Monitoramento WHERE fkComputador = '${idMachine}';`
    return database.executar(instrucao);
}

function getAllMachinesByIdEmpresa(idEmpresa){
    var instrucao = `SELECT CE.*, M.*
    FROM ComputadorESpec CE
    INNER JOIN (
        SELECT fkComputador, MAX(dataCaptura) AS ultimaCaptura
        FROM Monitoramento
        GROUP BY fkComputador
    ) ultimaMonitoramento ON CE.idComputador = ultimaMonitoramento.fkComputador
    INNER JOIN Monitoramento M ON ultimaMonitoramento.fkComputador = M.fkComputador 
                                AND ultimaMonitoramento.ultimaCaptura = M.dataCaptura
    WHERE CE.fkEmpresa = '${idEmpresa}';
    `
    return database.executar(instrucao);

}


function dataCompair(idMaquinas){
    var instrucao = `SELECT * FROM monitoramento where fkComputador = '${idMaquinas}' ORDER BY idMonitoramento DESC LIMIT 1;`
    return database.executar(instrucao);

}





module.exports = {
    findMachineId,
    getMachineData,
    getAllMachinesByIdEmpresa,
    dataCompair

    
};