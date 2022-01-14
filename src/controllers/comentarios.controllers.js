import Comentario from "../models/comentarios";

const comentarioCtrl = {};

comentarioCtrl.listarComentario = async(req,res) => {
    try{
        const listarComentarios = await Comentario.find();
        res.status(200).json(listarComentarios)
    }catch(error){
        console.log(error);
        res.status(400).json({
            mensaje: 'Error al agregar un Comentario'
        })
    }
}

comentarioCtrl.crearComentario = async(req, res) => {
    try {
        const comentarioNueva = new Comentario({
            nombre: req.body.nombre,
            comentario: req.body.comentario
        });
        console.log(comentarioNueva)
        await comentarioNueva.save()
        res.status(201).json({
            mensaje: 'Comentario agregado correctamente'
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: 'Error al agregar un Comentario'
        })
    }
}

comentarioCtrl.obtenerComentario = async(req,res) => {
    try{
        const comentarioBuscado = await Comentario.findById(req.params.id);
        res.status(200).json(comentarioBuscado);
    }catch(error){
        console.log(error);
        res.status(404).json({
            mensaje: 'No se pudo obtener el comentario solicitado'
        })
    }
}

comentarioCtrl.borrarComentario = async(req,res) => {
    try{
         await Comentario.findByIdAndDelete(req.params.id);
         res.status(200).json({mensaje: 'Comentario eliminado correctamente'});
    }catch(error){
        console.log(error);
        res.status(404).json({
            mensaje: 'No se pudo borrar el comentario'
        })
    }
}

comentarioCtrl.editarComentario = async(req,res) => {
    try{
        await Comentario.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json({mensaje: 'se modifico el comentario solicitado'});
    }catch(error){
        console.log(error);
        res.status(404).json({
            mensaje: 'No se pudo modificar el comentario solicitado'
        })
    }
}

export default comentarioCtrl;
