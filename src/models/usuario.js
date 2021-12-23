import mongoose, {Schema} from 'mongoose';

const usuarioSchema = new Schema({
    nombre:{
        type: String,
        required:true,
        maxlength:30,
    },
    apellido:{
        type: String,
        required:true,
        maxlength:30,
    },
    email:{
        type: String,
        required:true,
        maxlength:50,
        unique: true
    },
    pass:{
        type: String,
        required:true,
        maxlength:16,
        minlength:8
    }
})

const Usuario = mongoose.model('usuario', usuarioSchema)

export default Usuario;