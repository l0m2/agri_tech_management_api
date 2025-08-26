export class ProdutoresValidator {
  static validate(
    nome: string,
    localizacao : string
  ) {
    if (!nome || nome.trim() === "")
      throw new Error("Nome e obrigatorio");

    if (!localizacao|| localizacao.trim() === "")
      throw new Error("Localizacao e obrigatorio");
}
}