import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Comidomi } from 'src/comidomi/entities/comidomi.entity'; 
import { DataSource, Repository } from "typeorm";
import { CreateComidomiDto } from "../dto/comidomi.dto";
import { ComidomiImage } from "../entities/comidomi-image.entity";
import { query } from "express";



@Injectable()
export class ComidomiService{
  constructor(
    @InjectRepository(Comidomi)
    private readonly comidomiRepo: Repository<Comidomi>,

    @InjectRepository( ComidomiImage)
    private readonly comidomiImageRepo: Repository<ComidomiImage>,

    private readonly dataSource: DataSource,
  ){}


  //Este es para crear un registro de productos
  //async create(createProductDto: CreateProductDto) {
    //const product = this.productRepo.create(createProductDto);
    //await this.productRepo.save(product);

    //return product;
  //}

  //crear un comidomi y agregar imagenes
  async create(comidomiDto: CreateComidomiDto) {
    const { images = [], ...detailsComidomi } = comidomiDto;

    const comidomi = await this.comidomiRepo.create({
      ...detailsComidomi,
      images: images.map((image) => 
       this.comidomiImageRepo.create({ url: image })
      ),
    });

    await this.comidomiRepo.save(comidomi);
    return Comidomi;
  }

    //Encontrar un registro de productos
    //Mostrar todos los registros de los productos

    //encontrar un registro
  //findOne (id: number) {
  //return this.productRepo.findOne({ id });
  //}

  //encontrar un registro con relaciones
  findOne(id:number){
    return this.comidomiRepo.findOne ({
      where: { id },
      relations: {
        autor: true,
        },
    });
  } 


    findAll(){
      return this.comidomiRepo.find({
       order: {id: 'ASC' },
       relations: {
        images: true,
       },
      });
    }

    //Eliminar un registro de los productos

    async remove(id: number){
      const Comidomi = await this.findOne(id);
      await this.comidomiRepo.remove(Comidomi);
      return 'Comidomi eliminado satisfactoriamente';
    }

    //Actualizar un producto o un registro de productos

    //async update(id: number, cambios: CreateProductDto){
      // aqui se encuentra el 
      //const oldProduct = await this.findOne(id);
      //Aqui lo actualizo o lo uno con los nuevos cambios
      //const updatedProduct = await this.productRepo.merge(oldProduct, cambios);
      //Aqui retornare  el product
      //return this.productRepo.save(updatedProduct);
     //}

     //actualizar un comidomi con  imagenes

    async update(id:number, cambios: CreateComidomiDto) {
      const { images, ...updateAll } = cambios;
      const comidomi = await this.comidomiRepo.preload({
        id: id,
        ...updateAll,
      })

      //Empecemos a correr nuestro queryRunner, esto seria el punto de partida de nuestra transaccion
      const queryRunner = this.dataSource.createQueryRunner();
      await queryRunner.connect();
      await queryRunner.startTransaction();

      if (images) {
        //Si images no esta vacio, vamos a borrar las imagenes existentes
        await queryRunner.manager.delete(ComidomiImage, { comidomi: { id } });

        //Aqui creamos nuevas imagenes del producto
        comidomi.images = images.map((image) =>
          this.comidomiImageRepo.create({ url: image }),
        );
      } else {
        comidomi.images = await this.comidomiImageRepo.findBy ({ comidomi: { id } });
      }

      //Guardamos el producto
      await queryRunner.manager.save(comidomi);

      //Finalizamos la transaccion y liberamos el queryRunner
      await queryRunner.commitTransaction();
      await queryRunner.release();

      return comidomi;
    }
  }
 
 
