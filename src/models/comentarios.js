import mongoose, {Schema} from 'mongoose';

const comentarioSchema = new Schema({
    nombreComentador:{
        type: String,
        required:true,
        maxlength:15,
        minlength:2,
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