const express = require ('express')

// la contsnte no tiene que ser el mismo nombre de la herramienta pero es mas entendible

const server = express () 

server.get('/hola', (request, response) => {
    response.write('aqui puedes crear un recurso')
    response.end()
})

server.post('/hola', (request, response) => {
    response.write('aqui puedes crear un recurso')
    response.end()
})

server.delete('/adios', (request, response) => {
    response.write('aqui puedes borrar un recurso')
    response.end()
})

server.get('/hola', (request, response) => {
    response.write('adios')
    response.end()
})

server.listen(8080, () => {
    console.log('server listening in port 8080');
})

// GET /hola -> hola mundo
    // POST /hola -> aqui puedes crear un recurso
    // DELETe /hola -> aqui puedes borrar un recurso
    // GET /adios -> adios :c