import { Usuarios } from 'src/usuarios/entities/usuarios.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Categoria } from './categoria.entity';
import { Proveedor } from './proveedor.entity';
import { ComidomiImage } from './comidomi-image.entity';

@Entity()
export class Comidomi {
    @PrimaryGeneratedColumn({type: 'int4' }) //este decorador hace referencia al primari key
    id?: number;

    @Column({ type: 'varchar', length: 100, nullable: false })
    comida: string;

    @Column({ type: 'varchar', length: 300, nullable: false })
    descripcion: string;

    @Column({ type: 'int4', nullable: false})
    precio: number;

    @Column({ type: 'varchar', nullable: false})
    direccion: string;  

    @Column({ type: 'int4', nullable: true })
    origen_id: string;

    @Column({ type: 'int4', nullable: true })
    destino_id: string;

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




    

