import mongoose from 'mongoose';

//cadena de conexion a la base de datos
const url = 'mongodb://localhost:27017/codiario';

mongoose.connect(url);

const connetion = mongoose.connection;

connetion.once('open',()=>{
    console.log('DB Conectada')
});