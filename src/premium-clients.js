const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.send("Ruta clientes premium");
});

router.get("/list/:order", function (req, res) {
  const order = req.params.order || "asc"; 
  if (order === "asc") {
    res.send("Listados en orden ascendente");
  } else if (order === "desc") {
    res.send("Listados en orden descendente");
  } else {
    res.send(`Listados en orden aleatorio`);
  }
});


module.exports = router;
