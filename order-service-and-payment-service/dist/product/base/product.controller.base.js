"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductControllerBase = void 0;
const common = __importStar(require("@nestjs/common"));
const swagger = __importStar(require("@nestjs/swagger"));
const prisma_util_1 = require("../../prisma.util");
const errors = __importStar(require("../../errors"));
const class_transformer_1 = require("class-transformer");
const api_nested_query_decorator_1 = require("../../decorators/api-nested-query.decorator");
const nestAccessControl = __importStar(require("nest-access-control"));
const defaultAuthGuard = __importStar(require("../../auth/defaultAuth.guard"));
const product_service_1 = require("../product.service");
const aclValidateRequest_interceptor_1 = require("../../interceptors/aclValidateRequest.interceptor");
const aclFilterResponse_interceptor_1 = require("../../interceptors/aclFilterResponse.interceptor");
const ProductCreateInput_1 = require("./ProductCreateInput");
const Product_1 = require("./Product");
const ProductFindManyArgs_1 = require("./ProductFindManyArgs");
const ProductWhereUniqueInput_1 = require("./ProductWhereUniqueInput");
const ProductUpdateInput_1 = require("./ProductUpdateInput");
const OrderFindManyArgs_1 = require("../../order/base/OrderFindManyArgs");
let ProductControllerBase = class ProductControllerBase {
    service;
    rolesBuilder;
    constructor(service, rolesBuilder) {
        this.service = service;
        this.rolesBuilder = rolesBuilder;
    }
    async createProduct(data) {
        return await this.service.createProduct({
            data: data,
            select: {
                createdAt: true,
                description: true,
                id: true,
                itemPrice: true,
                name: true,
                updatedAt: true,
            },
        });
    }
    async products(request) {
        const args = (0, class_transformer_1.plainToClass)(ProductFindManyArgs_1.ProductFindManyArgs, request.query);
        return this.service.products({
            ...args,
            select: {
                createdAt: true,
                description: true,
                id: true,
                itemPrice: true,
                name: true,
                updatedAt: true,
            },
        });
    }
    async product(params) {
        const result = await this.service.product({
            where: params,
            select: {
                createdAt: true,
                description: true,
                id: true,
                itemPrice: true,
                name: true,
                updatedAt: true,
            },
        });
        if (result === null) {
            throw new errors.NotFoundException(`No resource was found for ${JSON.stringify(params)}`);
        }
        return result;
    }
    async updateProduct(params, data) {
        try {
            return await this.service.updateProduct({
                where: params,
                data: data,
                select: {
                    createdAt: true,
                    description: true,
                    id: true,
                    itemPrice: true,
                    name: true,
                    updatedAt: true,
                },
            });
        }
        catch (error) {
            if ((0, prisma_util_1.isRecordNotFoundError)(error)) {
                throw new errors.NotFoundException(`No resource was found for ${JSON.stringify(params)}`);
            }
            throw error;
        }
    }
    async deleteProduct(params) {
        try {
            return await this.service.deleteProduct({
                where: params,
                select: {
                    createdAt: true,
                    description: true,
                    id: true,
                    itemPrice: true,
                    name: true,
                    updatedAt: true,
                },
            });
        }
        catch (error) {
            if ((0, prisma_util_1.isRecordNotFoundError)(error)) {
                throw new errors.NotFoundException(`No resource was found for ${JSON.stringify(params)}`);
            }
            throw error;
        }
    }
    async findOrders(request, params) {
        const query = (0, class_transformer_1.plainToClass)(OrderFindManyArgs_1.OrderFindManyArgs, request.query);
        const results = await this.service.findOrders(params.id, {
            ...query,
            select: {
                createdAt: true,
                customer: {
                    select: {
                        id: true,
                    },
                },
                discount: true,
                id: true,
                product: {
                    select: {
                        id: true,
                    },
                },
                quantity: true,
                totalPrice: true,
                updatedAt: true,
            },
        });
        if (results === null) {
            throw new errors.NotFoundException(`No resource was found for ${JSON.stringify(params)}`);
        }
        return results;
    }
    async connectOrders(params, body) {
        const data = {
            orders: {
                connect: body,
            },
        };
        await this.service.updateProduct({
            where: params,
            data,
            select: { id: true },
        });
    }
    async updateOrders(params, body) {
        const data = {
            orders: {
                set: body,
            },
        };
        await this.service.updateProduct({
            where: params,
            data,
            select: { id: true },
        });
    }
    async disconnectOrders(params, body) {
        const data = {
            orders: {
                disconnect: body,
            },
        };
        await this.service.updateProduct({
            where: params,
            data,
            select: { id: true },
        });
    }
};
exports.ProductControllerBase = ProductControllerBase;
__decorate([
    common.UseInterceptors(aclValidateRequest_interceptor_1.AclValidateRequestInterceptor),
    common.Post(),
    swagger.ApiCreatedResponse({ type: Product_1.Product }),
    nestAccessControl.UseRoles({
        resource: "Product",
        action: "create",
        possession: "any",
    }),
    swagger.ApiForbiddenResponse({
        type: errors.ForbiddenException,
    }),
    __param(0, common.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ProductCreateInput_1.ProductCreateInput]),
    __metadata("design:returntype", Promise)
], ProductControllerBase.prototype, "createProduct", null);
__decorate([
    common.UseInterceptors(aclFilterResponse_interceptor_1.AclFilterResponseInterceptor),
    common.Get(),
    swagger.ApiOkResponse({ type: [Product_1.Product] }),
    (0, api_nested_query_decorator_1.ApiNestedQuery)(ProductFindManyArgs_1.ProductFindManyArgs),
    nestAccessControl.UseRoles({
        resource: "Product",
        action: "read",
        possession: "any",
    }),
    swagger.ApiForbiddenResponse({
        type: errors.ForbiddenException,
    }),
    __param(0, common.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductControllerBase.prototype, "products", null);
__decorate([
    common.UseInterceptors(aclFilterResponse_interceptor_1.AclFilterResponseInterceptor),
    common.Get("/:id"),
    swagger.ApiOkResponse({ type: Product_1.Product }),
    swagger.ApiNotFoundResponse({ type: errors.NotFoundException }),
    nestAccessControl.UseRoles({
        resource: "Product",
        action: "read",
        possession: "own",
    }),
    swagger.ApiForbiddenResponse({
        type: errors.ForbiddenException,
    }),
    __param(0, common.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ProductWhereUniqueInput_1.ProductWhereUniqueInput]),
    __metadata("design:returntype", Promise)
], ProductControllerBase.prototype, "product", null);
__decorate([
    common.UseInterceptors(aclValidateRequest_interceptor_1.AclValidateRequestInterceptor),
    common.Patch("/:id"),
    swagger.ApiOkResponse({ type: Product_1.Product }),
    swagger.ApiNotFoundResponse({ type: errors.NotFoundException }),
    nestAccessControl.UseRoles({
        resource: "Product",
        action: "update",
        possession: "any",
    }),
    swagger.ApiForbiddenResponse({
        type: errors.ForbiddenException,
    }),
    __param(0, common.Param()),
    __param(1, common.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ProductWhereUniqueInput_1.ProductWhereUniqueInput,
        ProductUpdateInput_1.ProductUpdateInput]),
    __metadata("design:returntype", Promise)
], ProductControllerBase.prototype, "updateProduct", null);
__decorate([
    common.Delete("/:id"),
    swagger.ApiOkResponse({ type: Product_1.Product }),
    swagger.ApiNotFoundResponse({ type: errors.NotFoundException }),
    nestAccessControl.UseRoles({
        resource: "Product",
        action: "delete",
        possession: "any",
    }),
    swagger.ApiForbiddenResponse({
        type: errors.ForbiddenException,
    }),
    __param(0, common.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ProductWhereUniqueInput_1.ProductWhereUniqueInput]),
    __metadata("design:returntype", Promise)
], ProductControllerBase.prototype, "deleteProduct", null);
__decorate([
    common.UseInterceptors(aclFilterResponse_interceptor_1.AclFilterResponseInterceptor),
    common.Get("/:id/orders"),
    (0, api_nested_query_decorator_1.ApiNestedQuery)(OrderFindManyArgs_1.OrderFindManyArgs),
    nestAccessControl.UseRoles({
        resource: "Order",
        action: "read",
        possession: "any",
    }),
    __param(0, common.Req()),
    __param(1, common.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, ProductWhereUniqueInput_1.ProductWhereUniqueInput]),
    __metadata("design:returntype", Promise)
], ProductControllerBase.prototype, "findOrders", null);
__decorate([
    common.Post("/:id/orders"),
    nestAccessControl.UseRoles({
        resource: "Product",
        action: "update",
        possession: "any",
    }),
    __param(0, common.Param()),
    __param(1, common.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ProductWhereUniqueInput_1.ProductWhereUniqueInput, Array]),
    __metadata("design:returntype", Promise)
], ProductControllerBase.prototype, "connectOrders", null);
__decorate([
    common.Patch("/:id/orders"),
    nestAccessControl.UseRoles({
        resource: "Product",
        action: "update",
        possession: "any",
    }),
    __param(0, common.Param()),
    __param(1, common.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ProductWhereUniqueInput_1.ProductWhereUniqueInput, Array]),
    __metadata("design:returntype", Promise)
], ProductControllerBase.prototype, "updateOrders", null);
__decorate([
    common.Delete("/:id/orders"),
    nestAccessControl.UseRoles({
        resource: "Product",
        action: "update",
        possession: "any",
    }),
    __param(0, common.Param()),
    __param(1, common.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ProductWhereUniqueInput_1.ProductWhereUniqueInput, Array]),
    __metadata("design:returntype", Promise)
], ProductControllerBase.prototype, "disconnectOrders", null);
exports.ProductControllerBase = ProductControllerBase = __decorate([
    swagger.ApiBearerAuth(),
    common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard),
    __metadata("design:paramtypes", [product_service_1.ProductService, nestAccessControl.RolesBuilder])
], ProductControllerBase);
//# sourceMappingURL=product.controller.base.js.map