import { Router } from "express";
import noticiaCtrl from "../controllers/noticia.controllers";

const router = Router();

//crear rutas
router
    .route('/')
    .delete(noticiaCtrl.borrarProducto)
    .post(noticiaCtrl.crearNoticia)
    .get(noticiaCtrl.listarNoticias)

export default router;
