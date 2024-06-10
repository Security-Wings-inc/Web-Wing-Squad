var managerModel = require("../models/managerModel");

function listarEmpresa(req, res) {

    managerModel.listarEmpresa()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );


}

function listarAdmin(req, res) {

    var idEmpresa = req.body.idEmpresaServer;

    managerModel.listarAdmin(idEmpresa)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );


}



function cadastrarAdmin(req, res) {

    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var idEmpresa = req.body.idEmpresaServer;
    var isAdmin = req.body.isAdminServer;
    var cpf = req.body.cpfServer;

    managerModel.cadastrarAdmin(nome, email, senha, idEmpresa, isAdmin, cpf)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function deletarAdmin(req, res) {

    var idVar = req.params.idVar;

    managerModel.deletarAdmin(idVar)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
            }
        );
}


function revogarAdmin(req, res) {

    var idVar = req.params.idVar;

    managerModel.revogarAdmin(idVar)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
            }
        );
}


function updateCnpjAndTel(req, res) {
    var cnpj = req.body.cnpjServer;
    var tel = req.body.telServer;
    var idEmpresa = req.params.id;

    managerModel.updateCnpjAndTel(cnpj, tel, idEmpresa)
        .then((resposta) => {
            res.status(200).json(resposta)
        }).catch((erro) => {
            console.log("houve um erro ao atualizar os dados da empresa", erro)
        })


}


function deleteEmpresa(req, res) {
    var id = req.params.id;

    managerModel.deleteEmpresa(id)
        .then((resposta) => {
            res.status(200).json(resposta)
        }).catch((erro) => {
            console.log("Houve um erro ao excluir a empresa" , erro)
        })
}



module.exports = {
    listarEmpresa,
    listarAdmin,
    deletarAdmin,
    revogarAdmin,
    cadastrarAdmin,
    updateCnpjAndTel,
    deleteEmpresa,
}