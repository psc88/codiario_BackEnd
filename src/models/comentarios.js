import mongoose, {Schema} from 'mongoose';

const comentarioSchema = new Schema({
    nombre:{
        type: String,
        required:true,
        maxlength:15,
        minlength:3,
    },
    comentario:{
        type: String,
        required:true,
        maxlength:500,
        minlength:10
    }
})

const Comentario = mongoose.model('comentario', comentarioSchema)

export default Comentario;