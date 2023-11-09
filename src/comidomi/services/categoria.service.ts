import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categoria } from '../entities/categoria.entity';
import { CreateCategoriaDto } from '../dto/categoria.dto';




@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository( Categoria)
    private readonly categoriaRepo: Repository<Categoria>,
  ) {}

 
  async create(createCategoriaDto: CreateCategoriaDto) {
    const categorias = this.categoriaRepo.create(createCategoriaDto);
    await this.categoriaRepo.save(categorias);

    return Categoria;
  }

    //Encontrar una categoria
    findOne(id: number){
      return this.categoriaRepo.findOneBy({id});
    }

    //Mostrar todas las category
    findAll(){
      return this.categoriaRepo.find({
       order: {id: 'ASC' }, 
      });
    }

    //Eliminar un registro de las modelo
    async remove(id: number){
      const Categories = await this.findOne(id);
      await this.categoriaRepo.remove(Categories);
      return 'Categoria sera eliminada satisfactoriamente';
    }

    //Actualizar una modelo
    async update(id: number, cambios: CreateCategoriaDto){
      // aqui se encuentra el modelo
      const oldCategoria = await this.findOne(id);
      //Aqui lo actualizo o lo uno con los nuevos cambios
      const updatedCategoria = await this.categoriaRepo.merge(oldCategoria, cambios);
      //Aqui retornare  a la modelo
      return this.categoriaRepo.save(updatedCategoria);
    }
  }