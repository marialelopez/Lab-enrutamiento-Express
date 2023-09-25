const express = require('express')
const app = express()
const medium = require('./medium-clients') 
const premium = require('./premium-clients')


app.get("/", function (req, res) {
  res.send("Bienvenido a la api de ADA Cars");
});

app.use('/premium-clients',premium)
app.use('/medium-clients',medium)

module.exports = app;
