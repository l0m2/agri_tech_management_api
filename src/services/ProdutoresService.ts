import { ProdutoresRepository } from "../repository/ProdutoresRepository";
import Produtores from "../models/Produtores";
import { ProdutoresValidator } from "../utils/validators/ProdutoresValidator";

export class ProdutoresService {
  private produtoresRepository: ProdutoresRepository;

  constructor() {
    this.produtoresRepository = new ProdutoresRepository();
  }

  async inserirProdutor( nome: string, localizacao: string): Promise<Produtores> {

    ProdutoresValidator.validate(nome,localizacao);

    const produtor = new Produtores(nome,localizacao);

    return await this.produtoresRepository.save(produtor);
  }

async findProdutorById(id: number): Promise<Produtores | null> {
  const produtor = await this.produtoresRepository.findById(id);
  if (!produtor) {
    return null; 
  }
  return produtor; 
}

}
