var alertaModel = require("../models/alertaModel");



function paramsRam(req, res) {
    var idEmpresa = req.params.idEmpresa;
    var warning = req.body.warningServer;
    var danger = req.body.dangerServer


    alertaModel.paramsRam(idEmpresa, warning, danger)
        .then((resultado) => {
            res.status(200).json(resultado)
        }).catch((erro) => {
            console.log(erro, "erro ao settar os parametros");
        })

}

function paramsProcessador(req, res) {
    var idEmpresa = req.params.idEmpresa;
    var warning = req.body.warningServer;
    var danger = req.body.dangerServer

    alertaModel.paramsProcessador(idEmpresa, warning, danger)
        .then((resultado) => {
            res.status(200).json(resultado)
        }).catch((erro) => {
            console.log(erro, "erro ao settar os parametros");
        })
}


function paramsDisco(req, res) {
    var idEmpresa = req.params.idEmpresa;
    var warning = req.body.warningServer;
    var danger = req.body.dangerServer

    alertaModel.paramsDisco(idEmpresa, warning, danger)
        .then((resultado) => {
            res.status(200).json(resultado)

        }).catch((erro) => {
            console.log(erro, "erro ao settar os parametros");
        })

}


function paramsRede(req, res) {
    var idEmpresa = req.params.idEmpresa;
    var warning = req.body.warningServer;
    var danger = req.body.dangerServer

    alertaModel.paramsRede(idEmpresa, warning, danger)
        .then((resultado) => {
            res.status(200).json(resultado)
        }).catch((erro) => {
            console.log(erro, "erro ao settar os parametros")
        })
}


function getAllparams(req, res) {
    var IdEmpresa = req.params.idEmpresa;

    alertaModel.getAllparams(IdEmpresa)
        .then((resposta) => {
            if (resposta.length > 0) {
                res.status(200).json(resposta)
            } else {
                res.status(204).json(resposta)
            }
        }).catch((erro) => {
            console.log(erro ,"erro ao pegar todos parametros");
        })

}

function deleteRam(req, res) {

    var idEmpresa = req.params.idEmpresa
    alertaModel.deleteRam(idEmpresa)
        .then((resposta) => {
            res.status(200).json(resposta)
        }).catch((erro) => {
            console.log(erro, "ao deletar parametro")
        })

}

function deleteProcessador(req, res) {

    var idEmpresa = req.params.idEmpresa
    alertaModel.deleteProcessador(idEmpresa)
        .then((resposta) => {
            res.status(200).json(resposta)
        }).catch((erro) => {
            console.log(erro, "ao deletar parametro")
        })

}


function deleteRede(req, res) {

    var idEmpresa = req.params.idEmpresa
    alertaModel.deleteRede(idEmpresa)
        .then((resposta) => {
            res.status(200).json(resposta)
        }).catch((erro) => {
            console.log(erro, "ao deletar parametro")
        })

}



function deleteDisco(req, res) {

    var idEmpresa = req.params.idEmpresa
    alertaModel.deleteDisco(idEmpresa)
        .then((resposta) => {
            res.status(200).json(resposta)
        }).catch((erro) => {
            console.log(erro, "ao deletar parametro")
        })

}




module.exports = {
    paramsRam,
    paramsProcessador,
    paramsDisco,
    paramsRede,
    getAllparams,
    deleteRam,
    deleteProcessador,
    deleteRede,
    deleteDisco,
   


}