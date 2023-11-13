import { Controller,
    Post,
     Body, 
     Get, 
     Param,
     ParseIntPipe,
     Delete, 
     Patch,
     } from '@nestjs/common';
import { CreateDestinoDto,  } from '../dto/destino.dto';
import { DestinoService, } from '../services/destino.service';
import { Destino } from '../entities/destino.entity';

  
   @Controller('Destino')
  
   export class DestinoController {
   constructor(private readonly DestinoService: DestinoService) {}

   @Post()
   async create(@Body() DestinoDto: CreateDestinoDto) {
     return await this.DestinoService.create(DestinoDto);
   }

   @Get() 
   findAll() { 
     return this.DestinoService.findAll();
   }

   @Get(':id')
   finOne( @Param('id', ParseIntPipe)  id: number) {
     return this.DestinoService.findOne(id);
   }
  
   @Delete(':id')
   remove(@Param('id', ParseIntPipe) id: number) {
     return this.DestinoService.remove(id);
   }

   @Patch(':id')
   update( 
     @Param('id', ParseIntPipe) id: number,
     @Body() createDestinoDto:CreateDestinoDto, 
     )  {
     return this.DestinoService.update(id,createDestinoDto)
   }
 }