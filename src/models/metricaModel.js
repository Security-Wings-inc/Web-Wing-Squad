var database = require("../database/config")

const sql = require('mssql');

async function findMachineId(fkEmpresa, fkUsuario) {
    const instrucao = `SELECT idComputador FROM ComputadorEspec WHERE fkEmpresa = '${fkEmpresa}' AND fkUsuario = '${fkUsuario}';`;
    
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

async function getMachineData(idMachine) {
    const instrucao = `SELECT * FROM Monitoramento WHERE fkComputador = '${idMachine}' ORDER BY idMonitoramento;`;
    return database.executar(instrucao);
}

async function getAllMachinesByIdEmpresa(idEmpresa) {
    const instrucao = `SELECT CE.idComputador, CE.processadorModelo, CE.processadorNucleosFisicos, CE.processadorNucleosLogicos,
       CE.processadorFrequencia, CE.discoTotal, CE.ramTotal,
       M.processadorUso, M.ramUso, M.discoUso, M.bytesEnviados, M.dataCaptura,
       PA.ramWarning, PA.ramDanger, PA.processadorWarning, PA.processadorDanger,
       PA.internetWarning, PA.internetDanger, PA.discoWarning, PA.discoDanger,
       U.nome AS nomeUsuario
FROM ComputadorESpec CE
JOIN (
    SELECT fkComputador, MAX(dataCaptura) AS ultimaCaptura
    FROM Monitoramento
    GROUP BY fkComputador
) ultimaMonitoramento ON CE.idComputador = ultimaMonitoramento.fkComputador
JOIN Monitoramento M ON ultimaMonitoramento.fkComputador = M.fkComputador 
                      AND ultimaMonitoramento.ultimaCaptura = M.dataCaptura
LEFT JOIN parametrosDeAlerta PA ON CE.fkEmpresa = PA.idEmpresa
JOIN usuario U ON CE.fkUsuario = U.idUsuario
WHERE CE.fkEmpresa = '${idEmpresa}';`;

    return database.executar(instrucao);
}

module.exports = {
    findMachineId,
    getMachineData,
    getAllMachinesByIdEmpresa
};
