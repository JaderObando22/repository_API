import { Column, Entity, PrimaryGeneratedColumn,  } from 'typeorm';

@Entity()
export class Delivery {
    @PrimaryGeneratedColumn({type: 'int4' }) //este decorador hace referencia al primari key
    id?: number;

    @Column({ type: 'varchar', length: 60, nullable: false })
     nombre: string;

     @Column({ type: 'varchar', length: 60, nullable: false })
     apellido: string;

     @Column({ type: 'varchar', length: 60, nullable: false })
     telefono: number;

     @Column({ type: 'varchar', length: 60, nullable: false })
     correo: string;

     @Column({ type: 'varchar', length: 60, nullable: false })
     edad: number;

     @Column({ type: 'varchar', length: 60, nullable: false })
     sexo: string;

    @Column({ type:'int8', nullable: false})
    user_id: number;
  
}