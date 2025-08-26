export class CampanhasValidator {
  static validate(
    nome: string,
    empresa_id: number,
    data_inicio: string,
    data_fim: string
  ) {
    if (!nome || nome.trim() === "")
      throw new Error("Nome e obrigatorio");

    if (!empresa_id || isNaN(empresa_id) || empresa_id <= 0)
      throw new Error("empresa_id deve ser um numero valido e maior que zero");

    if (!data_inicio || data_inicio.trim() === "")
      throw new Error("Data de incio e obrigatoria");

    if (!data_fim || data_fim.trim() === "")
      throw new Error("Data de fim e obrigatoria");

    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

    if (!dateRegex.test(data_inicio))
      throw new Error("Data de inicio deve estar no formato YYYY-MM-DD");

    if (!dateRegex.test(data_fim))
      throw new Error("Data de fim deve estar no formato YYYY-MM-DD");

    const inicio = new Date(data_inicio);
    const fim = new Date(data_fim);

    if (isNaN(inicio.getTime()) || isNaN(fim.getTime()))
      throw new Error("Datas invalidas");

    if (fim < inicio)
      throw new Error("Data de fim nao pode ser anterior a data de inicio");
  }
}
