import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class LoginUsuariosDto {
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}