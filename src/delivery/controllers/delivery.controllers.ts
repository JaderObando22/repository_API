import { Controller,
    Post,
     Body, 
     Get, 
     Param,
     ParseIntPipe,
     Delete, 
     Patch,
     } from '@nestjs/common';
import { CreateDeliveryDto } from '../dto/delivery.dto';
import { DeliveryService } from '../services/delivery.service';
import { Delivery } from 'src/delivery/entities/delivery.entity';

  
  
  @Controller('Delivery')
  
  export class DeliveryController {
   constructor(private readonly DeliveryService: DeliveryService) {}
  
   @Post()
   async create(@Body() DeliveryDto: CreateDeliveryDto) {
     return await this.DeliveryService.create(DeliveryDto);
   }

   @Get() 
   findAll() { 
     return this.DeliveryService.findAll();
   }
  
   @Get(':id')
   finOne( @Param('id', ParseIntPipe)  id: number) {
     return this.DeliveryService.findOne(id);
   }
    
   @Delete(':id')
   remove(@Param('id', ParseIntPipe) id: number) {
    return this.DeliveryService.remove(id);
   }
  
   @Patch(':id')
   update( 
     @Param('id', ParseIntPipe) id: number,
     @Body() createDeliveryDto:CreateDeliveryDto, 
     ) {
       return this.DeliveryService.update(id,createDeliveryDto)
     }
   }