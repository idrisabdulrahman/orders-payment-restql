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
exports.ProductUpdateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const OrderUpdateManyWithoutProductsInput_1 = require("./OrderUpdateManyWithoutProductsInput");
const class_transformer_1 = require("class-transformer");
let ProductUpdateInput = class ProductUpdateInput {
    description;
    itemPrice;
    name;
    orders;
};
exports.ProductUpdateInput = ProductUpdateInput;
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
], ProductUpdateInput.prototype, "description", void 0);
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
], ProductUpdateInput.prototype, "itemPrice", void 0);
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
], ProductUpdateInput.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: () => OrderUpdateManyWithoutProductsInput_1.OrderUpdateManyWithoutProductsInput,
    }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => OrderUpdateManyWithoutProductsInput_1.OrderUpdateManyWithoutProductsInput),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => OrderUpdateManyWithoutProductsInput_1.OrderUpdateManyWithoutProductsInput, {
        nullable: true,
    }),
    __metadata("design:type", OrderUpdateManyWithoutProductsInput_1.OrderUpdateManyWithoutProductsInput)
], ProductUpdateInput.prototype, "orders", void 0);
exports.ProductUpdateInput = ProductUpdateInput = __decorate([
    (0, graphql_1.InputType)()
], ProductUpdateInput);
//# sourceMappingURL=ProductUpdateInput.js.map