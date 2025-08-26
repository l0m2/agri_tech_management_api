import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import Produtores from "./Produtores";
import Campanhas from "./Campanhas";
import Tecnicos from "./Tecnicos";

@Entity('produtores_campanhas')
export default class ProdutoresCampanhas{

    @PrimaryGeneratedColumn('increment')
    id!: number;
       @ManyToOne(() => Produtores, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'})
    @JoinColumn({name: 'produtor_id'})
    produtor: Produtores;

    @ManyToOne(() => Campanhas,{
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'})
    @JoinColumn({name: 'campanha_id'})
    campanha: Campanhas;

    @ManyToOne(() => Tecnicos,{
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'})
    @JoinColumn({name: 'tecnico_id'})
    tecnico: Tecnicos;

    @CreateDateColumn({name:'data_registro', type: 'timestamp'})
    dataRegisto!: Date;

    @UpdateDateColumn({name:'data_transferencia', type:'timestamp'})
    dataTransferencia!: Date;

    constructor(produtor: Produtores,tecnico: Tecnicos, campanha: Campanhas){
        this.produtor = produtor;
        this.campanha = campanha;
        this.tecnico = tecnico;
    }

    atualizarTecnico(tecnico_novo:Tecnicos){
        this.tecnico = tecnico_novo;
    }

}