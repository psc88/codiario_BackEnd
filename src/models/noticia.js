import mongoose, {Schema} from 'mongoose';

const noticiaSchema = new Schema({
    categoria:{
        type: String,
        required:true,
        maxlength:15,
    },
    titulo:{
        type: String,
        required:true,
        maxlength:30,
    },
    descripcion:{
        type: String,
        required:true,
        maxlength:3000,
    },
    linkImagen:{
        type: String,
        required:true,
        maxlength:1000,
    }
})

const Noticia = mongoose.model('noticia', noticiaSchema)
export default Noticia;