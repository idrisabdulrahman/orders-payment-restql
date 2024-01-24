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
exports.AddressWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const swagger_1 = require("@nestjs/swagger");
const StringNullableFilter_1 = require("../../util/StringNullableFilter");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const CustomerListRelationFilter_1 = require("../../customer/base/CustomerListRelationFilter");
const StringFilter_1 = require("../../util/StringFilter");
const IntNullableFilter_1 = require("../../util/IntNullableFilter");
let AddressWhereInput = class AddressWhereInput {
    address_1;
    address_2;
    city;
    customers;
    id;
    state;
    zip;
};
exports.AddressWhereInput = AddressWhereInput;
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: StringNullableFilter_1.StringNullableFilter,
    }),
    (0, class_transformer_1.Type)(() => StringNullableFilter_1.StringNullableFilter),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => StringNullableFilter_1.StringNullableFilter, {
        nullable: true,
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], AddressWhereInput.prototype, "address_1", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: StringNullableFilter_1.StringNullableFilter,
    }),
    (0, class_transformer_1.Type)(() => StringNullableFilter_1.StringNullableFilter),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => StringNullableFilter_1.StringNullableFilter, {
        nullable: true,
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], AddressWhereInput.prototype, "address_2", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: StringNullableFilter_1.StringNullableFilter,
    }),
    (0, class_transformer_1.Type)(() => StringNullableFilter_1.StringNullableFilter),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => StringNullableFilter_1.StringNullableFilter, {
        nullable: true,
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], AddressWhereInput.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: () => CustomerListRelationFilter_1.CustomerListRelationFilter,
    }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => CustomerListRelationFilter_1.CustomerListRelationFilter),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => CustomerListRelationFilter_1.CustomerListRelationFilter, {
        nullable: true,
    }),
    __metadata("design:type", CustomerListRelationFilter_1.CustomerListRelationFilter)
], AddressWhereInput.prototype, "customers", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: StringFilter_1.StringFilter,
    }),
    (0, class_transformer_1.Type)(() => StringFilter_1.StringFilter),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => StringFilter_1.StringFilter, {
        nullable: true,
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], AddressWhereInput.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: StringNullableFilter_1.StringNullableFilter,
    }),
    (0, class_transformer_1.Type)(() => StringNullableFilter_1.StringNullableFilter),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => StringNullableFilter_1.StringNullableFilter, {
        nullable: true,
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], AddressWhereInput.prototype, "state", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: IntNullableFilter_1.IntNullableFilter,
    }),
    (0, class_transformer_1.Type)(() => IntNullableFilter_1.IntNullableFilter),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => IntNullableFilter_1.IntNullableFilter, {
        nullable: true,
    }),
    __metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], AddressWhereInput.prototype, "zip", void 0);
exports.AddressWhereInput = AddressWhereInput = __decorate([
    (0, graphql_1.InputType)()
], AddressWhereInput);
//# sourceMappingURL=AddressWhereInput.js.map