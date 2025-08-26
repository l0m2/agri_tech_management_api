import { Request, Response } from "express";
import { EmpresasServices } from "../services/EmpresasService";
import { SuccessResponse } from "../utils/response/SucessResponse";
import { ErrorResponse } from "../utils/response/ErrorResponse";

export class EmpresasController {
  private empresasService: EmpresasServices;

  constructor() {
    this.empresasService = new EmpresasServices();
  }


  async inserirEmpresa(request: Request, response: Response): Promise<void> {
    try {
      const { nome, cnpj, telefone, email } = request.body;

      const empresa = await this.empresasService.inserirEmpresa(nome, cnpj, telefone, email);

      response.status(201).json(new SuccessResponse(empresa));
    } catch (error: any) {
      response.status(400).json(new ErrorResponse(400, error.message));
    }
  }
}
