import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

const app = express();

app.set('port', process.env.PORT || 4000);

app.listen(app.get('port'),()=>{
    console.log('estoy en el puerto '+ app.get('port'));
})

//midlewares
app.use(morgan('dev'));
app.use(cors());
//permite recibir objetos en formato json
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//mostrar una pagina por defecto
console.log(path.join(__dirname, '../public'))

// rutas
app.get('/', (req, res) => {
     res.send('hola desde el servidor backend')  
})
app.delete('/borrardatos', (req, res) => {
     res.send('aqui vamos a borrar')  
})

