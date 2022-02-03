const http = require('http')

const server = http.createServer((request, response) => {
    console.log('method:  ', request.method)
    console.log('url: ',request.url)
    console.log('headers: ', request.headers)

    // GET /hola -> hola mundo
    // POST /hola -> aqui puedes crear un recurso
    // DELETe /hola -> aqui puedes borrar un recurso
    // GET /adios -> adios :c

    // Tambien puedes crear una constante en donde guardes el method y url --- const {method, url} = request
    if(request.method === 'GET' && request.url === '/hola'){
        response.write('hola mundo')
    }if(request.method === 'POST' && request.url === '/hola'){
        response.write('aqui puedes crear un recurso')
    }if(request.method === 'DELETE' && request.url === '/hola'){
        response.write('aqui puedes borrar un recurso')
    }if(request.method === 'GET' && request.url === '/hola'){
        response.write('Adios')
    }

    /**
     * OTRA SOLUCION SIN "IF"
     * 
     */
    // const respuestas = {
    //     'GET': {
    //         '/hola': 'hola mundo',
    //         '/adios': 'adios'
    //     }
    //     'POST': {
    //         '/hola': 'aqui puedes crear'
    //     }
    //     'DELETE': {
    //         '/hola': 'aqui puedes borrar'
    //     }
    // }

    response.end()
})



server.listen(8080, () => {
    console.log('Server Listening')
})



    
//metodo a una ruta tal para hacer una accion 
// GET /koders -> lista de koders
// POST /koders -> crear un koders
// DELETE /koders/123(iD) -> eliminar un koders