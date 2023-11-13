import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDeliveryDto } from '../dto/delivery.dto';
import { Delivery } from 'src/delivery/entities/delivery.entity';



@Injectable()
export class DeliveryService {
  constructor(
    @InjectRepository( Delivery)
    private readonly deliveryRepo: Repository<Delivery>,
  ) {}

 
  async create(createDeliveryDto: CreateDeliveryDto) {
    const delivery = this.deliveryRepo.create(createDeliveryDto);
    await this.deliveryRepo.save(delivery);

    return Delivery;
  }

    //Encontrar una marca
    findOne(id: number){
      return this.deliveryRepo.findOneBy({id});
    }

    //Mostrar todas las marcas 
    findAll(){
      return this.deliveryRepo.find({
       order: {id: 'ASC' }, 
      });
    }

    //Eliminar un registro de las marcas
    async remove(id: number){
      const Deliverys = await this.findOne(id);
      await this.deliveryRepo.remove(Deliverys);
      return 'Marca sera eliminada satisfactoriamente';
    }

    //Actualizar una marca 
    async update(id: number, cambios: CreateDeliveryDto){
      // aqui se encuentra la marca
      const oldDelivery = await this.findOne(id);
      //Aqui lo actualizo o lo uno con los nuevos cambios
      const updatedDelivery = await this.deliveryRepo.merge(oldDelivery, cambios);
      //Aqui retornare  a la marca
      return this.deliveryRepo.save(updatedDelivery);
    }
  }