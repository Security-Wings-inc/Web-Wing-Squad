var managerModel = require("../models/managerModel");
// var aquarioModel = require("../models/aquarioModel");



function listarEmpresas(req, res) {

    managerModel.listarEmpresas()
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



function editarFunc(req, res) {
    var id = req.body.idUsuarioServer;
    var novoEmail = req.body.novoEmailServer;
    var novaSenha = req.body.novaSenhaServer;

    managerModel.editarFunc(id, novoEmail, novaSenha)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                // console.log(erro);
                console.log("tomanocu")
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );


}


function cadastrarFunc(req, res) {

    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var idEmpresa = req.body.idEmpresaServer;
    var isAdmin = req.body.isAdminServer;
    var cpf = req.body.cpfServer;

    managerModel.cadastrarFunc(nome, email, senha, idEmpresa, isAdmin, cpf)
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

function deletarManager(req, res) {

    var id = req.params.idVar;

    managerModel.deletarManager(id)
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

// function findEmpresaById(req, res) {

//     var idEmpresaVar = req.body.idEmpresaServer;

//     managerModel.findEmpresaById(idEmpresaVar)
//         .then(
//             function (resultadoAutenticar) {

//                 if (resultadoAutenticar.length >= 1) {
//                     console.log(resultadoAutenticar);
//                     res.json({
//                         nomeEmpresa: resultadoAutenticar[0].nome
//                     });

//                 }
//             }
//         ).catch(
//             function (erro) {
//                 console.log(erro);
//                 console.log(
//                     "\nHouve um erro ao realizar o cadastro! Erro: ",
//                     erro.sqlMessage
//                 );
//             }
//         );
// }






module.exports = {
    // cadastrarFunc,
    listarEmpresas,
    // deletarManager,
    // editarFunc,
    // findEmpresaById

}