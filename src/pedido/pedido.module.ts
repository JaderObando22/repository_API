import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { PedidoService } from 'src/pedido/services/pedido.service';
import { PedidoController } from './controllers/pedido.controllers';
import { Pedido } from 'src/pedido/entities/pedido.entity';


@Module ({
  imports: [TypeOrmModule.forFeature([Pedido])],
  controllers: [PedidoController],
  providers: [PedidoService],
})
export class PedidoModule{}