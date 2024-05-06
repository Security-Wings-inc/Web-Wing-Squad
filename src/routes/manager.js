var express = require("express");
var router = express.Router();

var managerController = require("../controllers/managerController");


router.post("/cadastrar", function (req, res) {
    managerController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    managerController.autenticar(req, res);
});

router.post("/cadastrarFunc", function (req, res) {
    managerController.cadastrarFunc(req, res);
});

router.post("/listarEmpresa", function (req, res) {
  managerController.listarEmpresas(req,res);
});

router.post("/findEmpresaById", function (req, res) {
    managerController.findEmpresaById(req, res);
});


router.delete("/deletarFunc/:idVar", function (req, res) {
    managerController.deletarFunc(req, res);
});

router.put("/editarFunc", function (req, res) {
    managerController.editarFunc(req, res);
});

module.exports = router;