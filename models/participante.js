const mongoose = require('mongoose')

const participantesSchema = new mongoose.Schema({
    nombre: {
        type: String,
        require: true
    },
    correo: {
        type: String,
        require: true
    },
    telefono: {
        type: Number,
        require: true
    },
    interes: {
        type: String,
        require: true
    },
    foto: {
        type:String//nombre del archivo     
    },
    fotoloc: {
        type:String,//locacion donde el archivo se guarda
        require: true
    },
    creadoen: {
        type: Date,
        default: Date.now
    }
})

const Participante = mongoose.model('participante', participantesSchema)

module.exports = Participante