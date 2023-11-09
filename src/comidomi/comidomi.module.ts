import {  Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comidomi } from './entities/comidomi.entity';
import { ComidomiController } from './controllers/comidomi.controller';
import { ComidomiService } from 'src/comidomi/services/comidomi.service';
import { ComidomiImage } from './entities/comidomi-image.entity';
import { Categoria } from './entities/categoria.entity';
import { CategoriaController } from './controllers/categoria.controller';
import { Proveedor } from './entities/proveedor.entity';
import { ProveedorController } from './controllers/proveedor.controller';
import { CategoriaService } from './services/categoria.service';
import { ProveedorService } from './services/proveedor.service';


@Module({
    imports: [TypeOrmModule.forFeature([Comidomi, ComidomiImage, Categoria, Proveedor])], 
    controllers: [ComidomiController, CategoriaController, ProveedorController],
    //Aqui van los controladorres
    providers: [ ComidomiService, CategoriaService, ProveedorService, ],
    // aqui van los servicios
   
})
export class ComidomiModule{}