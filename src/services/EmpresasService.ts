import { EmpresasRepository } from "../repository/EmpresasRepository";
import Empresas from "../models/Empresas";
import { EmpresasValidator } from "../utils/validators/EmpresasValidator";

export class EmpresasServices {
  private empresasRepository: EmpresasRepository;

  constructor() {
    this.empresasRepository = new EmpresasRepository();
  }

  async inserirEmpresa( nome: string, cnpj: string, telefone: string, email: string): Promise<Empresas> {

    EmpresasValidator.validate(nome,cnpj,telefone,email);

    if (await this.empresasRepository.findByCnpj(cnpj)) {
      throw new Error("Existe uma empresa com este CNPJ");
    }

    if (await this.empresasRepository.findByTelefone(telefone)) {
      throw new Error("Existe uma empresa com este telefone");
    }

    if (await this.empresasRepository.findByEmail(email)) {
      throw new Error("Existe uma empresa com este email");
    }

    const empresa = new Empresas(nome, cnpj, telefone, email);

    return await this.empresasRepository.save(empresa);
  }

async findEmpresaById(id: number): Promise<Empresas | null> {
  const empresa = await this.empresasRepository.findById(id);
  if (!empresa) {
    return null; 
  }
  return empresa; 
}

}
