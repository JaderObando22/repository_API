import { IsArray, IsNotEmpty, IsNumber, IsNumberString, IsOptional, IsString, MaxLength } from 'class-validator';
    

    export class CreateUsuariosDto {
        @IsNotEmpty()
        @IsNumber()
        id?: number;
         

        @IsString()
        @IsNotEmpty()
        @MaxLength(100)
        name: string;

        @IsString()
        @IsNotEmpty()
        @MaxLength(300)
        email: string;

        @IsString()
        @IsNotEmpty()
        password: number;

        @IsString()
        @IsNotEmpty()
        @MaxLength(200)
        sexo: string;

        @IsString()
        @IsNotEmpty()
        @MaxLength(300)
        active:  boolean;

        @IsNumber()
        @IsNotEmpty()
        stock: number;

        @IsArray( {each: true })
        @IsString()
        @IsOptional()
        images?: string[];


    }