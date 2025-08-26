import { TecnicosService } from "../services/TecnicosService";
import { ErrorResponse } from "../utils/response/ErrorResponse";
import { SuccessResponse } from "../utils/response/SucessResponse";
import { Request, Response } from "express";

export class TecnicosController{
    private tecnicoService: TecnicosService;

    constructor(){
        this.tecnicoService = new TecnicosService;
    }

    async inserirTecnico(request: Request, response: Response): Promise<void>{
        try{
            const {nome, campanha_id} = request.body;

            const tecnico = await this.tecnicoService.inserirTecnico(nome,campanha_id);
            response.status(201).json(new SuccessResponse(tecnico));
        }catch(error:any){
            response.status(400).json(new ErrorResponse(400, error.message));
        }
        }
    }
