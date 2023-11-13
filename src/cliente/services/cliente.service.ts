import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClienteDto } from '../dto/cliente.dto';
import { Cliente } from 'src/cliente/entities/cliente.entity';



@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository( Cliente)
    private readonly clienteRepo: Repository<Cliente>,
  ) {}

 
  async create(CreateClienteDto: CreateClienteDto) {
    const cliente = this.clienteRepo.create(CreateClienteDto);
    await this.clienteRepo.save(cliente);

    return Cliente;
  }

    //Encontrar una marca
    findOne(id: number){
      return this.clienteRepo.findOneBy({id});
    }

    //Mostrar todas las marcas 
    findAll(){
      return this.clienteRepo.find({
       order: {id: 'ASC' }, 
      });
    }

    //Eliminar un registro de las marcas
    async remove(id: number){
      const Clientes = await this.findOne(id);
      await this.clienteRepo.remove(Clientes);
      return 'Marca sera eliminada satisfactoriamente';
    }

    //Actualizar una marca 
    async update(id: number, cambios: CreateClienteDto){
      // aqui se encuentra la marca
      const oldCliente = await this.findOne(id);
      //Aqui lo actualizo o lo uno con los nuevos cambios
      const updateCliente = await this.clienteRepo.merge(oldCliente, cambios);
      //Aqui retornare  a la marca
      return this.clienteRepo.save(updateCliente);
    }
  }