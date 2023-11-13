
import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';
   
    

export class CreateDestinoDto {
    @IsNotEmpty()
    @IsNumber()
    id?: number;

    @IsNumber()
    @IsNotEmpty()
    user_id: number;

    @IsString()
    @IsNotEmpty()
    lugar: string;

    @IsString()
    @IsNotEmpty()
    direccion: string;

    @IsNumber()
    @IsNotEmpty()
    created_at: Date;
    

}