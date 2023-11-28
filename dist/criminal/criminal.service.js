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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CriminalService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const criminal_schema_1 = require("./schemas/criminal.schema");
const mongoose_2 = require("mongoose");
let CriminalService = class CriminalService {
    constructor(CriminalModel) {
        this.CriminalModel = CriminalModel;
    }
    async create(createCriminalDto) {
        const createdCriminal = this.CriminalModel.create(createCriminalDto);
        return createdCriminal;
    }
    findAll() {
        return this.CriminalModel.find();
    }
    findOne(id) {
        return this.CriminalModel.findById(id);
    }
    update(id, updateCriminalDto) {
        return this.CriminalModel.findByIdAndUpdate(id, updateCriminalDto, { new: true });
    }
    remove(id) {
        return this.CriminalModel.findByIdAndDelete(id);
    }
};
exports.CriminalService = CriminalService;
exports.CriminalService = CriminalService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(criminal_schema_1.Criminal.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CriminalService);
//# sourceMappingURL=criminal.service.js.map