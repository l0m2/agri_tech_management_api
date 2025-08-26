import { Repository } from "typeorm";
import { AppDataSource } from "../database/AppDataSource";
import Produtores from "../models/Produtores";

export class ProdutoresRepository{
    private produtoresRepository : Repository<Produtores>

    constructor(){
        this.produtoresRepository = AppDataSource.getRepository(Produtores);
    }

    async save(produtor: Produtores): Promise<Produtores>{
        return this.produtoresRepository.save(produtor);
    }

    async findById(id: number): Promise<Produtores | null> {
        return this.produtoresRepository.findOne({ where: { id } });
    }
}