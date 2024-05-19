var database = require("../database/config")

function findMachineId(fkEmpresa,fkUsuario) {
    
    
    var instrucao = `SELECT idComputador from ComputadorEspec WHERE fkEmpresa = '${fkEmpresa}' and fkUsuario = '${fkUsuario}'; `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function idMachine(idMachine){
    var instrucao = `Select * from Monitoramento WHERE fkComputador = '${idMachine};'`
    return database.executar(instrucao);
}


module.exports = {
    findMachineId,
    idMachine
    
};