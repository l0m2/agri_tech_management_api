import { Router } from "express";
import { TecnicosController } from "../controllers/TecnicosController";

const router = Router();
const tecnicosController = new TecnicosController();

/**
 * @swagger
 * /api/tecnicos:
 *   post:
 *     summary: Cria um novo técnico
 *     tags:
 *       - Técnicos
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               campanha_id:
 *                 type: number
 *     responses:
 *       201:
 *         description: Técnico criado com sucesso
 *       400:
 *         description: Dados inválidos ou campanha inexistente
 */


router.post("/", (req, res) => tecnicosController.inserirTecnico(req, res));

export default router;
