import { Controller,
    Post,
    Body,
    Get,
    Param,
    ParseIntPipe,
    Delete,
    Patch,
    } from '@nestjs/common';
    import { ComidomiService } from 'src/comidomi/services/comidomi.service';
    import { CreateComidomiDto } from '../dto/comidomi.dto';
    
    
    @Controller('Comidomi')
    export class ComidomiController {
      constructor(private readonly comidomiServices: ComidomiService) {}
    
      @Post()
      async create(@Body() comidomiDto: CreateComidomiDto) {
        return await this.comidomiServices.create(comidomiDto);
      }
     
      @Get() //Este seria para encontrar todo el producto
      findAll() { //Este seria para encontrar uno
        return this.comidomiServices.findAll();
      }
    
      @Get(':id')
      finOne( @Param('id', ParseIntPipe)  id: number) {
        return this.comidomiServices.findOne(id);
      }
       //El param se utiliza para cuando estamos tocando los campos de la base de datos
    
      @Delete(':id')
      remove(@Param('id', ParseIntPipe) id: number) {
       return this.comidomiServices.remove(id);
      }
    
      //El metodo Patch actualiza parcialmente, solamente lo necesario
      // Los pipes son transformadores, transforman la data
      @Patch(':id')
      update( 
        @Param('id', ParseIntPipe) id: number,
        @Body() createComidomiDto:CreateComidomiDto, 
        ) {
          return this.comidomiServices.update(id,createComidomiDto)
        }
      }