import { Controller,
    Post,
     Body, 
     Get, 
     Param,
     ParseIntPipe,
     Delete, 
     Patch,
     } from '@nestjs/common';
import { CreateOrigenDto,  } from '../dto/origen.dto';
import { OrigenService, } from '../services/origen.service';
import { Origen } from '../entities/origen.entity';

  
  
  @Controller('Origen')
  
  export class OrigenController {
   constructor(private readonly OrigenService: OrigenService) {}
  
   @Post()
   async create(@Body() OrigenDto: CreateOrigenDto) {
     return await this.OrigenService.create(OrigenDto);
   }

   @Get() //Este seria para encontrar todo el producto
   findAll() { //Este seria para encontrar uno
     return this.OrigenService.findAll();
   }
  
   @Get(':id')
   finOne( @Param('id', ParseIntPipe)  id: number) {
     return this.OrigenService.findOne(id);
   }
    
   @Delete(':id')
   remove(@Param('id', ParseIntPipe) id: number) {
    return this.OrigenService.remove(id);
   }
  
   @Patch(':id')
   update( 
     @Param('id', ParseIntPipe) id: number,
     @Body() createOrigenDto:CreateOrigenDto, 
     ) {
       return this.OrigenService.update(id,createOrigenDto)
     }
   }