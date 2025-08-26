import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Empresas from "./Empresas";

@Entity('campanhas')
export default class Campanhas{

    @PrimaryGeneratedColumn('increment')
    id!: number;
    @Column({nullable:false,length:255})
    nome: string;

    @ManyToOne(() => Empresas, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'})
    @JoinColumn({name: 'empresa_id'})
    empresa: Empresas;

    @Column({type: "date", nullable:false})
    dataInicio:Date;

    @Column({type:"date", default:null})
    dataFim:Date;

    constructor(nome:string,empresa:Empresas,dataInicio:Date,dataFim:Date){
        this.nome = nome;
        this.empresa = empresa;
        this.dataInicio = dataInicio;
        this.dataFim = dataFim;
    }

}