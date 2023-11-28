"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CriminalSchema = exports.Criminal = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Criminal = class Criminal {
};
exports.Criminal = Criminal;
__decorate([
    (0, mongoose_1.Prop)({
        unique: true,
        required: true,
        trim: true
    }),
    __metadata("design:type", String)
], Criminal.prototype, "idCriminal", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        trim: true
    }),
    __metadata("design:type", String)
], Criminal.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        trim: true
    }),
    __metadata("design:type", String)
], Criminal.prototype, "lastname", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        trim: true
    }),
    __metadata("design:type", String)
], Criminal.prototype, "alias", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Criminal.prototype, "date", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        trim: true
    }),
    __metadata("design:type", String)
], Criminal.prototype, "genero", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        trim: true
    }),
    __metadata("design:type", String)
], Criminal.prototype, "direccion", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        trim: true
    }),
    __metadata("design:type", String)
], Criminal.prototype, "image_url_uno", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        trim: true
    }),
    __metadata("design:type", String)
], Criminal.prototype, "image_url_dos", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        trim: true
    }),
    __metadata("design:type", String)
], Criminal.prototype, "image_url_tres", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        trim: true
    }),
    __metadata("design:type", String)
], Criminal.prototype, "historial", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        trim: true
    }),
    __metadata("design:type", String)
], Criminal.prototype, "restriccion", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        trim: true
    }),
    __metadata("design:type", String)
], Criminal.prototype, "ojosColor", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        trim: true
    }),
    __metadata("design:type", String)
], Criminal.prototype, "pielColor", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Criminal.prototype, "altura", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Criminal.prototype, "peso", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        trim: true
    }),
    __metadata("design:type", String)
], Criminal.prototype, "notaAdicional", void 0);
exports.Criminal = Criminal = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true
    })
], Criminal);
exports.CriminalSchema = mongoose_1.SchemaFactory.createForClass(Criminal);
//# sourceMappingURL=criminal.schema.js.map