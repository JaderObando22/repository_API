
import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';
   
    

export class CreatePedidoDto {
    @IsNotEmpty()
    @IsNumber()
    id?: number;
    
    @IsNotEmpty()
    @MaxLength(100)
    comida: string;

    @IsNotEmpty()
    @MaxLength(100)
    bebida: string;

    @IsNumber()
    @IsNotEmpty()
    precio: number;

    @IsNumber()
    @IsNotEmpty()
    user_id: number;

    

}