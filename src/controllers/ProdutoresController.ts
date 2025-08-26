import { ProdutoresService } from "../services/ProdutoresService";
import { ErrorResponse } from "../utils/response/ErrorResponse";
import { SuccessResponse } from "../utils/response/SucessResponse";
import { Request, Response } from "express";

export class ProdutoresController{
    private produtorsService: ProdutoresService;

    constructor(){
        this.produtorsService = new ProdutoresService;
    }

    async inserirProdutor(request: Request, response: Response): Promise<void>{
        try{
            const {nome, localizacao} = request.body;

            const produtor = await this.produtorsService.inserirProdutor(nome,localizacao);
            response.status(201).json(new SuccessResponse(produtor));
        }catch(error:any){
            response.status(400).json(new ErrorResponse(400, error.message));
        }
        }
    }
