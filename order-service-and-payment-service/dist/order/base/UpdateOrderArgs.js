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
exports.UpdateOrderArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const swagger_1 = require("@nestjs/swagger");
const OrderWhereUniqueInput_1 = require("./OrderWhereUniqueInput");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const OrderUpdateInput_1 = require("./OrderUpdateInput");
let UpdateOrderArgs = class UpdateOrderArgs {
    where;
    data;
};
exports.UpdateOrderArgs = UpdateOrderArgs;
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        type: () => OrderWhereUniqueInput_1.OrderWhereUniqueInput,
    }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => OrderWhereUniqueInput_1.OrderWhereUniqueInput),
    (0, graphql_1.Field)(() => OrderWhereUniqueInput_1.OrderWhereUniqueInput, { nullable: false }),
    __metadata("design:type", OrderWhereUniqueInput_1.OrderWhereUniqueInput)
], UpdateOrderArgs.prototype, "where", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        type: () => OrderUpdateInput_1.OrderUpdateInput,
    }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => OrderUpdateInput_1.OrderUpdateInput),
    (0, graphql_1.Field)(() => OrderUpdateInput_1.OrderUpdateInput, { nullable: false }),
    __metadata("design:type", OrderUpdateInput_1.OrderUpdateInput)
], UpdateOrderArgs.prototype, "data", void 0);
exports.UpdateOrderArgs = UpdateOrderArgs = __decorate([
    (0, graphql_1.ArgsType)()
], UpdateOrderArgs);
//# sourceMappingURL=UpdateOrderArgs.js.map