var express = require("express");
var router = express.Router();

var empresaController = require("../controllers/metricaController");

router.post("/cadastrar", function (req, res) {
    empresaController.cadastrar(req, res);
})




module.exports = router;