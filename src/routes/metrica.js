var express = require("express");
var router = express.Router();

var empresaController = require("../controllers/metricaController");

router.post("/findDataMachineById", function (req, res) {
    empresaController.findDataMachineById(req, res);
})




module.exports = router;