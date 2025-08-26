export class TecnicosValidator {
  static validate(
    nome: string,
    campanha_id : number
  ) {
    if (!nome || nome.trim() === "")
      throw new Error("Nome e obrigatorio");

    if (!campanha_id || isNaN(campanha_id) || campanha_id <= 0)
      throw new Error("campanha_id deve ser um numero valido e maior que zero");
}
}