
import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';
   
    

export class CreateOrigenDto {
    @IsNotEmpty()
    @IsNumber()
    id?: number;

    @IsString()
    @IsNotEmpty()
    user_id: number;

    @IsString()
    @IsNotEmpty()
    lugar: string;

    @IsString()
    @IsNotEmpty()
    recorrido: string;

    @IsString()
    @IsNotEmpty()
    destino: string;

    @IsNumber()
    @IsNotEmpty()
    created_at: Date;
    

}