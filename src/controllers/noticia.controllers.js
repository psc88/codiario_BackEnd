const noticiaCtrl = {};

// logica para obtener la lista de noticias
noticiaCtrl.listarNoticias = (req, res) => {
        res.send('hola desde el servidor backend')
    }

noticiaCtrl.borrarProducto = (req, res) => {
    res.send('aqui borro los productos')
}

export default noticiaCtrl