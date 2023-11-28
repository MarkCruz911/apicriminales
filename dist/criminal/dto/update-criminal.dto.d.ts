import { CreateCriminalDto } from './create-criminal.dto';
declare const UpdateCriminalDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateCriminalDto>>;
export declare class UpdateCriminalDto extends UpdateCriminalDto_base {
    idCriminal?: string;
    name?: string;
    lastname?: string;
    alias?: string;
    date?: Date;
    genero?: string;
    direccion?: string;
    image_url_uno?: string;
    image_url_dos?: string;
    image_url_tres?: string;
    historial?: string;
    restriccion?: string;
    ojosColor?: string;
    pielColor?: string;
    altura?: number;
    peso?: number;
    notaAdicional?: string;
}
export {};
