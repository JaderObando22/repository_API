import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn,  } from 'typeorm';
import { CreateOrigenDto } from '../dto/origen.dto';
import { Usuarios } from 'src/usuarios/entities/usuarios.entity';



@Entity()
export class Origen  {
    @PrimaryGeneratedColumn({ type: 'int4'})
    id?: number;

    @Column({ type: 'int4', nullable: false })
    user_id: number;

    @Column({ type: 'varchar', nullable: false })
    lugar: string;

    @Column({ type: 'varchar', nullable: false })
    recorrido: string;

    @Column({ type: 'varchar', nullable: false })
    destino_id: number;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP '})
    created_at: Date


    //relaciones

    @ManyToOne(() => Usuarios)
    @JoinColumn({
    name: 'user_id', //el campo que relaciona a mi tabla
    referencedColumnName: 'id' //este es el id del usuario
   })
    autor: Usuarios;
    
}