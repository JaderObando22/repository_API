import { IsArray, IsDateString, IsNotEmpty, IsNumber,IsOptional,IsString, MaxLength } from "class-validator";

export class CreateComidomiDto {
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    comida: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(300)
    descripcion: string;

    @IsNumber()
    @IsNotEmpty()
    precio: number;

    @IsNumber()
    @IsNotEmpty()
    direccion: string;

    @IsDateString()
    @IsOptional()
    origen_id: string;

    @IsDateString()
    @IsOptional()
    destino_id: string;

    @IsDateString()
    @IsOptional()
    categoria_id: string;

    @IsArray( {each: true })
    @IsString()
    @IsOptional()
    images?: string[];



}