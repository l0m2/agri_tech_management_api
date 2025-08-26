import { CampanhasRepository } from "../repository/CampanhasRepository";
import { CampanhasValidator } from "../utils/validators/CampanhasValidator";
import { EmpresasServices } from "./EmpresasService";
import  Campanhas  from "../models/Campanhas";

export class CampanhasService{
    private campanhasRepository: CampanhasRepository;
    private empresasService: EmpresasServices;

    constructor(){
     this.campanhasRepository = new CampanhasRepository;
     this.empresasService = new EmpresasServices;
    }

    async inserirCampanha(nome:string, empresa_id: number, dataInicio:string, dataFim:string){

            CampanhasValidator.validate(nome,empresa_id,dataInicio,dataFim);
            const empresa = await this.empresasService.findEmpresaById(empresa_id);

            if(!empresa){
               throw new Error("Empresa nao existe");
            }

                const campanha = new Campanhas(nome, empresa, new Date(dataInicio),new Date(dataFim));
            
                return await this.campanhasRepository.save(campanha);
    }

    async findCampanhaById(id: number): Promise<Campanhas | null> {
      const campanha = await this.campanhasRepository.findById(id);
      if (!campanha) {
        return null; 
      }
      return campanha; 
    }
}