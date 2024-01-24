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
exports.CustomerWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const swagger_1 = require("@nestjs/swagger");
const AddressWhereUniqueInput_1 = require("../../address/base/AddressWhereUniqueInput");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const StringNullableFilter_1 = require("../../util/StringNullableFilter");
const StringFilter_1 = require("../../util/StringFilter");
const OrderListRelationFilter_1 = require("../../order/base/OrderListRelationFilter");
let CustomerWhereInput = class CustomerWhereInput {
    address;
    email;
    firstName;
    id;
    lastName;
    orders;
    phone;
};
exports.CustomerWhereInput = CustomerWhereInput;
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: () => AddressWhereUniqueInput_1.AddressWhereUniqueInput,
    }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => AddressWhereUniqueInput_1.AddressWhereUniqueInput),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => AddressWhereUniqueInput_1.AddressWhereUniqueInput, {
        nullable: true,
    }),
    __metadata("design:type", AddressWhereUniqueInput_1.AddressWhereUniqueInput)
], CustomerWhereInput.prototype, "address", void 0);
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
], CustomerWhereInput.prototype, "email", void 0);
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
], CustomerWhereInput.prototype, "firstName", void 0);
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
], CustomerWhereInput.prototype, "id", void 0);
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
], CustomerWhereInput.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: () => OrderListRelationFilter_1.OrderListRelationFilter,
    }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => OrderListRelationFilter_1.OrderListRelationFilter),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => OrderListRelationFilter_1.OrderListRelationFilter, {
        nullable: true,
    }),
    __metadata("design:type", OrderListRelationFilter_1.OrderListRelationFilter)
], CustomerWhereInput.prototype, "orders", void 0);
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
], CustomerWhereInput.prototype, "phone", void 0);
exports.CustomerWhereInput = CustomerWhereInput = __decorate([
    (0, graphql_1.InputType)()
], CustomerWhereInput);
//# sourceMappingURL=CustomerWhereInput.js.map