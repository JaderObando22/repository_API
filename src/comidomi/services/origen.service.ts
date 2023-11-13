import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Origen } from '../entities/origen.entity';
import { CreateOrigenDto } from '../dto/origen.dto';




@Injectable()
export class OrigenService {
  constructor(
    @InjectRepository(Origen)
    private readonly origenRepo: Repository<Origen>,
  ) {}

 
  async create(createOrigenDto: CreateOrigenDto) {
    const origenes = this.origenRepo.create(createOrigenDto);
    await this.origenRepo.save(origenes);

    return Origen;
  }

    //Encontrar un origen
    findOne(id: number){
      return this.origenRepo.findOneBy({id});
    }

    //Mostrar todas los origenes
    findAll(){
      return this.origenRepo.find({
       order: {id: 'ASC' }, 
      });
    }

    //Eliminar un registro de las modelo
    async remove(id: number){
      const Origenes = await this.findOne(id);
      await this.origenRepo.remove(Origenes);
      return 'Origen sera eliminada satisfactoriamente';
    }

    //Actualizar una modelo
    async update(id: number, cambios: CreateOrigenDto){
      // aqui se encuentra el modelo
      const oldOrigen = await this.findOne(id);
      //Aqui lo actualizo o lo uno con los nuevos cambios
      const updatedOrigen = await this.origenRepo.merge(oldOrigen, cambios);
      //Aqui retornare  a la modelo
      return this.origenRepo.save(updatedOrigen);
    }
  }