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
 * 
 * /api/tecnicos/{id}/produtores:
 *   get:
 *     summary: Lista todos os produtores atribuídos a um técnico específico
 *     tags: 
 *       - Técnicos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do técnico
 *     responses:
 *       200:
 *         description: Lista de produtores atribuídos ao técnico
 */


router.post("/", (req, res) => tecnicosController.inserirTecnico(req, res));
router.get("/:id/produtores", (req, res) => tecnicosController.listarProdutoresPorTecnico(req, res));

export default router;
