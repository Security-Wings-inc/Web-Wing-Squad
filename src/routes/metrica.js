var express = require("express");
var router = express.Router();

var empresaController = require("../controllers/metricaController");

router.post("/findMachineId/:idEmpresa/:idUser", function (req, res) {
    empresaController.findMachineId(req, res);
})

router.post("/getMachineData/:idMachine", function (req, res) {
    empresaController.getMachineData(req, res);
})





module.exports = router; 