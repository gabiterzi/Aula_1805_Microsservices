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

//403
const tokenExemplos = {
    '3' : {role: 'admin'},
    'tokenUser' : {role: 'user'},
    'tokenConvidado' : {role: 'convidado'}
}

router.get('/admin', (req, res) => {
    // Obtendo o token do header Authorization
    const token = req.headers['authorization']

    // Verificando se o token foi enviado
    if (!token) {
        return res.status(401).send('Unauthorized: token não fornecido')
    }

    const user = tokenExemplos[token]
    if (!user) {
        return res.status(401).send('Unauthorized: token inválido')
    }

    // Verificando se o usuário tem acesso ao recurso administrativo
    if (user.role != 'admin') {
        return res.status(403).send('Forbidden: você não tem permissão para acessar esta área')
    }

    res.send('Welcome to the admin area!')
})

// Exemplo bad request 400
router.post('/submit', (req, res) => {
    const { username, email } = req.body

    // Verificando se os campos obrigatórios estão presentes
    if (!username || !email) {
        return res.status(400).send('Favor preencher todos os campos: username e email.')
    }
    // Simulando verificação de email válido
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
        return res.status(400).send('Bad Request: Invalid email format')
    }
    // status 202 created
    // Se tudo estiver certo, continuar com o processamento
    res.send('Data submitted succesfully!').status(202)
})


module.exports = router;