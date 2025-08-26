import { Router } from "express";
import { CampanhasController } from "../controllers/CampanhasController";

const router = Router();
const campanhasController = new CampanhasController();

/**
 * @swagger
 * /api/campanhas:
 *   post:
 *     summary: Cria uma nova campanha
 *     tags:
 *       - Campanhas
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               empresa_id:
 *                 type: number
 *               data_inicio:
 *                 type: string
 *                 format: date
 *               data_fim:
 *                 type: string
 *                 format: date
 *     responses:
 *       201:
 *         description: Campanha criada com sucesso
 *       400:
 *         description: Dados inválidos ou empresa inexistente
 */


router.post("/", (req, res) => campanhasController.inserirCampanhas(req, res));

export default router;
