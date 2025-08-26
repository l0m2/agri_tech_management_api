import { TecnicosRepository } from "../repository/TecnicosRepository";
import { TecnicosValidator } from "../utils/validators/TecnicosValidator";
import { CampanhasService } from "./CampanhasService";
import  Tecnicos  from "../models/Tecnicos";

export class TecnicosService{
    private tecnicosRepository: TecnicosRepository;
    private campanhasService: CampanhasService;

    constructor(){
     this.tecnicosRepository = new TecnicosRepository;
     this.campanhasService = new CampanhasService;
    }

    async inserirTecnico(nome:string, campanha_id: number){

            TecnicosValidator.validate(nome,campanha_id);
            const campanha = await this.campanhasService.findCampanhaById(campanha_id);

            if(!campanha){
               throw new Error("Empresa nao existe");
            }

                const tecnico = new Tecnicos(nome, campanha);
            
                return await this.tecnicosRepository.save(tecnico);
    }

    async findTecnicoById(id: number): Promise<Tecnicos | null> {
      const tecnico = await this.tecnicosRepository.findById(id);
      if (!tecnico) {
        return null; 
      }
      return tecnico; 
    }
}