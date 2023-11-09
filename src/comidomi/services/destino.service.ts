import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Destino } from '../entities/destino.entity';
import { CreateDestinoDto } from '../dto/destino.dto';




@Injectable()
export class DestinoService {
  constructor(
    @InjectRepository( Destino)
    private readonly destinoRepo: Repository<Destino>,
  ) {}

 
  async create(createDestinoDto: CreateDestinoDto) {
    const destinos = this.destinoRepo.create(createDestinoDto);
    await this.destinoRepo.save(destinos);

    return Destino;
  }

    //Encontrar una categoria
    findOne(id: number){
      return this.destinoRepo.findOneBy({id});
    }

    //Mostrar todas las category
    findAll(){
      return this.destinoRepo.find({
       order: {id: 'ASC' }, 
      });
    }

    //Eliminar un registro de las modelo
    async remove(id: number){
      const Destinos = await this.findOne(id);
      await this.destinoRepo.remove(Destinos);
      return 'Destino sera eliminada satisfactoriamente';
    }

    //Actualizar una modelo
    async update(id: number, cambios: CreateDestinoDto){
      // aqui se encuentra el modelo
      const oldDestino = await this.findOne(id);
      //Aqui lo actualizo o lo uno con los nuevos cambios
      const updatedDestino = await this.destinoRepo.merge(oldDestino, cambios);
      //Aqui retornare  a la modelo
      return this.destinoRepo.save(updatedDestino);
    }
  }