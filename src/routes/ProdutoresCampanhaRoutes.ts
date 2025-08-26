import { Router } from "express";
import { ProdutoresCampanhaController } from "../controllers/ProdutoresCampanhaController";

const router = Router();
const produtoresCampanhaController = new ProdutoresCampanhaController();

/**
 * @swagger
 * /api/produtoresCampanhas:
 *   post:
 *     summary: Associa um produtor a uma campanha com um técnico
 *     tags:
 *       - ProdutoresCampanha
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               produto_id:
 *                 type: number
 *               tecnico_id:
 *                 type: number
 *               campanha_id:
 *                 type: number
 *     responses:
 *       201:
 *         description: Associação criada com sucesso
 *       400:
 *         description: Dados inválidos ou relação já existente
 *
 * /api/produtoresCampanhas/{id}:
 *   put:
 *     summary: Atualiza o técnico de um produtor em uma campanha
 *     tags:
 *       - ProdutoresCampanha
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: ID da associação produtor-campanha
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               produtor_id:
 *                 type: number
 *               tecnico_antigo_id:
 *                 type: number
 *               tecnico_novo_id:
 *                 type: number
 *               campanha_id:
 *                 type: number
 *     responses:
 *       200:
 *         description: Atualização realizada com sucesso
 *       400:
 *         description: Dados inválidos ou relação inexistente
 */


router.post("/", (req, res) => produtoresCampanhaController.inserirProdutorCampanha(req, res));
router.put("/:id", (req, res) => produtoresCampanhaController.atualizarProdutorCampanha(req, res));

export default router;
