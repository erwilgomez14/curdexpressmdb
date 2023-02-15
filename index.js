const express = require('express')
const app = express()
const ejs = require('ejs')
const multer = require('multer')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const path = require('path')
const PORT = 8000

app.use(express.urlencoded({extended: true}))
app.use(express.json())

//mongoose
const Participante = require('./models/participante')

moongose.connect('mongodb+srv://cluster0.sfuxyou.mongodb.net/myFirstDatabase',
{useNewUrlParser: true, useUnifiedTopology: true}).then(()=>console.log("conectado a la base de datos")).catch(err=>console.log(err))

app.post('/participante', (req, res)=> {
    const nombre = req.body.nombre
    const correo = req.body.correo
    const telefono = req.body.telefono  // hola
    const interes = req.body.interes

    const nuevoParticipante = new Participante({
        nombre, correo, telefono, interes
    })
    nuevoParticipante.save((err, data)=>{
        if(err){
            console.log(err)
        }
        res.redirect('/')
    })
    console.log(nuevoParticipante)
}
)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')               
app.use('/static', express.static('static'))

app.get('/', (req, res)=>(
    res.render('index')
))

app.get('/participantes', (req, res)=>(
    res.render('participantes')
))

app.get('/edit', (req, res)=>(
    res.render('edit')
))


app.listen(8000, ()=> console.log(`server corriendo en ${PORT}`))