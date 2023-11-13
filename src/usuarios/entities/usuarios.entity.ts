import { Proveedor } from "src/comidomi/entities/proveedor.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UsuariosImage } from "./usuario-image.entity";
import { Categoria } from "src/comidomi/entities/categoria.entity";



@Entity()
export class Usuarios {
@PrimaryGeneratedColumn({type:'int4'}) 
id: number;

@Column({type: 'varchar', nullable: false})
name: string;

@Column({type: 'varchar', nullable: false})
email: string;

@Column({type: 'varchar', nullable: false})
password: number;

@Column({type: 'varchar', nullable: false})
sexo: string;

@Column({type: 'boolean', nullable: true})
active: boolean;

@Column({type: 'int4', nullable: false})
stock: number;

autor: Usuarios;
@OneToMany(() => UsuariosImage, (usuarioImage) => usuarioImage.usuarios, {
    cascade : true
})

images?: UsuariosImage[];

}

