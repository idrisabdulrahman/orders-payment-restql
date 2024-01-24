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
exports.AddressControllerBase = void 0;
const common = __importStar(require("@nestjs/common"));
const swagger = __importStar(require("@nestjs/swagger"));
const prisma_util_1 = require("../../prisma.util");
const errors = __importStar(require("../../errors"));
const class_transformer_1 = require("class-transformer");
const api_nested_query_decorator_1 = require("../../decorators/api-nested-query.decorator");
const nestAccessControl = __importStar(require("nest-access-control"));
const defaultAuthGuard = __importStar(require("../../auth/defaultAuth.guard"));
const address_service_1 = require("../address.service");
const aclValidateRequest_interceptor_1 = require("../../interceptors/aclValidateRequest.interceptor");
const aclFilterResponse_interceptor_1 = require("../../interceptors/aclFilterResponse.interceptor");
const AddressCreateInput_1 = require("./AddressCreateInput");
const Address_1 = require("./Address");
const AddressFindManyArgs_1 = require("./AddressFindManyArgs");
const AddressWhereUniqueInput_1 = require("./AddressWhereUniqueInput");
const AddressUpdateInput_1 = require("./AddressUpdateInput");
const CustomerFindManyArgs_1 = require("../../customer/base/CustomerFindManyArgs");
let AddressControllerBase = class AddressControllerBase {
    service;
    rolesBuilder;
    constructor(service, rolesBuilder) {
        this.service = service;
        this.rolesBuilder = rolesBuilder;
    }
    async createAddress(data) {
        return await this.service.createAddress({
            data: data,
            select: {
                address_1: true,
                address_2: true,
                city: true,
                createdAt: true,
                id: true,
                state: true,
                updatedAt: true,
                zip: true,
            },
        });
    }
    async addresses(request) {
        const args = (0, class_transformer_1.plainToClass)(AddressFindManyArgs_1.AddressFindManyArgs, request.query);
        return this.service.addresses({
            ...args,
            select: {
                address_1: true,
                address_2: true,
                city: true,
                createdAt: true,
                id: true,
                state: true,
                updatedAt: true,
                zip: true,
            },
        });
    }
    async address(params) {
        const result = await this.service.address({
            where: params,
            select: {
                address_1: true,
                address_2: true,
                city: true,
                createdAt: true,
                id: true,
                state: true,
                updatedAt: true,
                zip: true,
            },
        });
        if (result === null) {
            throw new errors.NotFoundException(`No resource was found for ${JSON.stringify(params)}`);
        }
        return result;
    }
    async updateAddress(params, data) {
        try {
            return await this.service.updateAddress({
                where: params,
                data: data,
                select: {
                    address_1: true,
                    address_2: true,
                    city: true,
                    createdAt: true,
                    id: true,
                    state: true,
                    updatedAt: true,
                    zip: true,
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
    async deleteAddress(params) {
        try {
            return await this.service.deleteAddress({
                where: params,
                select: {
                    address_1: true,
                    address_2: true,
                    city: true,
                    createdAt: true,
                    id: true,
                    state: true,
                    updatedAt: true,
                    zip: true,
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
    async findCustomers(request, params) {
        const query = (0, class_transformer_1.plainToClass)(CustomerFindManyArgs_1.CustomerFindManyArgs, request.query);
        const results = await this.service.findCustomers(params.id, {
            ...query,
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
        if (results === null) {
            throw new errors.NotFoundException(`No resource was found for ${JSON.stringify(params)}`);
        }
        return results;
    }
    async connectCustomers(params, body) {
        const data = {
            customers: {
                connect: body,
            },
        };
        await this.service.updateAddress({
            where: params,
            data,
            select: { id: true },
        });
    }
    async updateCustomers(params, body) {
        const data = {
            customers: {
                set: body,
            },
        };
        await this.service.updateAddress({
            where: params,
            data,
            select: { id: true },
        });
    }
    async disconnectCustomers(params, body) {
        const data = {
            customers: {
                disconnect: body,
            },
        };
        await this.service.updateAddress({
            where: params,
            data,
            select: { id: true },
        });
    }
};
exports.AddressControllerBase = AddressControllerBase;
__decorate([
    common.UseInterceptors(aclValidateRequest_interceptor_1.AclValidateRequestInterceptor),
    common.Post(),
    swagger.ApiCreatedResponse({ type: Address_1.Address }),
    nestAccessControl.UseRoles({
        resource: "Address",
        action: "create",
        possession: "any",
    }),
    swagger.ApiForbiddenResponse({
        type: errors.ForbiddenException,
    }),
    __param(0, common.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AddressCreateInput_1.AddressCreateInput]),
    __metadata("design:returntype", Promise)
], AddressControllerBase.prototype, "createAddress", null);
__decorate([
    common.UseInterceptors(aclFilterResponse_interceptor_1.AclFilterResponseInterceptor),
    common.Get(),
    swagger.ApiOkResponse({ type: [Address_1.Address] }),
    (0, api_nested_query_decorator_1.ApiNestedQuery)(AddressFindManyArgs_1.AddressFindManyArgs),
    nestAccessControl.UseRoles({
        resource: "Address",
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
], AddressControllerBase.prototype, "addresses", null);
__decorate([
    common.UseInterceptors(aclFilterResponse_interceptor_1.AclFilterResponseInterceptor),
    common.Get("/:id"),
    swagger.ApiOkResponse({ type: Address_1.Address }),
    swagger.ApiNotFoundResponse({ type: errors.NotFoundException }),
    nestAccessControl.UseRoles({
        resource: "Address",
        action: "read",
        possession: "own",
    }),
    swagger.ApiForbiddenResponse({
        type: errors.ForbiddenException,
    }),
    __param(0, common.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AddressWhereUniqueInput_1.AddressWhereUniqueInput]),
    __metadata("design:returntype", Promise)
], AddressControllerBase.prototype, "address", null);
__decorate([
    common.UseInterceptors(aclValidateRequest_interceptor_1.AclValidateRequestInterceptor),
    common.Patch("/:id"),
    swagger.ApiOkResponse({ type: Address_1.Address }),
    swagger.ApiNotFoundResponse({ type: errors.NotFoundException }),
    nestAccessControl.UseRoles({
        resource: "Address",
        action: "update",
        possession: "any",
    }),
    swagger.ApiForbiddenResponse({
        type: errors.ForbiddenException,
    }),
    __param(0, common.Param()),
    __param(1, common.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AddressWhereUniqueInput_1.AddressWhereUniqueInput,
        AddressUpdateInput_1.AddressUpdateInput]),
    __metadata("design:returntype", Promise)
], AddressControllerBase.prototype, "updateAddress", null);
__decorate([
    common.Delete("/:id"),
    swagger.ApiOkResponse({ type: Address_1.Address }),
    swagger.ApiNotFoundResponse({ type: errors.NotFoundException }),
    nestAccessControl.UseRoles({
        resource: "Address",
        action: "delete",
        possession: "any",
    }),
    swagger.ApiForbiddenResponse({
        type: errors.ForbiddenException,
    }),
    __param(0, common.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AddressWhereUniqueInput_1.AddressWhereUniqueInput]),
    __metadata("design:returntype", Promise)
], AddressControllerBase.prototype, "deleteAddress", null);
__decorate([
    common.UseInterceptors(aclFilterResponse_interceptor_1.AclFilterResponseInterceptor),
    common.Get("/:id/customers"),
    (0, api_nested_query_decorator_1.ApiNestedQuery)(CustomerFindManyArgs_1.CustomerFindManyArgs),
    nestAccessControl.UseRoles({
        resource: "Customer",
        action: "read",
        possession: "any",
    }),
    __param(0, common.Req()),
    __param(1, common.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, AddressWhereUniqueInput_1.AddressWhereUniqueInput]),
    __metadata("design:returntype", Promise)
], AddressControllerBase.prototype, "findCustomers", null);
__decorate([
    common.Post("/:id/customers"),
    nestAccessControl.UseRoles({
        resource: "Address",
        action: "update",
        possession: "any",
    }),
    __param(0, common.Param()),
    __param(1, common.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AddressWhereUniqueInput_1.AddressWhereUniqueInput, Array]),
    __metadata("design:returntype", Promise)
], AddressControllerBase.prototype, "connectCustomers", null);
__decorate([
    common.Patch("/:id/customers"),
    nestAccessControl.UseRoles({
        resource: "Address",
        action: "update",
        possession: "any",
    }),
    __param(0, common.Param()),
    __param(1, common.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AddressWhereUniqueInput_1.AddressWhereUniqueInput, Array]),
    __metadata("design:returntype", Promise)
], AddressControllerBase.prototype, "updateCustomers", null);
__decorate([
    common.Delete("/:id/customers"),
    nestAccessControl.UseRoles({
        resource: "Address",
        action: "update",
        possession: "any",
    }),
    __param(0, common.Param()),
    __param(1, common.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AddressWhereUniqueInput_1.AddressWhereUniqueInput, Array]),
    __metadata("design:returntype", Promise)
], AddressControllerBase.prototype, "disconnectCustomers", null);
exports.AddressControllerBase = AddressControllerBase = __decorate([
    swagger.ApiBearerAuth(),
    common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard),
    __metadata("design:paramtypes", [address_service_1.AddressService, nestAccessControl.RolesBuilder])
], AddressControllerBase);
//# sourceMappingURL=address.controller.base.js.map