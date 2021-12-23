import Noticia from "../models/noticia";

const noticiaCtrl = {};

// logica para obtener la lista de noticias
noticiaCtrl.listarNoticias = async(req, res) => {
    try{
        // crear un arreglo con todos las noticias
        const listaNoticias =  await Noticia.find();
        res.status(200).json(listaNoticias)
    }catch(error){
        console.log(error);
        res.status(404).json({
            mensaje: 'No se pudo obtener el listado de noticias'
        })
    }
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
        // guardar Noticia en DB
        await noticiaNueva.save()
        // enviar la respuesta
        res.status(201).json({
            mensaje: 'Noticia agregado correctamente'
        })
    } catch (error) {
        console.log(error);
        // enviar codigo de error
        res.status(400).json({
            mensaje: 'Error al agregar un Noticia'
        })
    }
}

noticiaCtrl.obtenerNoticia = async(req,res) => {
    try{
        //obtener el parametro de la ruta
        // console.log(req.params.id)
        //creo el objeto y lo busco en la base de datos
        const noticiaBuscada = await Noticia.findById(req.params.id);
        res.status(200).json(noticiaBuscada);
    }catch(error){
        console.log(error);
        res.status(404).json({
            mensaje: 'No se pudo obtener la noticias solicitada'
        })
    }
}

noticiaCtrl.borrarNoticia = async(req,res) => {
    try{
         //busque un prodcuto mediante el id, y cuando lo encuentre que lo borre
         await Noticia.findByIdAndDelete(req.params.id);
         res.status(200).json({mensaje: 'Noticia eliminada correctamente'});
    }catch(error){
        console.log(error);
        res.status(404).json({
            mensaje: 'No se pudo borrar la noticias'
        })
    }
}

noticiaCtrl.editarNoticia = async(req,res) => {
    try{
        //buscar el producto con el id y modificar los valores con los datos que me llega del body
        await Noticia.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json({mensaje: 'se modifico el producto solicitado'});
    }catch(error){
        console.log(error);
        res.status(404).json({
            mensaje: 'No se pudo modificar la notica solicitada'
        })
    }
}
export default noticiaCtrl;