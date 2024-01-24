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
exports.ProductFindUniqueArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const swagger_1 = require("@nestjs/swagger");
const ProductWhereUniqueInput_1 = require("./ProductWhereUniqueInput");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
let ProductFindUniqueArgs = class ProductFindUniqueArgs {
    where;
};
exports.ProductFindUniqueArgs = ProductFindUniqueArgs;
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        type: () => ProductWhereUniqueInput_1.ProductWhereUniqueInput,
    }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => ProductWhereUniqueInput_1.ProductWhereUniqueInput),
    (0, graphql_1.Field)(() => ProductWhereUniqueInput_1.ProductWhereUniqueInput, { nullable: false }),
    __metadata("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductFindUniqueArgs.prototype, "where", void 0);
exports.ProductFindUniqueArgs = ProductFindUniqueArgs = __decorate([
    (0, graphql_1.ArgsType)()
], ProductFindUniqueArgs);
//# sourceMappingURL=ProductFindUniqueArgs.js.map