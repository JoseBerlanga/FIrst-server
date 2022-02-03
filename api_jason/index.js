
const { response, request } = require('express')
const express = require('express')
const fs = require('fs/promises')

const app = express()
app.use(express.json())  //sin esta linea no puedo leer el body

app.get ('/Mentors', async (request, response) => {
    const data = await fs.readFile('kodemia.json', 'utf8')
    const mt = JSON.parse(data)
    const foundMentor = mt.mentors

    response.json(foundMentor)
})

app.post ('/Mentors', async (request, response) => {
    const data = await fs.readFile('kodemia.json', 'utf8')
    const db = JSON.parse(data)
    const index = db.mentors.length + 1
    const newMentor = {
        id: index,
        ...request.body
    }
    db.mentors.push(newMentor)
    const newArray = JSON.stringify(db, '\n', 2)
    await fs.writeFile('kodemia.json', newArray, 'utf8')

    response.json(db.mentors)
})

app.patch ('/Mentors/:id', async (request, response) => {
    const data = await fs.readFile('kodemia.json', 'utf8')
    const id = parseInt(request.params.id)
    const db = JSON.parse(data)
    const foundMentorIndex = db.mentors.findIndex((mentor) => {
        return id == mentor.id 
    })
    db.mentors[foundMentorIndex] = {
        ...db.mentors[foundMentorIndex],
        ...request.body
    }
    const modifiedMentor = JSON.stringify(db, '\n', 2)
    await fs.writeFile('kodemia.json', modifiedMentor, 'utf8')

    response.json(db.mentors[foundMentorIndex])

})

app.delete ('/Mentors/:id', async (request, response) => {
    const data = await fs.readFile('kodemia.json', 'utf8')
    const id = parseInt(request.params.id)
    const db = JSON.parse(data)

    const newMentor = db.mentor.filter((mentor) => {
        return mentor.id != id
    })
    db.mentors = newMentor

    const modifiedMentor = JSON.stringify(db, '\n', 2)
    await fs.writeFile('kodemia.json', modifiedMentor, 'utf8')

    response.json(db.mentors[newMentor]

})

app.listen(8080, () => {
    console.log('Server is listening')
})




























// app.get('/koders', async (request, response) => {
//     const data = await fs.readFile('Kodemia.json', 'utf8')
//     const db = JSON.parse(data)
//     let kodersFound = db.koders

//     if(request.query.max_age) {
//         kodersFound.filter((koder) => {
//             return koder.age <= parseInt(request.query.max_age)
//         })
//     }

//     response.json(kodersFound)
// })


// // Crear un koder

// app.post('/koders', async (request, response) =>{

//     const data = await fs.readFile('Kodemia.json', 'utf8')
//     const db = JSON.parse(data)

//     const newKoderId = db.koders.lenght + 1
//     const newKoderData = {
//         id: newKoderId,
//         ... request.body
//     }

//     db.koders.push(newKoderData)

//     const dbAssString = JSON.stringify(db, '\n', 2)
//     await fs.writeFile('kodemia.json', dbAssString, 'utf8' )

//     response.json(db.koders)
// })


// //Metodo DELETE
// app.delete('/koders/:id', async (request, response) => {
//     const id = parseInt(request.params.id)
//     const data = await fs.readFile('kodemia.json', 'utf8')
//     const db = JSON.parse(data)

//     const newKodersArray = db.koders.filter((koder) => id != koder.id)
//     db.koders = newKodersArray
    
// const dbAssString = JSON.stringify(db, '\n', 2)
// await fs.writeFile('kodemia,json', dbAssString, 'utf8')

// response.json(db.koders)
// })

// app.patch('/koders/:id', async (request, response) => {
//     const id = parseInt(request.params.id)

//     if (isNaN(id)) {
//         response
//         .status(400)
//         .json( {
//             message: 'id must be a number'
//         })
//         return
//     }

//     const data = await fs.readFile('kodemia.json', 'utf8')
//     const db = JSON.parse(data)

//     const koderFoundIndex = db.koders.findIndex((koder) => id === koder.id)
    
//     if (koderFoundIndex < 0) {
//         response.status(404)
//         response.json({
//             message: 'koder not found'
//         })
//         return
//     }

//     db.koders[koderFoundIndex] = {
//         ...db.koders[koderFoundIndex],
//         ...request.body
//     }

//     const dbAssString = JSON.stringify(db, '\n', 2)
//     await fs.writeFile('kodemia.json', dbAssString, 'utf8')

//     response.json(db.koders[koderFoundIndex])
// })


// MENTORES




// Hacer un endpoint que al llamarlo nos regrese el contenido de un archivo text.txt
// GET /file

// Para obtener los atributos por koder
// Rutas dinamicas: /nombreruta/:name(va a ser cambiante pero va a seguir ejecutando esa ruta)

