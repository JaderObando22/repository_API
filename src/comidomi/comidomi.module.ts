import {  Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comidomi } from 'src/comidomi/entities/comidomi.entity';
import { ComidomiController } from './controllers/comidomi.controller';
import { ComidomiService } from 'src/comidomi/services/comidomi.service';
import { ComidomiImage } from './entities/comidomi-image.entity';
import { Categoria } from './entities/categoria.entity';
import { CategoriaController } from './controllers/categoria.controller';
import { Proveedor } from './entities/proveedor.entity';
import { ProveedorController } from './controllers/proveedor.controller';
import { CategoriaService } from './services/categoria.service';
import { ProveedorService } from './services/proveedor.service';
import { Origen } from './entities/origen.entity';
import { Destino } from './entities/destino.entity';
import { Pedido } from 'src/pedido/entities/pedido.entity';



@Module({
    imports: [TypeOrmModule.forFeature([Comidomi, ComidomiImage, Categoria, Proveedor, Origen, Destino, Pedido])], 
    controllers: [ComidomiController, CategoriaController, ProveedorController],
    //Aqui van los controladorres
    providers: [ ComidomiService, CategoriaService, ProveedorService ],
    // aqui van los servicios
   
})
export class ComidomiModule{}