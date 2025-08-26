import { Router } from "express";
import { ProdutoresController } from "../controllers/ProdutoresController";

const router = Router();
const produtoresController = new ProdutoresController();

/**
 * @swagger
 * /api/produtores:
 *   post:
 *     summary: Cria um novo produtor
 *     tags:
 *       - Produtores
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               localizacao:
 *                 type: string
 *     responses:
 *       201:
 *         description: Produtor criado com sucesso
 *       400:
 *         description: Dados inválidos
 */


router.post("/", (req, res) => produtoresController.inserirProdutor(req, res));

export default router;
