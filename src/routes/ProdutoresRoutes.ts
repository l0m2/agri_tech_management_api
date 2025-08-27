import { Router } from "express";
import { ProdutoresController } from "../controllers/ProdutoresController";
import { ProdutoresCampanhaController } from "../controllers/ProdutoresCampanhaController";

const router = Router();
const produtoresController = new ProdutoresController();
const produtoresCampanhaController = new ProdutoresCampanhaController();

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
 *
 * /api/produtores/atribuir:
 *   post:
 *     summary: Associa um produtor a uma campanha com um técnico
 *     tags:
 *       - Produtores
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
 * /api/produtores/transferir/{id}:
 *   put:
 *     summary: Atualiza o técnico de um produtor em uma campanha
 *     tags:
 *       - Produtores
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
 * 
 */
 


router.post("/atribuir", (req, res) => produtoresCampanhaController.inserirProdutorCampanha(req, res));
router.put("/transferir/:id", (req, res) => produtoresCampanhaController.atualizarProdutorCampanha(req, res));
router.post("/", (req, res) => produtoresController.inserirProdutor(req, res));

export default router;
