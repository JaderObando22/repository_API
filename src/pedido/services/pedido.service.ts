import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePedidoDto } from '../dto/pedido.dto';
import { Pedido } from 'src/pedido/entities/pedido.entity';



@Injectable()
export class PedidoService {
  constructor(
    @InjectRepository( Pedido)
    private readonly pedidoRepo: Repository<Pedido>,
  ) {}

 
  async create(createPedidoDto: CreatePedidoDto) {
    const pedido = this.pedidoRepo.create(createPedidoDto);
    await this.pedidoRepo.save(pedido);

    return Pedido;
  }

    //Encontrar una marca
    findOne(id: number){
      return this.pedidoRepo.findOneBy({id});
    }

    //Mostrar todas las marcas 
    findAll(){
      return this.pedidoRepo.find({
       order: {id: 'ASC' }, 
      });
    }

    //Eliminar un registro de las marcas
    async remove(id: number){
      const Pedidos = await this.findOne(id);
      await this.pedidoRepo.remove(Pedidos);
      return 'Marca sera eliminada satisfactoriamente';
    }

    //Actualizar una marca 
    async update(id: number, cambios: CreatePedidoDto){
      // aqui se encuentra la marca
      const oldPedido = await this.findOne(id);
      //Aqui lo actualizo o lo uno con los nuevos cambios
      const updatedPedido = await this.pedidoRepo.merge(oldPedido, cambios);
      //Aqui retornare  a la marca
      return this.pedidoRepo.save(updatedPedido);
    }
  }