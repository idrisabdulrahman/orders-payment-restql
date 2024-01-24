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
exports.OrderCreateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const swagger_1 = require("@nestjs/swagger");
const CustomerWhereUniqueInput_1 = require("../../customer/base/CustomerWhereUniqueInput");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const ProductWhereUniqueInput_1 = require("../../product/base/ProductWhereUniqueInput");
let OrderCreateInput = class OrderCreateInput {
    customer;
    discount;
    product;
    quantity;
    totalPrice;
};
exports.OrderCreateInput = OrderCreateInput;
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
    __metadata("design:type", Object)
], OrderCreateInput.prototype, "customer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: Number,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => Number, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], OrderCreateInput.prototype, "discount", void 0);
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
    __metadata("design:type", Object)
], OrderCreateInput.prototype, "product", void 0);
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
], OrderCreateInput.prototype, "quantity", void 0);
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
], OrderCreateInput.prototype, "totalPrice", void 0);
exports.OrderCreateInput = OrderCreateInput = __decorate([
    (0, graphql_1.InputType)()
], OrderCreateInput);
//# sourceMappingURL=OrderCreateInput.js.map