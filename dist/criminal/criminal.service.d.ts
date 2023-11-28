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
import { CreateCriminalDto } from './dto/create-criminal.dto';
import { UpdateCriminalDto } from './dto/update-criminal.dto';
import { Criminal } from 'src/criminal/schemas/criminal.schema';
import { Model } from 'mongoose';
export declare class CriminalService {
    private CriminalModel;
    constructor(CriminalModel: Model<Criminal>);
    create(createCriminalDto: CreateCriminalDto): Promise<import("mongoose").Document<unknown, {}, Criminal> & Criminal & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, Criminal> & Criminal & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<unknown, {}, Criminal> & Criminal & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, Criminal, "find">;
    findOne(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, Criminal> & Criminal & {
        _id: import("mongoose").Types.ObjectId;
    }) | null, import("mongoose").Document<unknown, {}, Criminal> & Criminal & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, Criminal, "findOne">;
    update(id: string, updateCriminalDto: UpdateCriminalDto): import("mongoose").Query<(import("mongoose").Document<unknown, {}, Criminal> & Criminal & {
        _id: import("mongoose").Types.ObjectId;
    }) | null, import("mongoose").Document<unknown, {}, Criminal> & Criminal & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, Criminal, "findOneAndUpdate">;
    remove(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, Criminal> & Criminal & {
        _id: import("mongoose").Types.ObjectId;
    }) | null, import("mongoose").Document<unknown, {}, Criminal> & Criminal & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, Criminal, "findOneAndDelete">;
}
