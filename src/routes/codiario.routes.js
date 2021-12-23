import { Router } from "express";
import noticiaCtrl from "../controllers/noticia.controllers";
import usuarioCtrl from "../controllers/usuario.controllers";

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

export default router;