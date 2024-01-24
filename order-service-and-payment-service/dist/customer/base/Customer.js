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
exports.Customer = void 0;
const graphql_1 = require("@nestjs/graphql");
const swagger_1 = require("@nestjs/swagger");
const Address_1 = require("../../address/base/Address");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const Order_1 = require("../../order/base/Order");
let Customer = class Customer {
    address;
    createdAt;
    email;
    firstName;
    id;
    lastName;
    orders;
    phone;
    updatedAt;
};
exports.Customer = Customer;
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: () => Address_1.Address,
    }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Address_1.Address),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], Customer.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
    }),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    (0, graphql_1.Field)(() => Date),
    __metadata("design:type", Date)
], Customer.prototype, "createdAt", void 0);
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
], Customer.prototype, "email", void 0);
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
], Customer.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        type: String,
    }),
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Customer.prototype, "id", void 0);
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
], Customer.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: () => [Order_1.Order],
    }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Order_1.Order),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], Customer.prototype, "orders", void 0);
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
], Customer.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
    }),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    (0, graphql_1.Field)(() => Date),
    __metadata("design:type", Date)
], Customer.prototype, "updatedAt", void 0);
exports.Customer = Customer = __decorate([
    (0, graphql_1.ObjectType)()
], Customer);
//# sourceMappingURL=Customer.js.map