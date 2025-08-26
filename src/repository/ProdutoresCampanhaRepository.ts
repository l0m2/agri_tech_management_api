import { Repository } from "typeorm";
import { AppDataSource } from "../database/AppDataSource";
import ProdutoresCampanhas from "../models/ProdutoresCampanhas";

export class produtoresCampanhaRepository{
    private produtoresCampanhaRepository : Repository<ProdutoresCampanhas>

    constructor(){
        this.produtoresCampanhaRepository = AppDataSource.getRepository(ProdutoresCampanhas);
    }

    async save(produtores_campanhas: ProdutoresCampanhas): Promise<ProdutoresCampanhas>{
        return this.produtoresCampanhaRepository.save(produtores_campanhas);
    }

    async findById(id: number): Promise<ProdutoresCampanhas | null> {
        return this.produtoresCampanhaRepository.findOne({ where: { id } });
    }

    async findProdutoresByTecnicoId(tecnicoId: number) {
        return this.produtoresCampanhaRepository.find({
            where: { tecnico: { id: tecnicoId } },
            relations: ["produtor"], 
            select: {
                produtor: {
                    id: true,
                    nome: true,
                    localizacao: true,
                },
            },
        });
    }
}