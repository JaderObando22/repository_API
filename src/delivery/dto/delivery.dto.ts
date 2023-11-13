
import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';
   
    

export class CreateDeliveryDto {
    @IsNotEmpty()
    @IsNumber()
    id?: number;
    
    @IsNotEmpty()
    @MaxLength(100)
    nombre: string;

    @IsNotEmpty()
    @MaxLength(100)
    apellido: string;

    @IsNotEmpty()
    @MaxLength(100)
    telefono: number;

    @IsNotEmpty()
    @MaxLength(100)
    correo: string;

    @IsNotEmpty()
    @MaxLength(100)
    edad: number;

    @IsNotEmpty()
    @MaxLength(100)
    sexo: string;

    @IsNumber()
    @IsNotEmpty()
    user_id: number;

    

}