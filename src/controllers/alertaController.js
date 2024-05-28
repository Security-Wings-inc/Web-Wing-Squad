var alertaModel = require("../models/alertaModel");



function paramsRam(req, res) {
    var idEmpresa = req.params.idEmpresaServer;
    var ok = req.body.okServer;
    var warnig = req.body.warnigServer;
    var danger = req.body.dangerServer

    alertaModel.paramsRam(ok, warnig, danger, idEmpresa)
        .then((resultado) => {
            if (resultado.length > 0) {
                res.status(200).json(resultado)
            }
        }).catch((erro) => {
            console.log(erro);
        })

}

function paramsProcessador(req, res) {
    var idEmpresa = req.params.idEmpresaServer;
    var ok = req.body.okServer;
    var warnig = req.body.warnigServer;
    var danger = req.body.dangerServer

    alertaModel.paramsProcessador(ok, warnig, danger, idEmpresa)
        .then((resultado) => {
            if (resultado.length > 0) {
                res.status(200).json(resultado)
            }
        }).catch((erro) => {
            console.log(erro);
        })
}


function paramsDisco(req, res) {
    var idEmpresa = req.params.idEmpresaServer;
    var ok = req.body.okServer;
    var warnig = req.body.warnigServer;
    var danger = req.body.dangerServer

    alertaModel.paramsDisco(ok, warnig, danger, idEmpresa)
        .then((resultado) => {
            if (resultado.length > 0) {
                res.status(200).json(resultado)
            }
        }).catch((erro) => {
            console.log(erro);
        })

}


function paramsRede(req, res) {
    var idEmpresa = req.params.idEmpresaServer;
    var ok = req.body.okServer;
    var warnig = req.body.warnigServer;
    var danger = req.body.dangerServer

    alertaModel.paramsRede(ok, warnig, danger, idEmpresa)
        .then((resultado) => {
            if (resultado.length > 0) {
                res.status(200).json(resultado)
            }
        }).catch((erro) => {
            console.log(erro)
        })
}


function getRam(req, res) {
    var idEmpresa = req.params.idEmpresaServer;

    alertaModel.getRam(idEmpresa)
        .then((resultado) => {
            if (resultado.length == 0) {
                res.status(201).json(resultado);
            } else if (resultado.length > 0) {
                res.status(201).json(resultado)
            }
        }).catch((erro)=>{
            console.log(erro);
        })
}

function getProcessador(req, res) {
    var idEmpresa = req.params.idEmpresaServer;

    alertaModel.getProcessador(idEmpresa)
        .then((resultado) => {
            if (resultado.length == 0) {
                res.status(200).json(resultado);
            } else if (resultado.length > 0) {
                res.status(201).json(resultado);
            }
        }).catch((erro)=>{
            console.log(erro)
        })
}

function getDisco(req, res) {
    var idEmpresa = req.params.idEmpresaServer;

    alertaModel.getDisco(idEmpresa)
        .then((resultado) => {
            if (resultado.length == 0) {
                res.status(200).json(resultado);
            } else if (resultado.length > 0) {
                res.status(201).json(resultado);
            }
        }).catch((eroo)=>{
            console.log(erro)
        })
}

function getRede(req,res){
    var idEmpresa =  req.params.idEmpresaServer;

    alertaModel.getRede(idEmpresa)
    .then((resposta)=>{
        if(resposta.length == 0){
            res.status(200).json(resposta)
        }else if(resultado.length >0){
            res.status(201).json(resposta)
        }else{
            res.status(204).json(resposta);
        }
    }).catch((erro)=>{
        console.log(erro)
    })

}









module.exports = {
    paramsRam,
    paramsProcessador,
    paramsDisco,
    paramsRede,
    getRam,
    getProcessador,
    getDisco,
    getRede

}