var express = require("express")
var router = express.Router()

var alertaController = require("../controllers/alertaController")

router.post("/paramsRam/:idEmpresa" , (req,res)=>{
    alertaController.paramsRam(req,res);
})

router.post("/paramsProcessador/:idEmpresa" , (req,res)=>{
    alertaController.paramsProcessador(req,res);
})

router.post("/paramsDisco/:idEmpresa" , (req,res) =>{
    alertaController.paramsDisco(req,res);
})

router.post("/paramsRede/:idEmpresa", (req,res)=>{
    alertaController.paramsRede(req,res);
})


router.get("/getRam/:idEmpresa" , (req,res) =>{
    alertaController.getRam(req,res);
})


router.get("/getProcessador/:idEmpresa" , (req,res)=>{
    alertaController.getProcessador(req,res);
})

router.get("/getDisco/:idEmpresa", (req,res)=>{
    alertaController.getDisco(req,res);
})

router.get("/getRede/:idEmpresa" , (req,res)=>{
    alertaController.getRede(req,res);
})





module.exports = router;