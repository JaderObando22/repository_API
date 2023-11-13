import { Controller,
    Post,
     Body, 
     Get, 
     Param,
     ParseIntPipe,
     Delete, 
     Patch,
     } from '@nestjs/common';
import { CreateClienteDto } from '../dto/cliente.dto';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from 'src/cliente/entities/cliente.entity';

  
  
  @Controller('cliente')
  
  export class ClienteController {
   constructor(private readonly ClienteService: ClienteService) {}
  
   @Post()
   async create(@Body() ClienteDto: CreateClienteDto) {
     return await this.ClienteService.create(ClienteDto);
   }

   @Get() 
   findAll() { 
     return this.ClienteService.findAll();
   }
  
   @Get(':id')
   finOne( @Param('id', ParseIntPipe)  id: number) {
     return this.ClienteService.findOne(id);
   }
    
   @Delete(':id')
   remove(@Param('id', ParseIntPipe) id: number) {
    return this.ClienteService.remove(id);
   }
  
   @Patch(':id')
   update( 
     @Param('id', ParseIntPipe) id: number,
     @Body() CreateClienteDto:CreateClienteDto, 
     ) {
       return this.ClienteService.update(id,CreateClienteDto)
     }
   }