import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('produtores')
export default class Produtores{

    @PrimaryGeneratedColumn('increment')
    id!: number;
    @Column({nullable:false, length:255})
    nome: string;
    @Column({length:255})
    localizacao: string;

    constructor(nome:string, localizacao:string){
        this.nome = nome;
        this.localizacao = localizacao;
    }
}