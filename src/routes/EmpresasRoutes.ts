import { Router } from "express";
import { EmpresasController } from "../controllers/EmpresasController";

const router = Router();
const empresasController = new EmpresasController();

/**
 * @swagger
 * /api/empresas:
 *   post:
 *     summary: Cria uma nova empresa
 *     tags:
 *       - Empresas
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               cnpj:
 *                 type: string
 *               telefone:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: Empresa criada com sucesso
 *       400:
 *         description: Dados inválidos ou já existentes
 */

router.post("/", (req, res) => empresasController.inserirEmpresa(req, res));

export default router;
