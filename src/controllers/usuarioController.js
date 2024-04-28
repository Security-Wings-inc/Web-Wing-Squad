var usuarioModel = require("../models/usuarioModel");
var aquarioModel = require("../models/aquarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;


    usuarioModel.autenticar(email, senha)
        .then(
            function (resultadoAutenticar) {
                console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                if (resultadoAutenticar.length >= 1) {
                    console.log(resultadoAutenticar);


                    res.json({
                        id: resultadoAutenticar[0].id,
                        email: resultadoAutenticar[0].email,
                        nome: resultadoAutenticar[0].nome,
                        senha: resultadoAutenticar[0].senha,
                        isAdmin : resultadoAutenticar[0].isAdmin,
                        fkEmpresa : resultadoAutenticar[0].fkEmpresa,

                    });

                } else if (resultadoAutenticar.length == 0) {
                    res.status(403).send("deu ruim, email e senhas não cadastrados")
                }

            });

}


function listarFunc(req, res) {

    var idEmpresa = req.body.idEmpresa



    usuarioModel.listarFunc(idUser)
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


function cadastrarFunc(req, res) {

    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var id = req.body.idServer


    usuarioModel.cadastrarFunc(nome, email, senha, id)
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

function deletarFunc(req, res) {

    var id = req.params.idVar;



    usuarioModel.deletarFunc(id)
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






module.exports = {
    autenticar,
    cadastrarFunc,
    listarFunc,
    deletarFunc

}