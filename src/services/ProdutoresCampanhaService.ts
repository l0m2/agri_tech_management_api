import { ProdutoresCampanhaValidator } from "../utils/validators/ProdutoresCampanhaValidator";
import { CampanhasService } from "./CampanhasService";
import { TecnicosService } from "./TecnicosService";
import { ProdutoresService } from "./ProdutoresService";
import  ProdutoresCampanhas  from "../models/ProdutoresCampanhas";
import { produtoresCampanhaRepository } from "../repository/ProdutoresCampanhaRepository";

export class ProdutoresCampanhaService{
    private tecnicosService: TecnicosService;
    private campanhasService: CampanhasService;
    private produtoresService: ProdutoresService;
    private produtoresCampanhaRepository: produtoresCampanhaRepository;

    constructor(){
     this.tecnicosService = new TecnicosService;
     this.campanhasService = new CampanhasService;
     this.produtoresService = new ProdutoresService;
     this.produtoresCampanhaRepository = new produtoresCampanhaRepository;
    }

    async inserirProdutorCampanha(produtor_id: number,  tecnico_id: number, campanha_id: number){

            ProdutoresCampanhaValidator.validateInsert(produtor_id, tecnico_id,campanha_id);

            const produtor = await this.produtoresService.findProdutorById(produtor_id);

            if(!produtor){
               throw new Error("Produtor nao existe");
            }

            const tecnico = await this.tecnicosService.findTecnicoById(tecnico_id);

            if(!tecnico){
               throw new Error("Tecnico novo nao existe");
            }

            const campanha = await this.campanhasService.findCampanhaById(campanha_id);

            if(!campanha){
               throw new Error("Campanha nao existe");
            }

                const produtores_campanhas = new ProdutoresCampanhas(produtor,tecnico,campanha);
            
                return await this.produtoresCampanhaRepository.save(produtores_campanhas);
    }

async atualizarProdutorCampanha(
  produtor_campanha_id: number,
  produtor_id: number,
  tecnico_antigo_id: number,
  tecnico_novo_id: number,
  campanha_id: number
) {
  const produtor_campanha = await this.findProdutoresCampanhasById(produtor_campanha_id);

  if (!produtor_campanha) {
    throw new Error("O id de produtor campanha nao existe");
  }

  ProdutoresCampanhaValidator.validateUpdate(produtor_id, tecnico_antigo_id, tecnico_novo_id, campanha_id);

  if (!produtor_campanha.tecnico || produtor_campanha.tecnico.id !== tecnico_antigo_id) {
    throw new Error("O tecnico antigo nao faz parte desta campanha de produtor");
  }

  if (!produtor_campanha.campanha || produtor_campanha.campanha.id !== campanha_id) {
    throw new Error("Esta campanha nao faz parte desta campanha de produtor");
  }

  const produtor = await this.produtoresService.findProdutorById(produtor_id);
  if (!produtor) throw new Error("Produtor nao existe");

  const tecnico_antigo = await this.tecnicosService.findTecnicoById(tecnico_antigo_id);
  if (!tecnico_antigo) throw new Error("Tecnico antigo nao existe");

  const tecnico_novo = await this.tecnicosService.findTecnicoById(tecnico_novo_id);
  if (!tecnico_novo) throw new Error("Tecnico novo nao existe");

  const campanha = await this.campanhasService.findCampanhaById(campanha_id);
  if (!campanha) throw new Error("Campanha nao existe");

  produtor_campanha.atualizarTecnico(tecnico_novo);

  return await this.produtoresCampanhaRepository.save(produtor_campanha);
}


    async findProdutoresCampanhasById(id: number): Promise<ProdutoresCampanhas | null> {
      const produtores_campanhas = await this.produtoresCampanhaRepository.findById(id);
      if (!produtores_campanhas) {
        return null; 
      }
      return produtores_campanhas; 
    }
}