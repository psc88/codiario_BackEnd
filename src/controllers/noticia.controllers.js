const noticiaCtrl = {};

// logica para obtener la lista de noticias
noticiaCtrl.listarNoticias = (req, res) => {
        res.send('aqui listo las noticias')
    }

noticiaCtrl.borrarProducto = (req, res) => {
    res.send('aqui borro las noticias')
}

noticiaCtrl.crearNoticia = (req, res) => {
    console.log(req);
    console.log(req.body);
    res.send('aqui creamos una noticia')
}
export default noticiaCtrl