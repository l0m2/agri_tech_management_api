import { Column, Entity, ManyToOne,JoinColumn, PrimaryGeneratedColumn } from "typeorm";
import Campanhas from "./Campanhas";

@Entity('tecnicos')
export default class Tecnicos{
    
    @PrimaryGeneratedColumn('increment')
    id!: number;
    @Column({nullable:false,length:255})
    nome: string;
      @ManyToOne(() => Campanhas, {
           onDelete: 'CASCADE',
           onUpdate: 'CASCADE'})
       @JoinColumn({name: 'campanha_id'})
    campanha: Campanhas;

    constructor(nome:string, campanha:Campanhas){
        this.nome = nome;
        this.campanha = campanha;
    }
}