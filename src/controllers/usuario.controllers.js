import Usuario from "../models/usuario";

const usuarioCtrl = {};

usuarioCtrl.listarUsuarios = async(req, res) => {
    try{
        const listaUsuarios = await Usuario.find();
        res.status(200).json(listaUsuarios)
    }catch(error){
        console.log(error);
        res.status(404).json({
            mensaje: 'No se puede obtener el listado de usuarios'
        })
    }
}

usuarioCtrl.crearUsuario = async(req, res) => {
    try {
        //validar 

        //crear un nuevo objeto para guardar en la DB
        const usuarioNuevo = new Usuario({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            pass: req.body.pass,
        });
        // guardar Noticia en DB
        await usuarioNuevo.save()
        // enviar la respuesta
        res.status(201).json({
            mensaje: 'Usuario agregado correctamente'
        })
    } catch (error) {
        console.log(error);
        // enviar codigo de error
        res.status(400).json({
            mensaje: 'Error al agregar un Usuario'
        })
    }
}

export default usuarioCtrl;