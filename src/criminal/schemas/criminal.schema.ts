import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type CriminalDocument = Criminal & Document;

@Schema({
    timestamps:true
})

export class Criminal{
    @Prop({
        unique:true,
        required:true,
        trim:true
    })
    idCriminal:string;
    
    @Prop({
        required:true,
        trim:true
    })
    name:string;

    @Prop({
        required:true,
        trim:true
    })
    lastname:string;

    @Prop({
        trim:true
    })
    alias:string;

    @Prop()
    date?:Date;

    @Prop({
        required:true,
        trim:true
    })
    genero:string;

    @Prop({
        trim:true
    })
    direccion:string;

    @Prop({
        trim:true
    })
    image_url_uno:string;

    @Prop({
        trim:true
    })
    image_url_dos:string;

    @Prop({
        trim:true
    })
    image_url_tres:string;

    @Prop({
        trim:true
    })
    historial:string;

    @Prop({
        trim:true
    })
    restriccion:string;

    @Prop({
        trim:true
    })
    ojosColor:string;

    @Prop({
        trim:true
    })
    pielColor:string;

    @Prop()
    altura:number;

    @Prop()
    peso:number;

    @Prop({
        trim:true
    })
    notaAdicional:string;

}



export const CriminalSchema = SchemaFactory.createForClass(Criminal);









