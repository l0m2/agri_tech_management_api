export class ProdutoresCampanhaValidator {

   static validateInsert(
    produtor_id: number,
    tecnico_id:number,
    campanha_id : number,
   ){
    
    if (!produtor_id || isNaN(produtor_id) || produtor_id <= 0)
      throw new Error("produto_id deve ser um numero valido e maior que zero");
    
    if (!tecnico_id || isNaN(tecnico_id) || tecnico_id <= 0)
      throw new Error("tecnico_id deve ser um numero valido e maior que zero");
    
    if (!campanha_id || isNaN(campanha_id) || campanha_id <= 0)
      throw new Error("campanha_id deve ser um numero valido e maior que zero");
   }

  static validateUpdate(
    produtor_id: number,
    tecnico_antigo_id: number,
    tecnico_novo_id : number,
    campanha_id : number,
  ) {

    if (!produtor_id || isNaN(produtor_id) || produtor_id <= 0)
      throw new Error("produto_id deve ser um numero valido e maior que zero");
    
    if (!tecnico_antigo_id || isNaN(tecnico_antigo_id) || tecnico_antigo_id <= 0)
      throw new Error("tecnico_antigo_id deve ser um numero valido e maior que zero");
    
    if (!tecnico_novo_id || isNaN(tecnico_novo_id) || tecnico_novo_id <= 0)
        throw new Error("tecnico_novo_id deve ser um numero valido e maior que zero");

    if (tecnico_antigo_id === tecnico_novo_id ){
        throw new Error("tecnico_antigo_id e tecnico_novo_id tem valores iguais")
    }
    
    if (!campanha_id || isNaN(campanha_id) || campanha_id <= 0)
      throw new Error("campanha_id deve ser um numero valido e maior que zero");
}

}