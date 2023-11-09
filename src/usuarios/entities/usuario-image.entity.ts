import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, } from 'typeorm';
import { Usuarios } from './usuarios.entity';

@Entity()
export class UsuariosImage {
    @PrimaryGeneratedColumn({ type: 'int4' })
    id: number;

    @Column({ type: 'varchar', nullable: true })
    url: string

//relaciones

//TODO: escribir una relacion que se llamara product

//muchas imagenes seran de un producto
@ManyToOne(() => Usuarios, (usuarios) => usuarios.images, {
    onDelete: 'CASCADE',
})
usuarios: Usuarios;
}

