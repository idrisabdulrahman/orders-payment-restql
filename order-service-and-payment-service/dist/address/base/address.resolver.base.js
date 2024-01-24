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
exports.AddressResolverBase = void 0;
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
const Address_1 = require("./Address");
const AddressCountArgs_1 = require("./AddressCountArgs");
const AddressFindManyArgs_1 = require("./AddressFindManyArgs");
const AddressFindUniqueArgs_1 = require("./AddressFindUniqueArgs");
const CreateAddressArgs_1 = require("./CreateAddressArgs");
const UpdateAddressArgs_1 = require("./UpdateAddressArgs");
const DeleteAddressArgs_1 = require("./DeleteAddressArgs");
const CustomerFindManyArgs_1 = require("../../customer/base/CustomerFindManyArgs");
const Customer_1 = require("../../customer/base/Customer");
const address_service_1 = require("../address.service");
let AddressResolverBase = class AddressResolverBase {
    service;
    rolesBuilder;
    constructor(service, rolesBuilder) {
        this.service = service;
        this.rolesBuilder = rolesBuilder;
    }
    async _addressesMeta(args) {
        const result = await this.service.count(args);
        return {
            count: result,
        };
    }
    async addresses(args) {
        return this.service.addresses(args);
    }
    async address(args) {
        const result = await this.service.address(args);
        if (result === null) {
            return null;
        }
        return result;
    }
    async createAddress(args) {
        return await this.service.createAddress({
            ...args,
            data: args.data,
        });
    }
    async updateAddress(args) {
        try {
            return await this.service.updateAddress({
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
    async deleteAddress(args) {
        try {
            return await this.service.deleteAddress(args);
        }
        catch (error) {
            if ((0, prisma_util_1.isRecordNotFoundError)(error)) {
                throw new graphql_1.GraphQLError(`No resource was found for ${JSON.stringify(args.where)}`);
            }
            throw error;
        }
    }
    async findCustomers(parent, args) {
        const results = await this.service.findCustomers(parent.id, args);
        if (!results) {
            return [];
        }
        return results;
    }
};
exports.AddressResolverBase = AddressResolverBase;
__decorate([
    graphql.Query(() => MetaQueryPayload_1.MetaQueryPayload),
    nestAccessControl.UseRoles({
        resource: "Address",
        action: "read",
        possession: "any",
    }),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AddressCountArgs_1.AddressCountArgs]),
    __metadata("design:returntype", Promise)
], AddressResolverBase.prototype, "_addressesMeta", null);
__decorate([
    common.UseInterceptors(aclFilterResponse_interceptor_1.AclFilterResponseInterceptor),
    graphql.Query(() => [Address_1.Address]),
    nestAccessControl.UseRoles({
        resource: "Address",
        action: "read",
        possession: "any",
    }),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AddressFindManyArgs_1.AddressFindManyArgs]),
    __metadata("design:returntype", Promise)
], AddressResolverBase.prototype, "addresses", null);
__decorate([
    common.UseInterceptors(aclFilterResponse_interceptor_1.AclFilterResponseInterceptor),
    graphql.Query(() => Address_1.Address, { nullable: true }),
    nestAccessControl.UseRoles({
        resource: "Address",
        action: "read",
        possession: "own",
    }),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AddressFindUniqueArgs_1.AddressFindUniqueArgs]),
    __metadata("design:returntype", Promise)
], AddressResolverBase.prototype, "address", null);
__decorate([
    common.UseInterceptors(aclValidateRequest_interceptor_1.AclValidateRequestInterceptor),
    graphql.Mutation(() => Address_1.Address),
    nestAccessControl.UseRoles({
        resource: "Address",
        action: "create",
        possession: "any",
    }),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateAddressArgs_1.CreateAddressArgs]),
    __metadata("design:returntype", Promise)
], AddressResolverBase.prototype, "createAddress", null);
__decorate([
    common.UseInterceptors(aclValidateRequest_interceptor_1.AclValidateRequestInterceptor),
    graphql.Mutation(() => Address_1.Address),
    nestAccessControl.UseRoles({
        resource: "Address",
        action: "update",
        possession: "any",
    }),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UpdateAddressArgs_1.UpdateAddressArgs]),
    __metadata("design:returntype", Promise)
], AddressResolverBase.prototype, "updateAddress", null);
__decorate([
    graphql.Mutation(() => Address_1.Address),
    nestAccessControl.UseRoles({
        resource: "Address",
        action: "delete",
        possession: "any",
    }),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [DeleteAddressArgs_1.DeleteAddressArgs]),
    __metadata("design:returntype", Promise)
], AddressResolverBase.prototype, "deleteAddress", null);
__decorate([
    common.UseInterceptors(aclFilterResponse_interceptor_1.AclFilterResponseInterceptor),
    graphql.ResolveField(() => [Customer_1.Customer], { name: "customers" }),
    nestAccessControl.UseRoles({
        resource: "Customer",
        action: "read",
        possession: "any",
    }),
    __param(0, graphql.Parent()),
    __param(1, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Address_1.Address,
        CustomerFindManyArgs_1.CustomerFindManyArgs]),
    __metadata("design:returntype", Promise)
], AddressResolverBase.prototype, "findCustomers", null);
exports.AddressResolverBase = AddressResolverBase = __decorate([
    common.UseGuards(gqlDefaultAuth_guard_1.GqlDefaultAuthGuard, gqlACGuard.GqlACGuard),
    graphql.Resolver(() => Address_1.Address),
    __metadata("design:paramtypes", [address_service_1.AddressService, nestAccessControl.RolesBuilder])
], AddressResolverBase);
//# sourceMappingURL=address.resolver.base.js.map