import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Usuarios } from '../entities/usuarios.entity';
import { DataSource, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUsuariosDto } from '../dto/usuario.dto';
import { UsuariosImage } from '../entities/usuario-image.entity';
import * as bcrypt from 'bcrypt'
import { LoginUsuariosDto } from '../dto/login-usuario.dto';


@Injectable()
export class UsuariosService{
  constructor(
    @InjectRepository(Usuarios)
    private usuariosRepo: Repository<Usuarios>,

    @InjectRepository(UsuariosImage)
    private usuarioImageRepo: Repository<UsuariosImage>,

    private readonly dataSource: DataSource
  ){}

  async create (createUsuarioDto: CreateUsuariosDto){
    const {images = [], password, ...detailUsuarios} = createUsuarioDto;
    const usuario = await this.usuariosRepo.create({
        ...detailUsuarios,
        password: bcrypt.hashSync(password, 10),
        images:images.map((image) => this.usuarioImageRepo.create({url:image}))
  })
    
    const Usuarios = await this.usuariosRepo.create({
      ...detailUsuarios,
      images:images.map((image) => 
       this.usuarioImageRepo.create({url:image}))
    })

      await this.usuariosRepo.save(usuario);
      return usuario;
    }

    async login(login: LoginUsuariosDto) {
        const { password, email } = login;
        const usuario = await this.usuariosRepo.findOne({
            where: { email },
            select: { password: true, email: true },
        });

        if (!usuario) {
            throw new UnauthorizedException(
             'Credenciuales no validas, correo no encontrado',
            );
        }
         //Comparar si la password ingresada es la misma que esta en la base de datos
        if(!bcrypt.compareSync(password, (await usuario).password)){
            throw new UnauthorizedException(
                'Credenciales no validas, password incorrecto',
            );
        }

        return usuario;
    }


    //Encontrar un usuario
    findOne(id: number){
        return this.usuariosRepo.findOne({  
            where:{id},
            relations:{
            autor:true
        }});
    }
    //mostrar todos los usuarios
    findAll(){
        return   this.usuariosRepo.find({
            order: {id: 'ASC'},
            relations:{
            images:true}
        });
    }
    //eliminar un usuario
    async remove(id:number){
        const usuario =await this.findOne(id);
        await this.usuariosRepo.remove(usuario);
        return 'Usuario eliminado';
    }

    //actualizar un usuario
    // async update(id: number, cambios: CreateUsuarioDto){
    //     const oldUser = await this.findOne(id);
    //     const updateUser = await this.userRepo.merge(oldUser, cambios);
    //     return this.userRepo.save(updateUser);
    // }

    async update(id: number, usuariosDto: CreateUsuariosDto){
        const {images, ...updateAll} = usuariosDto
        const usuarios = await this.usuariosRepo.preload({
            id:id,
            ... updateAll
        });

        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();

        if(images){
            await queryRunner.manager.delete(UsuariosImage, {usuarios: {id}});

            usuarios.images = images.map((image)=>
                this.usuarioImageRepo.create({url: image}),
            )

        }else{
            usuarios.images =await this.usuarioImageRepo.findBy({ usuarios: {id}});
        }

        await queryRunner.manager.save(usuarios);

        await queryRunner.commitTransaction();
        await queryRunner.release();

        return usuarios;
    }
}