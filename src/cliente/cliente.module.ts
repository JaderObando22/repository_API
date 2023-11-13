import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ClienteService } from 'src/cliente/services/cliente.service';
import { Cliente } from 'src/cliente/entities/cliente.entity';
import { ClienteController } from './controllers/cliente.controllers';


@Module ({
  imports: [TypeOrmModule.forFeature([Cliente])],
  controllers: [ClienteController],
  providers: [ClienteService],
})
export class ClienteModule{}