import { Router } from "express";
import noticiaCtrl from "../controllers/noticia.controllers";

const router = Router();

//crear rutas
router
    .route('/')
    .post(noticiaCtrl.crearNoticia)
    .get(noticiaCtrl.listarNoticias)

router.route ('/:id').get(noticiaCtrl.obtenerNoticia)

export default router;
