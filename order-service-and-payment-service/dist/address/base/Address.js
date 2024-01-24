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
exports.Address = void 0;
const graphql_1 = require("@nestjs/graphql");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const Customer_1 = require("../../customer/base/Customer");
let Address = class Address {
    address_1;
    address_2;
    city;
    createdAt;
    customers;
    id;
    state;
    updatedAt;
    zip;
};
exports.Address = Address;
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: String,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => String, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], Address.prototype, "address_1", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: String,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => String, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], Address.prototype, "address_2", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: String,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => String, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], Address.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
    }),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    (0, graphql_1.Field)(() => Date),
    __metadata("design:type", Date)
], Address.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: () => [Customer_1.Customer],
    }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Customer_1.Customer),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], Address.prototype, "customers", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        type: String,
    }),
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Address.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: String,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => String, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], Address.prototype, "state", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
    }),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    (0, graphql_1.Field)(() => Date),
    __metadata("design:type", Date)
], Address.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: Number,
    }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => Number, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], Address.prototype, "zip", void 0);
exports.Address = Address = __decorate([
    (0, graphql_1.ObjectType)()
], Address);
//# sourceMappingURL=Address.js.map