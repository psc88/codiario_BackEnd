import { Router } from "express";
import noticiaCtrl from "../controllers/noticia.controllers";

const router = Router();

//crear rutas
router.route('/').delete(noticiaCtrl.borrarProducto)

export default router;
