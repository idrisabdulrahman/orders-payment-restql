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
exports.OrderWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const swagger_1 = require("@nestjs/swagger");
const CustomerWhereUniqueInput_1 = require("../../customer/base/CustomerWhereUniqueInput");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const FloatNullableFilter_1 = require("../../util/FloatNullableFilter");
const StringFilter_1 = require("../../util/StringFilter");
const ProductWhereUniqueInput_1 = require("../../product/base/ProductWhereUniqueInput");
const IntNullableFilter_1 = require("../../util/IntNullableFilter");
let OrderWhereInput = class OrderWhereInput {
    customer;
    discount;
    id;
    product;
    quantity;
    totalPrice;
};
exports.OrderWhereInput = OrderWhereInput;
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: () => CustomerWhereUniqueInput_1.CustomerWhereUniqueInput,
    }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => CustomerWhereUniqueInput_1.CustomerWhereUniqueInput),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => CustomerWhereUniqueInput_1.CustomerWhereUniqueInput, {
        nullable: true,
    }),
    __metadata("design:type", CustomerWhereUniqueInput_1.CustomerWhereUniqueInput)
], OrderWhereInput.prototype, "customer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: FloatNullableFilter_1.FloatNullableFilter,
    }),
    (0, class_transformer_1.Type)(() => FloatNullableFilter_1.FloatNullableFilter),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => FloatNullableFilter_1.FloatNullableFilter, {
        nullable: true,
    }),
    __metadata("design:type", FloatNullableFilter_1.FloatNullableFilter)
], OrderWhereInput.prototype, "discount", void 0);
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
], OrderWhereInput.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: () => ProductWhereUniqueInput_1.ProductWhereUniqueInput,
    }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => ProductWhereUniqueInput_1.ProductWhereUniqueInput),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: true,
    }),
    __metadata("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], OrderWhereInput.prototype, "product", void 0);
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
], OrderWhereInput.prototype, "quantity", void 0);
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
], OrderWhereInput.prototype, "totalPrice", void 0);
exports.OrderWhereInput = OrderWhereInput = __decorate([
    (0, graphql_1.InputType)()
], OrderWhereInput);
//# sourceMappingURL=OrderWhereInput.js.map