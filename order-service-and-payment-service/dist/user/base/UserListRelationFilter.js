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
exports.UserListRelationFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const swagger_1 = require("@nestjs/swagger");
const UserWhereInput_1 = require("./UserWhereInput");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
let UserListRelationFilter = class UserListRelationFilter {
    every;
    some;
    none;
};
exports.UserListRelationFilter = UserListRelationFilter;
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: () => UserWhereInput_1.UserWhereInput,
    }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => UserWhereInput_1.UserWhereInput),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => UserWhereInput_1.UserWhereInput, {
        nullable: true,
    }),
    __metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserListRelationFilter.prototype, "every", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: () => UserWhereInput_1.UserWhereInput,
    }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => UserWhereInput_1.UserWhereInput),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => UserWhereInput_1.UserWhereInput, {
        nullable: true,
    }),
    __metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserListRelationFilter.prototype, "some", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: () => UserWhereInput_1.UserWhereInput,
    }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => UserWhereInput_1.UserWhereInput),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => UserWhereInput_1.UserWhereInput, {
        nullable: true,
    }),
    __metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserListRelationFilter.prototype, "none", void 0);
exports.UserListRelationFilter = UserListRelationFilter = __decorate([
    (0, graphql_1.InputType)()
], UserListRelationFilter);
//# sourceMappingURL=UserListRelationFilter.js.map