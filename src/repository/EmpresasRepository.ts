import Empresas from "../models/Empresas";
import { AppDataSource } from "../database/AppDataSource";
import { Repository } from "typeorm";

export class EmpresasRepository{
    private empresasRepository: Repository<Empresas>

    constructor(){
        this.empresasRepository = AppDataSource.getRepository(Empresas);
    }

async findByCnpj(cnpj: string): Promise<Empresas | null> {
    return this.empresasRepository.findOne({where: { cnpj }});
}

async findByTelefone(telefone: string): Promise<Empresas | null> {
    return this.empresasRepository.findOne({where: {telefone}});
}

async findByEmail(email:string): Promise<Empresas | null> {
    return this.empresasRepository.findOne({where: { email}});
}

async save(empresa: Empresas): Promise<Empresas>{
    return this.empresasRepository.save(empresa);
}

async findById(id: number): Promise<Empresas | null> {
    return this.empresasRepository.findOne({ where: { id } });
}
}
