import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, } from 'typeorm';
import { Comidomi } from './comidomi.entity';


@Entity()
export class ComidomiImage {
    @PrimaryGeneratedColumn({ type: 'int4' })
    id: number;

    @Column({ type: 'varchar', nullable: true })
    url: string

//relaciones

//TODO: escribir una relacion que se llamara comidomi

//muchas imagenes seran de un producto
@ManyToOne(() => Comidomi, (comidomi) => comidomi.images, {
    onDelete: 'CASCADE',
})
comidomi: Comidomi;
}

