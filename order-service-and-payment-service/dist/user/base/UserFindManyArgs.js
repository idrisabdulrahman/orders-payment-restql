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
exports.UserFindManyArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const swagger_1 = require("@nestjs/swagger");
const UserWhereInput_1 = require("./UserWhereInput");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const UserOrderByInput_1 = require("./UserOrderByInput");
let UserFindManyArgs = class UserFindManyArgs {
    where;
    orderBy;
    skip;
    take;
};
exports.UserFindManyArgs = UserFindManyArgs;
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: () => UserWhereInput_1.UserWhereInput,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, graphql_1.Field)(() => UserWhereInput_1.UserWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserWhereInput_1.UserWhereInput),
    __metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserFindManyArgs.prototype, "where", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: [UserOrderByInput_1.UserOrderByInput],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, graphql_1.Field)(() => [UserOrderByInput_1.UserOrderByInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => UserOrderByInput_1.UserOrderByInput),
    __metadata("design:type", Array)
], UserFindManyArgs.prototype, "orderBy", void 0);
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
], UserFindManyArgs.prototype, "skip", void 0);
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
], UserFindManyArgs.prototype, "take", void 0);
exports.UserFindManyArgs = UserFindManyArgs = __decorate([
    (0, graphql_1.ArgsType)()
], UserFindManyArgs);
//# sourceMappingURL=UserFindManyArgs.js.map