import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('empresas')
export default class Empresas{

    @PrimaryGeneratedColumn('increment')
    id!: number;
    @Column({nullable:false, length:255})
    nome: string;
    @Column({nullable:false,unique:true,length:20})
    cnpj: string;
    @Column({unique:true,length:15})
    telefone: string;
    @Column({unique:true,length:100})
    email: string;


    constructor(nome:string, cnpj:string,telefone:string,email:string){
        this.nome = nome;
        this.cnpj = cnpj;
        this.telefone = telefone;
        this.email = email;
    }

}