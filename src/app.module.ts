import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComidomiModule } from './comidomi/comidomi.module';
import { UsuariosModule } from './usuarios/usuario.module';
import { Categoria } from 'src/comidomi/entities/categoria.entity';
import { Proveedor } from './comidomi/entities/proveedor.entity';
import { Destino } from './comidomi/entities/destino.entity';
import { Origen } from './comidomi/entities/origen.entity';

@Module({
  imports: [,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'api',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,

    }),
    ComidomiModule,
    UsuariosModule,
    Categoria,
    Proveedor,
    Destino,
    Origen,



  ],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {

}
