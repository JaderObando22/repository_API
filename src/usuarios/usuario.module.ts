import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuarios } from './entities/usuarios.entity';
import { UsuariosController } from './controllers/usuario.controllers';
import { UsuariosService } from './services/usuario.service';
import { UsuariosImage } from './entities/usuario-image.entity';



@Module({
    imports: [TypeOrmModule.forFeature([Usuarios, UsuariosImage])],
    controllers: [UsuariosController],
    providers: [UsuariosService],
    exports: [TypeOrmModule, UsuariosModule]
   
})
export class UsuariosModule{}