import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Usuarios } from '../../usuarios/entities/usuarios.entity';
import { Categoria } from './categoria.entity';
import { Proveedor } from './proveedor.entity';
import { ComidomiImage } from './comidomi-image.entity';

@Entity()
export class Comidomi {
    @PrimaryGeneratedColumn({type: 'int4' }) //este decorador hace referencia al primari key
    id?: number;

    @Column({ type: 'varchar', length: 100, nullable: false })
    name: string;

    @Column({ type: 'varchar', length: 300, nullable: false })
    description: string;

    @Column({ type: 'int4', nullable: false})
    price: number;

    @Column({ type: 'int4', nullable: false})
    stock: number;  

    @Column({ type: 'varchar', nullable: true })
    filename: string;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP '})
    created_at: Date

    @Column({ type: 'varchar', nullable: true })
    categoria_id: string;

    @Column({ type: 'varchar', nullable: true })
    proveedor_id: string;

    //relaciones

    @ManyToOne(() => Usuarios)
    @JoinColumn({
    name: 'user_id', //el campo que relaciona a mi tabla
    referencedColumnName: 'id' //este es el ide del usuario
   })
    autor: Usuarios;

    @ManyToOne(() => Categoria)
    @JoinColumn({
    name: 'categoria_id', //el campo que relaciona a mi tabla
    referencedColumnName: 'id' //este es el ide del usuario
   })
    categoria: Categoria;

    @ManyToOne(() => Proveedor)
    @JoinColumn({
    name: 'proveedor_id', //el campo que relaciona a mi tabla
    referencedColumnName: 'id' //este es el ide del usuario
   })
    proveedor: Proveedor;


    // un producto puede tener muchas imagenes
    @OneToMany(() => ComidomiImage, (comidomiImage) => comidomiImage.comidomi, {
        cascade: true
    })

    images?: ComidomiImage[];


    
   
}




    

