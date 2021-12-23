import mongoose from 'mongoose';

//cadena de conexion a la base de datos
//** */ Base de datos de Prueba local **//
// const url = 'mongodb://localhost:27017/codiario';
const url = 'mongodb+srv://codiario17i:codiario17i2021@cluster0.wy9ht.mongodb.net/codiario';

mongoose.connect(url);

const connetion = mongoose.connection;

connetion.once('open',()=>{
    console.log('DB Conectada')
}); 