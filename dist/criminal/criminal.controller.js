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
exports.CriminalController = void 0;
const common_1 = require("@nestjs/common");
const criminal_service_1 = require("./criminal.service");
const create_criminal_dto_1 = require("./dto/create-criminal.dto");
const update_criminal_dto_1 = require("./dto/update-criminal.dto");
let CriminalController = class CriminalController {
    constructor(criminalService) {
        this.criminalService = criminalService;
    }
    async create(createCriminalDto) {
        try {
            return this.criminalService.create(createCriminalDto);
        }
        catch (e) {
            if (e.code === 11000) {
                throw new common_1.ConflictException('ya existe');
            }
            throw e;
        }
    }
    async findAll() {
        const criminales = await this.criminalService.findAll();
        if (!criminales)
            throw new common_1.NotFoundException('Criminales not found');
        return criminales;
    }
    async findOne(id) {
        const criminal = await this.criminalService.findOne(id);
        if (!criminal)
            throw new common_1.NotFoundException('Criminal not found');
        return criminal;
    }
    async update(id, updateCriminalDto) {
        const criminal = await this.criminalService.update(id, updateCriminalDto);
        if (!criminal)
            throw new common_1.NotFoundException("Criminal no update");
        return criminal;
    }
    async remove(id) {
        const criminal = await this.criminalService.remove(id);
        if (!criminal)
            throw new common_1.NotFoundException("Criminal no removed");
        return;
    }
};
exports.CriminalController = CriminalController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_criminal_dto_1.CreateCriminalDto]),
    __metadata("design:returntype", Promise)
], CriminalController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CriminalController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CriminalController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_criminal_dto_1.UpdateCriminalDto]),
    __metadata("design:returntype", Promise)
], CriminalController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(204),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CriminalController.prototype, "remove", null);
exports.CriminalController = CriminalController = __decorate([
    (0, common_1.Controller)('criminal'),
    __metadata("design:paramtypes", [criminal_service_1.CriminalService])
], CriminalController);
//# sourceMappingURL=criminal.controller.js.map