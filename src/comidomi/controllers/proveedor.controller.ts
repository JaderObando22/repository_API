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
import { CreateProveedorDto } from '../dto/proveedor.dto';
import { ProveedorService } from '../services/proveedor.service';

  
  
  @Controller('proveedor')
  
  export class ProveedorController {
   constructor(private readonly proveedorService: ProveedorService) {}
  
   @Post()
   async create(@Body() ProveedorDto: CreateProveedorDto) {
     return await this.proveedorService.create(ProveedorDto);
   }

   @Get() //Este seria para encontrar todo el producto
   findAll() { //Este seria para encontrar uno
     return this.proveedorService.findAll();
   }
 
   @Get(':id')
   finOne( @Param('id', ParseIntPipe)  id: number) {
     return this.proveedorService.findOne(id);
   }
    
   @Delete(':id')
   remove(@Param('id', ParseIntPipe) id: number) {
    return this.proveedorService.remove(id);
   }
  
   @Patch(':id')
   update( 
     @Param('id', ParseIntPipe) id: number,
     @Body() createProveedorDto:CreateProveedorDto, 
     ) {
       return this.proveedorService.update(id,createProveedorDto)
     }
   }