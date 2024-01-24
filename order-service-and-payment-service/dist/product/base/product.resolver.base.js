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
exports.ProductResolverBase = void 0;
const graphql = __importStar(require("@nestjs/graphql"));
const graphql_1 = require("graphql");
const prisma_util_1 = require("../../prisma.util");
const MetaQueryPayload_1 = require("../../util/MetaQueryPayload");
const nestAccessControl = __importStar(require("nest-access-control"));
const gqlACGuard = __importStar(require("../../auth/gqlAC.guard"));
const gqlDefaultAuth_guard_1 = require("../../auth/gqlDefaultAuth.guard");
const common = __importStar(require("@nestjs/common"));
const aclFilterResponse_interceptor_1 = require("../../interceptors/aclFilterResponse.interceptor");
const aclValidateRequest_interceptor_1 = require("../../interceptors/aclValidateRequest.interceptor");
const Product_1 = require("./Product");
const ProductCountArgs_1 = require("./ProductCountArgs");
const ProductFindManyArgs_1 = require("./ProductFindManyArgs");
const ProductFindUniqueArgs_1 = require("./ProductFindUniqueArgs");
const CreateProductArgs_1 = require("./CreateProductArgs");
const UpdateProductArgs_1 = require("./UpdateProductArgs");
const DeleteProductArgs_1 = require("./DeleteProductArgs");
const OrderFindManyArgs_1 = require("../../order/base/OrderFindManyArgs");
const Order_1 = require("../../order/base/Order");
const product_service_1 = require("../product.service");
let ProductResolverBase = class ProductResolverBase {
    service;
    rolesBuilder;
    constructor(service, rolesBuilder) {
        this.service = service;
        this.rolesBuilder = rolesBuilder;
    }
    async _productsMeta(args) {
        const result = await this.service.count(args);
        return {
            count: result,
        };
    }
    async products(args) {
        return this.service.products(args);
    }
    async product(args) {
        const result = await this.service.product(args);
        if (result === null) {
            return null;
        }
        return result;
    }
    async createProduct(args) {
        return await this.service.createProduct({
            ...args,
            data: args.data,
        });
    }
    async updateProduct(args) {
        try {
            return await this.service.updateProduct({
                ...args,
                data: args.data,
            });
        }
        catch (error) {
            if ((0, prisma_util_1.isRecordNotFoundError)(error)) {
                throw new graphql_1.GraphQLError(`No resource was found for ${JSON.stringify(args.where)}`);
            }
            throw error;
        }
    }
    async deleteProduct(args) {
        try {
            return await this.service.deleteProduct(args);
        }
        catch (error) {
            if ((0, prisma_util_1.isRecordNotFoundError)(error)) {
                throw new graphql_1.GraphQLError(`No resource was found for ${JSON.stringify(args.where)}`);
            }
            throw error;
        }
    }
    async findOrders(parent, args) {
        const results = await this.service.findOrders(parent.id, args);
        if (!results) {
            return [];
        }
        return results;
    }
};
exports.ProductResolverBase = ProductResolverBase;
__decorate([
    graphql.Query(() => MetaQueryPayload_1.MetaQueryPayload),
    nestAccessControl.UseRoles({
        resource: "Product",
        action: "read",
        possession: "any",
    }),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ProductCountArgs_1.ProductCountArgs]),
    __metadata("design:returntype", Promise)
], ProductResolverBase.prototype, "_productsMeta", null);
__decorate([
    common.UseInterceptors(aclFilterResponse_interceptor_1.AclFilterResponseInterceptor),
    graphql.Query(() => [Product_1.Product]),
    nestAccessControl.UseRoles({
        resource: "Product",
        action: "read",
        possession: "any",
    }),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ProductFindManyArgs_1.ProductFindManyArgs]),
    __metadata("design:returntype", Promise)
], ProductResolverBase.prototype, "products", null);
__decorate([
    common.UseInterceptors(aclFilterResponse_interceptor_1.AclFilterResponseInterceptor),
    graphql.Query(() => Product_1.Product, { nullable: true }),
    nestAccessControl.UseRoles({
        resource: "Product",
        action: "read",
        possession: "own",
    }),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ProductFindUniqueArgs_1.ProductFindUniqueArgs]),
    __metadata("design:returntype", Promise)
], ProductResolverBase.prototype, "product", null);
__decorate([
    common.UseInterceptors(aclValidateRequest_interceptor_1.AclValidateRequestInterceptor),
    graphql.Mutation(() => Product_1.Product),
    nestAccessControl.UseRoles({
        resource: "Product",
        action: "create",
        possession: "any",
    }),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateProductArgs_1.CreateProductArgs]),
    __metadata("design:returntype", Promise)
], ProductResolverBase.prototype, "createProduct", null);
__decorate([
    common.UseInterceptors(aclValidateRequest_interceptor_1.AclValidateRequestInterceptor),
    graphql.Mutation(() => Product_1.Product),
    nestAccessControl.UseRoles({
        resource: "Product",
        action: "update",
        possession: "any",
    }),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UpdateProductArgs_1.UpdateProductArgs]),
    __metadata("design:returntype", Promise)
], ProductResolverBase.prototype, "updateProduct", null);
__decorate([
    graphql.Mutation(() => Product_1.Product),
    nestAccessControl.UseRoles({
        resource: "Product",
        action: "delete",
        possession: "any",
    }),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [DeleteProductArgs_1.DeleteProductArgs]),
    __metadata("design:returntype", Promise)
], ProductResolverBase.prototype, "deleteProduct", null);
__decorate([
    common.UseInterceptors(aclFilterResponse_interceptor_1.AclFilterResponseInterceptor),
    graphql.ResolveField(() => [Order_1.Order], { name: "orders" }),
    nestAccessControl.UseRoles({
        resource: "Order",
        action: "read",
        possession: "any",
    }),
    __param(0, graphql.Parent()),
    __param(1, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Product_1.Product,
        OrderFindManyArgs_1.OrderFindManyArgs]),
    __metadata("design:returntype", Promise)
], ProductResolverBase.prototype, "findOrders", null);
exports.ProductResolverBase = ProductResolverBase = __decorate([
    common.UseGuards(gqlDefaultAuth_guard_1.GqlDefaultAuthGuard, gqlACGuard.GqlACGuard),
    graphql.Resolver(() => Product_1.Product),
    __metadata("design:paramtypes", [product_service_1.ProductService, nestAccessControl.RolesBuilder])
], ProductResolverBase);
//# sourceMappingURL=product.resolver.base.js.map