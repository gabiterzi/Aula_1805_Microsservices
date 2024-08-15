const express = require('express')
const router = new express.Router()
// ponto de acesso de get, retornar status 200 
// recuperar o que o usuário envia(req=request), pegar a resposta(res=response) 
router.get('/', (req, res, next) => {
    res.status(200).send(
        {
            "nome": "Gabriela Terzi"
        }
    )
})

module.exports = router;