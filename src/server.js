//Importando dependencia 
const express = require('express');

//IMportando path para ajuste de caminho
const path = require('path')
//Iniciando  o express
const server = express();

const pages = require('./pages.js')

//utlizadno body do req
server.use(express.urlencoded({extended:true}))

//Utilizando arquivos estáticos
server.use(express.static('public'))

//Configurando template engine
server.set('views', path.join(__dirname, 'views'))
server.set('view engine', 'hbs')

//criando rotas da aplicação
server.get('/',pages.index)
server.get('/orphanage',pages.orphanage)
server.get('/orphanages',pages.orphanages)
server.get('/create-orphanage',pages.createOrphanage)
server.post('/save-orphanage', pages.saveOrphanage)


//Ligando servidor
server.listen(5500)