import { Controller,
    Post,
     Body, 
     Get, 
     Param,
     ParseIntPipe,
     Delete, 
     Patch,
     } from '@nestjs/common';
import { CreateUsuariosDto } from '../dto/usuario.dto';
import { UsuariosService } from '../services/usuario.service';
import { LoginUsuariosDto } from '../dto/login-usuario.dto';


 @Controller('Usuarios')
 export class UsuariosController {
   constructor(private readonly UsuarioService: UsuariosService) {
   }

   /*@Post('login')
   async login(@Body() login: LoginUsuariosDto){
    return this.UsuarioService.login(login);
   } */

   @Post()
   async create(@Body() UsuariosDto: CreateUsuariosDto ) {
     return await this.UsuarioService.create(UsuariosDto);
   }

   @Get() 
   findAll() { 
     return this.UsuarioService.findAll();
   }
 
   @Get(':id')
   finOne( @Param('id', ParseIntPipe)  id: number) {
     return this.UsuarioService.findOne(id);
   }
    
 
   @Delete(':id')
   remove(@Param('id', ParseIntPipe) id: number) {
    return this.UsuarioService.remove(id);
   }
 
   
   @Patch(':id')
   update( 
     @Param('id', ParseIntPipe) id: number,
     @Body() createUsuariosDto:CreateUsuariosDto, 
     ) {
       return this.UsuarioService.update(id,createUsuariosDto)
     }
   }