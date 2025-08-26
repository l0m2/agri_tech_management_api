export class EmpresasValidator {
  static validate(nome: string, cnpj: string, telefone: string, email: string) {
  
    if (!nome || nome.trim() === "") throw new Error("Nome e obrigatorio");

    if (!cnpj || cnpj.trim() === "") throw new Error("CNPJ e obrigatorio");


    if (!telefone || telefone.trim() === "")
      throw new Error("Telefone e obrigatório");
    
    const telefoneRegex = /^\d{8,15}$/;
    if (!telefoneRegex.test(telefone))
      throw new Error("Telefone deve conter apenas numeros e ter entre 8 e 15 digitos");


    if (!email || email.trim() === "")
      throw new Error("Email o obrigatorio");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email))
      throw new Error("Email invalido");
  }
}
