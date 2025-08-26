import { CampanhasService } from "../services/CampanhasService";
import { ErrorResponse } from "../utils/response/ErrorResponse";
import { SuccessResponse } from "../utils/response/SucessResponse";
import { Request, Response } from "express";

export class CampanhasController{
    private campanhasService: CampanhasService;

    constructor(){
        this.campanhasService = new CampanhasService;
    }

    async inserirCampanhas(request: Request, response: Response): Promise<void>{
        try{
            const {nome, empresa_id, data_inicio, data_fim} = request.body;

            const campanha = await this.campanhasService.inserirCampanha(nome,empresa_id,data_inicio,data_fim);
            response.status(201).json(new SuccessResponse(campanha));
        }catch(error:any){
            response.status(400).json(new ErrorResponse(400, error.message));
        }
        }
    }
