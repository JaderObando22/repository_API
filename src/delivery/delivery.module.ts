import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { DeliveryService } from 'src/delivery/services/delivery.service';
import { DeliveryController } from './controllers/delivery.controllers';
import { Delivery } from 'src/delivery/entities/delivery.entity';


@Module ({
  imports: [TypeOrmModule.forFeature([Delivery])],
  controllers: [DeliveryController],
  providers: [DeliveryService],
})
export class DeliveryModule{}