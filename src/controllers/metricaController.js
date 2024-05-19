var metricaModel = require("../models/metricaModel");

function findMachineByIdEmpresaAndIdUser(req, res) {
    var IdEmpresa = req.params.idEmpresaServer;
    var idUser = req.params.idUserServer;
   

    metricaModel.findMachineByIdEmpresaAndIdUser(IdEmpresa,idUser).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
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
    
    findMachineByIdEmpresaAndIdUser,
    
}