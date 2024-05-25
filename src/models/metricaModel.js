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
    var instrucao = `SELECT * FROM ComputadorESpec where fkEmpresa = '${idEmpresa}';`
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