import { Router } from "express";
import noticiaCtrl from "../controllers/noticia.controllers";
import usuarioCtrl from "../controllers/usuario.controllers";
import comentarioCtrl from "../controllers/comentarios.controllers"

const router = Router();

//crear rutas
router
    .route('/noticia')
    .post(noticiaCtrl.crearNoticia)
    .get(noticiaCtrl.listarNoticias)

router
    .route('/noticia/:id')
    .get(noticiaCtrl.obtenerNoticia)
    .delete(noticiaCtrl.borrarNoticia)
    .put(noticiaCtrl.editarNoticia)

router
    .route('/usuario')
    .post(usuarioCtrl.crearUsuario)
    .get(usuarioCtrl.listarUsuarios)

router
    .route('/usuario/:id')
    .get(usuarioCtrl.obtenerUsuario)
    .delete(usuarioCtrl.borrarUsuario)
    .put(usuarioCtrl.editarUsuario)

router
    .route('/comentario')
    .post(comentarioCtrl.crearComentario)
    .get(comentarioCtrl.listarComentario)
    
router
    .route('/comentario/:id')
    .get(comentarioCtrl.obtenerComentario)
    .delete(comentarioCtrl.borrarComentario)
    .put(comentarioCtrl.editarComentario)

export default router;
