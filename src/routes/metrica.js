var express = require("express");
var router = express.Router();

var empresaController = require("../controllers/metricaController");

router.post("/findMachineId/:idEmpresa/:idUser", function (req, res) {
    empresaController.findMachineId(req, res);
})




module.exports = router; 