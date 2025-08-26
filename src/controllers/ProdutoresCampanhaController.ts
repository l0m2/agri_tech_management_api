import { ProdutoresCampanhaService } from "../services/ProdutoresCampanhaService";
import { ErrorResponse } from "../utils/response/ErrorResponse";
import { SuccessResponse } from "../utils/response/SucessResponse";
import { Request, Response } from "express";

export class ProdutoresCampanhaController{
    private produtoresCampanhaService: ProdutoresCampanhaService;

    constructor(){
        this.produtoresCampanhaService = new ProdutoresCampanhaService;
    }

    async inserirProdutorCampanha(request: Request, response: Response): Promise<void>{
        try{
            const {produto_id,tecnico_id,campanha_id} = request.body;

            const produtor_campanha = await this.produtoresCampanhaService.inserirProdutorCampanha(produto_id,tecnico_id,campanha_id);
            response.status(201).json(new SuccessResponse(produtor_campanha));
        }catch(error:any){
            response.status(400).json(new ErrorResponse(400, error.message));
        }
        }

    async atualizarProdutorCampanha(request: Request, response: Response): Promise<void> {
    try {

      const {id} = request.params;
      const { produtor_id, tecnico_antigo_id, tecnico_novo_id, campanha_id } = request.body;

      const produtor_campanha = await this.produtoresCampanhaService.atualizarProdutorCampanha(
        Number(id),
        produtor_id,
        tecnico_antigo_id,
        tecnico_novo_id,
        campanha_id
      );

      response.status(200).json(new SuccessResponse(produtor_campanha));
    } catch (error: any) {
      response.status(400).json(new ErrorResponse(400, error.message));
    }
  }
}
