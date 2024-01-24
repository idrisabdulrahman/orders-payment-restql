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
exports.OrderFindManyArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const swagger_1 = require("@nestjs/swagger");
const OrderWhereInput_1 = require("./OrderWhereInput");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const OrderOrderByInput_1 = require("./OrderOrderByInput");
let OrderFindManyArgs = class OrderFindManyArgs {
    where;
    orderBy;
    skip;
    take;
};
exports.OrderFindManyArgs = OrderFindManyArgs;
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: () => OrderWhereInput_1.OrderWhereInput,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, graphql_1.Field)(() => OrderWhereInput_1.OrderWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => OrderWhereInput_1.OrderWhereInput),
    __metadata("design:type", OrderWhereInput_1.OrderWhereInput)
], OrderFindManyArgs.prototype, "where", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: [OrderOrderByInput_1.OrderOrderByInput],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, graphql_1.Field)(() => [OrderOrderByInput_1.OrderOrderByInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => OrderOrderByInput_1.OrderOrderByInput),
    __metadata("design:type", Array)
], OrderFindManyArgs.prototype, "orderBy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: Number,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], OrderFindManyArgs.prototype, "skip", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: Number,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], OrderFindManyArgs.prototype, "take", void 0);
exports.OrderFindManyArgs = OrderFindManyArgs = __decorate([
    (0, graphql_1.ArgsType)()
], OrderFindManyArgs);
//# sourceMappingURL=OrderFindManyArgs.js.map