import { Controller,
    Post,
     Body, 
     Get, 
     Param,
     ParseIntPipe,
     Delete, 
     Patch,
     } from '@nestjs/common';
import { CreateCategoriaDto,  } from '../dto/categoria.dto';
import { CategoriaService, } from '../services/categoria.service';
import { Categoria } from '../entities/categoria.entity';

  
  
  @Controller('Categoria')
  
  export class CategoriaController {
   constructor(private readonly CategoriaService: CategoriaService) {}
  
   @Post()
   async create(@Body() CategoriaDto: CreateCategoriaDto) {
     return await this.CategoriaService.create(CategoriaDto);
   }

   @Get() //Este seria para encontrar todo el producto
   findAll() { //Este seria para encontrar uno
     return this.CategoriaService.findAll();
   }
  
   @Get(':id')
   finOne( @Param('id', ParseIntPipe)  id: number) {
     return this.CategoriaService.findOne(id);
   }
    
   @Delete(':id')
   remove(@Param('id', ParseIntPipe) id: number) {
    return this.CategoriaService.remove(id);
   }
  
   @Patch(':id')
   update( 
     @Param('id', ParseIntPipe) id: number,
     @Body() createCategoriaDto:CreateCategoriaDto, 
     ) {
       return this.CategoriaService.update(id,createCategoriaDto)
     }
   }