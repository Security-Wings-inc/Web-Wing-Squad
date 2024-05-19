var metricaModel = require("../models/metricaModel");

function findMachineId(req, res) {
    var IdEmpresa = req.params.idEmpresa;
    var idUser = req.params.idUser;
   

    metricaModel.findMachineId(IdEmpresa,idUser).then(function (resultado) {
        if (resultado.length > 0) {
         res.json({
            idComputador: resultado[0].idComputador
         })
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
           
    }




module.exports = {
    
    findMachineId,
    
}