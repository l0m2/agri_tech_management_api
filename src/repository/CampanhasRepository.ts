import { Repository } from "typeorm";
import Campanhas from "../models/Campanhas";
import { AppDataSource } from "../database/AppDataSource";

export class CampanhasRepository{
    private campanhasRepository : Repository<Campanhas>

    constructor(){
        this.campanhasRepository = AppDataSource.getRepository(Campanhas);
    }

    async save(campanha: Campanhas): Promise<Campanhas>{
        return this.campanhasRepository.save(campanha);
    }

    async findById(id: number): Promise<Campanhas | null> {
        return this.campanhasRepository.findOne({ where: { id } });
    }
}