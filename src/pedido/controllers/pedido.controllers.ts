import { Controller,
    Post,
     Body, 
     Get, 
     Param,
     ParseIntPipe,
     Delete, 
     Patch,
     } from '@nestjs/common';
import { CreatePedidoDto } from '../dto/pedido.dto';
import { PedidoService } from '../services/pedido.service';
import { Pedido } from '../entities/pedido.entity';

  
  
  @Controller('Pedido')
  
  export class PedidoController {
   constructor(private readonly PedidoService: PedidoService) {}
  
   @Post()
   async create(@Body() PedidoDto: CreatePedidoDto) {
     return await this.PedidoService.create(PedidoDto);
   }

   @Get() 
   findAll() { 
     return this.PedidoService.findAll();
   }

   @Get(':id')
   finOne( @Param('id', ParseIntPipe)  id: number) {
     return this.PedidoService.findOne(id);
   }
    
   @Delete(':id')
   remove(@Param('id', ParseIntPipe) id: number) {
    return this.PedidoService.remove(id);
   }
  
   @Patch(':id')
   update( 
     @Param('id', ParseIntPipe) id: number,
     @Body() createPedidoDto:CreatePedidoDto, 
     ) {
       return this.PedidoService.update(id,createPedidoDto)
     }
   }