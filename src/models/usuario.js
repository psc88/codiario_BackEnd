import mongoose, {Schema} from 'mongoose';
import bcryptjs from "bcryptjs";

const usuarioSchema = new Schema({
    nombreYApellido:{
        type: String,
        required:true,
        maxlength:30,
        minlength:5
    },
    edad:{
        type: Number,
        required:true,
        maxlength:2,
        minlength:1,
    },
    ciudad:{
        type: String,
        required: true,
        maxlength: 10,
        minlength: 2
    },
    email:{
        type: String,
        required:true,
        maxlength:50,
        unique: true
    },
    contraseña:{
        type: String,
        required:true,
        maxlength:16,
        minlength:8
    }
})

usuarioSchema.pre('save',function(next){
    bcryptjs.genSalt(10).then(salts => {
        bcryptjs.hash(this.contraseña,salts).then(hash => {
            this.contraseña = hash;
            next();
        }).catch(error => next(error));
    }).catch(error => next(error));
});

const Usuario = mongoose.model('usuario', usuarioSchema)

export default Usuario;