var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/ultimas/:id_totem", function (req, res) {
  dashboardController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:id_totem", function (req, res) {
  dashboardController.buscarMedidasEmTempoReal(req, res);
})


module.exports = router;
