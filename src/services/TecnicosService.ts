import { TecnicosRepository } from "../repository/TecnicosRepository";
import { TecnicosValidator } from "../utils/validators/TecnicosValidator";
import { CampanhasService } from "./CampanhasService";
import  Tecnicos  from "../models/Tecnicos";
import { produtoresCampanhaRepository } from "../repository/ProdutoresCampanhaRepository";

export class TecnicosService{
    private tecnicosRepository: TecnicosRepository;
    private campanhasService: CampanhasService;
    private produtoresCampanhaRepository: produtoresCampanhaRepository;

    constructor(){
     this.tecnicosRepository = new TecnicosRepository;
     this.campanhasService = new CampanhasService;
     this.produtoresCampanhaRepository = new produtoresCampanhaRepository;
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

   async listarProdutoresPorTecnico(tecnico_id: number) {
  const produtoresCampanhas = await this.produtoresCampanhaRepository.findProdutoresByTecnicoId(tecnico_id);

  const produtores = produtoresCampanhas.map(pc => ({
    id: pc.produtor.id,
    nome: pc.produtor.nome,
    localizacao: pc.produtor.localizacao,
  }));

  const produtoresList = Array.from(
    new Map(produtores.map(p => [p.id, p])).values()
  );

  return produtoresList;
}

}