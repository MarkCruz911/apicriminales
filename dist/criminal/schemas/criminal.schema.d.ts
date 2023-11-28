/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Document } from "mongoose";
export type CriminalDocument = Criminal & Document;
export declare class Criminal {
    idCriminal: string;
    name: string;
    lastname: string;
    alias: string;
    date?: Date;
    genero: string;
    direccion: string;
    image_url_uno: string;
    image_url_dos: string;
    image_url_tres: string;
    historial: string;
    restriccion: string;
    ojosColor: string;
    pielColor: string;
    altura: number;
    peso: number;
    notaAdicional: string;
}
export declare const CriminalSchema: import("mongoose").Schema<Criminal, import("mongoose").Model<Criminal, any, any, any, Document<unknown, any, Criminal> & Criminal & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Criminal, Document<unknown, {}, import("mongoose").FlatRecord<Criminal>> & import("mongoose").FlatRecord<Criminal> & {
    _id: import("mongoose").Types.ObjectId;
}>;
