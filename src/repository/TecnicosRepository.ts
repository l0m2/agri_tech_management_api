import { Repository } from "typeorm";
import { AppDataSource } from "../database/AppDataSource";
import Tecnicos from "../models/Tecnicos";

export class TecnicosRepository{
    private tecnicoRepository : Repository<Tecnicos>

    constructor(){
        this.tecnicoRepository = AppDataSource.getRepository(Tecnicos);
    }

    async save(tecnico: Tecnicos): Promise<Tecnicos>{
        return this.tecnicoRepository.save(tecnico);
    }

    async findById(id: number): Promise<Tecnicos | null> {
        return this.tecnicoRepository.findOne({ where: { id } });
    }
}