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
exports.CustomerControllerBase = void 0;
const common = __importStar(require("@nestjs/common"));
const swagger = __importStar(require("@nestjs/swagger"));
const prisma_util_1 = require("../../prisma.util");
const errors = __importStar(require("../../errors"));
const class_transformer_1 = require("class-transformer");
const api_nested_query_decorator_1 = require("../../decorators/api-nested-query.decorator");
const nestAccessControl = __importStar(require("nest-access-control"));
const defaultAuthGuard = __importStar(require("../../auth/defaultAuth.guard"));
const customer_service_1 = require("../customer.service");
const aclValidateRequest_interceptor_1 = require("../../interceptors/aclValidateRequest.interceptor");
const aclFilterResponse_interceptor_1 = require("../../interceptors/aclFilterResponse.interceptor");
const CustomerCreateInput_1 = require("./CustomerCreateInput");
const Customer_1 = require("./Customer");
const CustomerFindManyArgs_1 = require("./CustomerFindManyArgs");
const CustomerWhereUniqueInput_1 = require("./CustomerWhereUniqueInput");
const CustomerUpdateInput_1 = require("./CustomerUpdateInput");
const OrderFindManyArgs_1 = require("../../order/base/OrderFindManyArgs");
let CustomerControllerBase = class CustomerControllerBase {
    service;
    rolesBuilder;
    constructor(service, rolesBuilder) {
        this.service = service;
        this.rolesBuilder = rolesBuilder;
    }
    async createCustomer(data) {
        return await this.service.createCustomer({
            data: {
                ...data,
                address: data.address
                    ? {
                        connect: data.address,
                    }
                    : undefined,
            },
            select: {
                address: {
                    select: {
                        id: true,
                    },
                },
                createdAt: true,
                email: true,
                firstName: true,
                id: true,
                lastName: true,
                phone: true,
                updatedAt: true,
            },
        });
    }
    async customers(request) {
        const args = (0, class_transformer_1.plainToClass)(CustomerFindManyArgs_1.CustomerFindManyArgs, request.query);
        return this.service.customers({
            ...args,
            select: {
                address: {
                    select: {
                        id: true,
                    },
                },
                createdAt: true,
                email: true,
                firstName: true,
                id: true,
                lastName: true,
                phone: true,
                updatedAt: true,
            },
        });
    }
    async customer(params) {
        const result = await this.service.customer({
            where: params,
            select: {
                address: {
                    select: {
                        id: true,
                    },
                },
                createdAt: true,
                email: true,
                firstName: true,
                id: true,
                lastName: true,
                phone: true,
                updatedAt: true,
            },
        });
        if (result === null) {
            throw new errors.NotFoundException(`No resource was found for ${JSON.stringify(params)}`);
        }
        return result;
    }
    async updateCustomer(params, data) {
        try {
            return await this.service.updateCustomer({
                where: params,
                data: {
                    ...data,
                    address: data.address
                        ? {
                            connect: data.address,
                        }
                        : undefined,
                },
                select: {
                    address: {
                        select: {
                            id: true,
                        },
                    },
                    createdAt: true,
                    email: true,
                    firstName: true,
                    id: true,
                    lastName: true,
                    phone: true,
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
    async deleteCustomer(params) {
        try {
            return await this.service.deleteCustomer({
                where: params,
                select: {
                    address: {
                        select: {
                            id: true,
                        },
                    },
                    createdAt: true,
                    email: true,
                    firstName: true,
                    id: true,
                    lastName: true,
                    phone: true,
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
        await this.service.updateCustomer({
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
        await this.service.updateCustomer({
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
        await this.service.updateCustomer({
            where: params,
            data,
            select: { id: true },
        });
    }
};
exports.CustomerControllerBase = CustomerControllerBase;
__decorate([
    common.UseInterceptors(aclValidateRequest_interceptor_1.AclValidateRequestInterceptor),
    common.Post(),
    swagger.ApiCreatedResponse({ type: Customer_1.Customer }),
    nestAccessControl.UseRoles({
        resource: "Customer",
        action: "create",
        possession: "any",
    }),
    swagger.ApiForbiddenResponse({
        type: errors.ForbiddenException,
    }),
    __param(0, common.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CustomerCreateInput_1.CustomerCreateInput]),
    __metadata("design:returntype", Promise)
], CustomerControllerBase.prototype, "createCustomer", null);
__decorate([
    common.UseInterceptors(aclFilterResponse_interceptor_1.AclFilterResponseInterceptor),
    common.Get(),
    swagger.ApiOkResponse({ type: [Customer_1.Customer] }),
    (0, api_nested_query_decorator_1.ApiNestedQuery)(CustomerFindManyArgs_1.CustomerFindManyArgs),
    nestAccessControl.UseRoles({
        resource: "Customer",
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
], CustomerControllerBase.prototype, "customers", null);
__decorate([
    common.UseInterceptors(aclFilterResponse_interceptor_1.AclFilterResponseInterceptor),
    common.Get("/:id"),
    swagger.ApiOkResponse({ type: Customer_1.Customer }),
    swagger.ApiNotFoundResponse({ type: errors.NotFoundException }),
    nestAccessControl.UseRoles({
        resource: "Customer",
        action: "read",
        possession: "own",
    }),
    swagger.ApiForbiddenResponse({
        type: errors.ForbiddenException,
    }),
    __param(0, common.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CustomerWhereUniqueInput_1.CustomerWhereUniqueInput]),
    __metadata("design:returntype", Promise)
], CustomerControllerBase.prototype, "customer", null);
__decorate([
    common.UseInterceptors(aclValidateRequest_interceptor_1.AclValidateRequestInterceptor),
    common.Patch("/:id"),
    swagger.ApiOkResponse({ type: Customer_1.Customer }),
    swagger.ApiNotFoundResponse({ type: errors.NotFoundException }),
    nestAccessControl.UseRoles({
        resource: "Customer",
        action: "update",
        possession: "any",
    }),
    swagger.ApiForbiddenResponse({
        type: errors.ForbiddenException,
    }),
    __param(0, common.Param()),
    __param(1, common.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CustomerWhereUniqueInput_1.CustomerWhereUniqueInput,
        CustomerUpdateInput_1.CustomerUpdateInput]),
    __metadata("design:returntype", Promise)
], CustomerControllerBase.prototype, "updateCustomer", null);
__decorate([
    common.Delete("/:id"),
    swagger.ApiOkResponse({ type: Customer_1.Customer }),
    swagger.ApiNotFoundResponse({ type: errors.NotFoundException }),
    nestAccessControl.UseRoles({
        resource: "Customer",
        action: "delete",
        possession: "any",
    }),
    swagger.ApiForbiddenResponse({
        type: errors.ForbiddenException,
    }),
    __param(0, common.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CustomerWhereUniqueInput_1.CustomerWhereUniqueInput]),
    __metadata("design:returntype", Promise)
], CustomerControllerBase.prototype, "deleteCustomer", null);
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
    __metadata("design:paramtypes", [Object, CustomerWhereUniqueInput_1.CustomerWhereUniqueInput]),
    __metadata("design:returntype", Promise)
], CustomerControllerBase.prototype, "findOrders", null);
__decorate([
    common.Post("/:id/orders"),
    nestAccessControl.UseRoles({
        resource: "Customer",
        action: "update",
        possession: "any",
    }),
    __param(0, common.Param()),
    __param(1, common.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CustomerWhereUniqueInput_1.CustomerWhereUniqueInput, Array]),
    __metadata("design:returntype", Promise)
], CustomerControllerBase.prototype, "connectOrders", null);
__decorate([
    common.Patch("/:id/orders"),
    nestAccessControl.UseRoles({
        resource: "Customer",
        action: "update",
        possession: "any",
    }),
    __param(0, common.Param()),
    __param(1, common.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CustomerWhereUniqueInput_1.CustomerWhereUniqueInput, Array]),
    __metadata("design:returntype", Promise)
], CustomerControllerBase.prototype, "updateOrders", null);
__decorate([
    common.Delete("/:id/orders"),
    nestAccessControl.UseRoles({
        resource: "Customer",
        action: "update",
        possession: "any",
    }),
    __param(0, common.Param()),
    __param(1, common.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CustomerWhereUniqueInput_1.CustomerWhereUniqueInput, Array]),
    __metadata("design:returntype", Promise)
], CustomerControllerBase.prototype, "disconnectOrders", null);
exports.CustomerControllerBase = CustomerControllerBase = __decorate([
    swagger.ApiBearerAuth(),
    common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard),
    __metadata("design:paramtypes", [customer_service_1.CustomerService, nestAccessControl.RolesBuilder])
], CustomerControllerBase);
//# sourceMappingURL=customer.controller.base.js.map