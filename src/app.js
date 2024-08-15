// importando a biblioteca 
const express = require('express')
const app = express()
// express.json: configurar para receber json nos requests
app.use(express.json()) 
app.use(express.urlencoded({extended:true}))

module.exports = app
