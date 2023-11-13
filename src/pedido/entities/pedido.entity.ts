import { Column, Entity, PrimaryGeneratedColumn,  } from 'typeorm';

@Entity()
export class Pedido {
    @PrimaryGeneratedColumn({type: 'int4' }) //este decorador hace referencia al primari key
    id?: number;

    @Column({ type: 'varchar', length: 60, nullable: false })
     comida: string;

    @Column({ type: 'varchar', length: 60, nullable: false })
     bebida: string;

    @Column({ type:'int8', nullable: false})
    precio: number;

    @Column({ type:'int8', nullable: false})
    user_id: number;
  
}