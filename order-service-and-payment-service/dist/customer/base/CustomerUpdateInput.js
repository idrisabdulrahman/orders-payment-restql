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
exports.CustomerUpdateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const swagger_1 = require("@nestjs/swagger");
const AddressWhereUniqueInput_1 = require("../../address/base/AddressWhereUniqueInput");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const OrderUpdateManyWithoutCustomersInput_1 = require("./OrderUpdateManyWithoutCustomersInput");
let CustomerUpdateInput = class CustomerUpdateInput {
    address;
    email;
    firstName;
    lastName;
    orders;
    phone;
};
exports.CustomerUpdateInput = CustomerUpdateInput;
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
    __metadata("design:type", Object)
], CustomerUpdateInput.prototype, "address", void 0);
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
], CustomerUpdateInput.prototype, "email", void 0);
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
], CustomerUpdateInput.prototype, "firstName", void 0);
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
], CustomerUpdateInput.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: () => OrderUpdateManyWithoutCustomersInput_1.OrderUpdateManyWithoutCustomersInput,
    }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => OrderUpdateManyWithoutCustomersInput_1.OrderUpdateManyWithoutCustomersInput),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => OrderUpdateManyWithoutCustomersInput_1.OrderUpdateManyWithoutCustomersInput, {
        nullable: true,
    }),
    __metadata("design:type", OrderUpdateManyWithoutCustomersInput_1.OrderUpdateManyWithoutCustomersInput)
], CustomerUpdateInput.prototype, "orders", void 0);
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
], CustomerUpdateInput.prototype, "phone", void 0);
exports.CustomerUpdateInput = CustomerUpdateInput = __decorate([
    (0, graphql_1.InputType)()
], CustomerUpdateInput);
//# sourceMappingURL=CustomerUpdateInput.js.map