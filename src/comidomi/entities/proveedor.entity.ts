import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Usuarios } from '../../usuarios/entities/usuarios.entity';
import { Categoria } from './categoria.entity';

@Entity()
export class Proveedor {
    @PrimaryGeneratedColumn({type: 'int4' }) //este decorador hace referencia al primari key
    id?: number;

    @Column({ type: 'varchar', length: 100, nullable: false })
    proveedor: string;

    @Column({ type: 'int4', nullable: true })
    Users_id: number;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP '})
    created_at: Date
 
   
}




    

