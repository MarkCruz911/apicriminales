import { PartialType } from '@nestjs/mapped-types';
import { CreateCriminalDto } from './create-criminal.dto';
import { IsString, IsBoolean,IsOptional, IsNotEmpty, IsDate, IsNumber } from "class-validator";

export class UpdateCriminalDto extends PartialType(CreateCriminalDto) {
    @IsString()
    @IsOptional()
    idCriminal?:string;
    
    @IsString()
    @IsOptional()
    name?:string;

    @IsString()
    @IsOptional()
    lastname?:string;

    @IsString()
    @IsOptional()
    alias?:string;

    @IsDate()
    @IsOptional()
    date?:Date;

    @IsString()
    @IsOptional()
    genero?:string;

    @IsString()
    @IsOptional()
    direccion?:string;

    @IsString()
    @IsOptional()
    image_url_uno?:string;

    @IsString()
    @IsOptional()
    image_url_dos?:string;

    @IsString()
    @IsOptional()
    image_url_tres?:string;

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
