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
// 401 Unauthorized
// precisa de um token para acessar essa rota - criando autenticação
router.get('/privada', (req, res) => {
    const token = req.headers['authorization'];

    if(!token || token !== 'minhaSenha'){
        return res.status(401).send('Sem autorização!')
    }

    res.send('Area acessada com sucesso!').status(200)
})

module.exports = router;