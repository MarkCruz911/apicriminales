import { IsString, IsBoolean,IsOptional, IsNotEmpty, IsDate, IsNumber } from "class-validator";

export class CreateCriminalDto {
    @IsString()
    @IsNotEmpty()
    idCriminal:string;
    
    @IsString()
    @IsNotEmpty()
    name:string;

    @IsString()
    @IsNotEmpty()
    lastname:string;

    @IsString()
    @IsOptional()
    alias?:string;

    @IsDate()
    @IsOptional()
    date?:Date;

    @IsString()
    @IsNotEmpty()
    genero:string;

    @IsString()
    @IsOptional()
    direccion?:string;

    @IsString()
    @IsNotEmpty()
    image_url_uno:string;

    @IsString()
    @IsNotEmpty()
    image_url_dos:string;

    @IsString()
    @IsNotEmpty()
    image_url_tres:string;

    @IsString()
    @IsOptional()
    historial?:string;

    @IsString()
    @IsOptional()
    restriccion?:string;

    @IsString()
    @IsOptional()
    ojosColor?:string;

    @IsString()
    @IsOptional()
    pielColor?:string;

    @IsNumber()
    @IsOptional()
    altura?:number;

    @IsNumber()
    @IsOptional()
    peso?:number;

    @IsString()
    @IsOptional()
    notaAdicional?:string;
}
