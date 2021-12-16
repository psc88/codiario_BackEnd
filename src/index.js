import express from 'express';

const app = express();

app.set('port', process.env.PORT || 4000);

app.listen(app.get('port'),()=>{
    console.log('estoy en el puerto '+ app.get('port'));
})

app.get('/', (req, res) => {
     res.send('hola desde el servidor backend')  
})

app.delete('/borrardatos', (req, res) => {
     res.send('aqui vamos a borrar')  
})

