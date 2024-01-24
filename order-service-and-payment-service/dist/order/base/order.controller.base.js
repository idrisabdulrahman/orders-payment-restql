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
exports.OrderControllerBase = void 0;
const common = __importStar(require("@nestjs/common"));
const swagger = __importStar(require("@nestjs/swagger"));
const prisma_util_1 = require("../../prisma.util");
const errors = __importStar(require("../../errors"));
const class_transformer_1 = require("class-transformer");
const api_nested_query_decorator_1 = require("../../decorators/api-nested-query.decorator");
const nestAccessControl = __importStar(require("nest-access-control"));
const defaultAuthGuard = __importStar(require("../../auth/defaultAuth.guard"));
const order_service_1 = require("../order.service");
const aclValidateRequest_interceptor_1 = require("../../interceptors/aclValidateRequest.interceptor");
const aclFilterResponse_interceptor_1 = require("../../interceptors/aclFilterResponse.interceptor");
const OrderCreateInput_1 = require("./OrderCreateInput");
const Order_1 = require("./Order");
const OrderFindManyArgs_1 = require("./OrderFindManyArgs");
const OrderWhereUniqueInput_1 = require("./OrderWhereUniqueInput");
const OrderUpdateInput_1 = require("./OrderUpdateInput");
let OrderControllerBase = class OrderControllerBase {
    service;
    rolesBuilder;
    constructor(service, rolesBuilder) {
        this.service = service;
        this.rolesBuilder = rolesBuilder;
    }
    async createOrder(data) {
        return await this.service.createOrder({
            data: {
                ...data,
                customer: data.customer
                    ? {
                        connect: data.customer,
                    }
                    : undefined,
                product: data.product
                    ? {
                        connect: data.product,
                    }
                    : undefined,
            },
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
    }
    async orders(request) {
        const args = (0, class_transformer_1.plainToClass)(OrderFindManyArgs_1.OrderFindManyArgs, request.query);
        return this.service.orders({
            ...args,
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
    }
    async order(params) {
        const result = await this.service.order({
            where: params,
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
        if (result === null) {
            throw new errors.NotFoundException(`No resource was found for ${JSON.stringify(params)}`);
        }
        return result;
    }
    async updateOrder(params, data) {
        try {
            return await this.service.updateOrder({
                where: params,
                data: {
                    ...data,
                    customer: data.customer
                        ? {
                            connect: data.customer,
                        }
                        : undefined,
                    product: data.product
                        ? {
                            connect: data.product,
                        }
                        : undefined,
                },
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
        }
        catch (error) {
            if ((0, prisma_util_1.isRecordNotFoundError)(error)) {
                throw new errors.NotFoundException(`No resource was found for ${JSON.stringify(params)}`);
            }
            throw error;
        }
    }
    async deleteOrder(params) {
        try {
            return await this.service.deleteOrder({
                where: params,
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
        }
        catch (error) {
            if ((0, prisma_util_1.isRecordNotFoundError)(error)) {
                throw new errors.NotFoundException(`No resource was found for ${JSON.stringify(params)}`);
            }
            throw error;
        }
    }
};
exports.OrderControllerBase = OrderControllerBase;
__decorate([
    common.UseInterceptors(aclValidateRequest_interceptor_1.AclValidateRequestInterceptor),
    common.Post(),
    swagger.ApiCreatedResponse({ type: Order_1.Order }),
    nestAccessControl.UseRoles({
        resource: "Order",
        action: "create",
        possession: "any",
    }),
    swagger.ApiForbiddenResponse({
        type: errors.ForbiddenException,
    }),
    __param(0, common.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [OrderCreateInput_1.OrderCreateInput]),
    __metadata("design:returntype", Promise)
], OrderControllerBase.prototype, "createOrder", null);
__decorate([
    common.UseInterceptors(aclFilterResponse_interceptor_1.AclFilterResponseInterceptor),
    common.Get(),
    swagger.ApiOkResponse({ type: [Order_1.Order] }),
    (0, api_nested_query_decorator_1.ApiNestedQuery)(OrderFindManyArgs_1.OrderFindManyArgs),
    nestAccessControl.UseRoles({
        resource: "Order",
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
], OrderControllerBase.prototype, "orders", null);
__decorate([
    common.UseInterceptors(aclFilterResponse_interceptor_1.AclFilterResponseInterceptor),
    common.Get("/:id"),
    swagger.ApiOkResponse({ type: Order_1.Order }),
    swagger.ApiNotFoundResponse({ type: errors.NotFoundException }),
    nestAccessControl.UseRoles({
        resource: "Order",
        action: "read",
        possession: "own",
    }),
    swagger.ApiForbiddenResponse({
        type: errors.ForbiddenException,
    }),
    __param(0, common.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [OrderWhereUniqueInput_1.OrderWhereUniqueInput]),
    __metadata("design:returntype", Promise)
], OrderControllerBase.prototype, "order", null);
__decorate([
    common.UseInterceptors(aclValidateRequest_interceptor_1.AclValidateRequestInterceptor),
    common.Patch("/:id"),
    swagger.ApiOkResponse({ type: Order_1.Order }),
    swagger.ApiNotFoundResponse({ type: errors.NotFoundException }),
    nestAccessControl.UseRoles({
        resource: "Order",
        action: "update",
        possession: "any",
    }),
    swagger.ApiForbiddenResponse({
        type: errors.ForbiddenException,
    }),
    __param(0, common.Param()),
    __param(1, common.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [OrderWhereUniqueInput_1.OrderWhereUniqueInput,
        OrderUpdateInput_1.OrderUpdateInput]),
    __metadata("design:returntype", Promise)
], OrderControllerBase.prototype, "updateOrder", null);
__decorate([
    common.Delete("/:id"),
    swagger.ApiOkResponse({ type: Order_1.Order }),
    swagger.ApiNotFoundResponse({ type: errors.NotFoundException }),
    nestAccessControl.UseRoles({
        resource: "Order",
        action: "delete",
        possession: "any",
    }),
    swagger.ApiForbiddenResponse({
        type: errors.ForbiddenException,
    }),
    __param(0, common.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [OrderWhereUniqueInput_1.OrderWhereUniqueInput]),
    __metadata("design:returntype", Promise)
], OrderControllerBase.prototype, "deleteOrder", null);
exports.OrderControllerBase = OrderControllerBase = __decorate([
    swagger.ApiBearerAuth(),
    common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard),
    __metadata("design:paramtypes", [order_service_1.OrderService, nestAccessControl.RolesBuilder])
], OrderControllerBase);
//# sourceMappingURL=order.controller.base.js.map