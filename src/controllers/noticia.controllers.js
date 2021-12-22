import Noticia from "../models/noticia";

const noticiaCtrl = {};

// logica para obtener la lista de noticias
noticiaCtrl.listarNoticias = (req, res) => {
    res.send('aqui listo las noticias')
}

noticiaCtrl.borrarProducto = (req, res) => {
    res.send('aqui borro las noticias')
}

noticiaCtrl.crearNoticia = async(req, res) => {
    try {
        //validar 

        //crear un nuevo objeto para guardar en la DB
        const noticiaNueva = new Noticia({
            categoria: req.body.categoria,
            titulo: req.body.titulo,
            descripcion: req.body.descripcion,
            linkImagen: req.body.linkImagen,
        });
        // guardar producto en DB
        await noticiaNueva.save()
        // enviar la respuesta
        res.status(201).json({
            mensaje: 'Producto agregado correctamente'
        })
    } catch (error) {
        console.log(error);
        // enviar codigo de error
        res.status(400).json({
            mensaje: 'Error al agregar un producto'
        })
    }
}
export default noticiaCtrl