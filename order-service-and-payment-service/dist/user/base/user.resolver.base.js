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
exports.UserResolverBase = void 0;
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
const User_1 = require("./User");
const UserCountArgs_1 = require("./UserCountArgs");
const UserFindManyArgs_1 = require("./UserFindManyArgs");
const UserFindUniqueArgs_1 = require("./UserFindUniqueArgs");
const CreateUserArgs_1 = require("./CreateUserArgs");
const UpdateUserArgs_1 = require("./UpdateUserArgs");
const DeleteUserArgs_1 = require("./DeleteUserArgs");
const user_service_1 = require("../user.service");
let UserResolverBase = class UserResolverBase {
    service;
    rolesBuilder;
    constructor(service, rolesBuilder) {
        this.service = service;
        this.rolesBuilder = rolesBuilder;
    }
    async _usersMeta(args) {
        const result = await this.service.count(args);
        return {
            count: result,
        };
    }
    async users(args) {
        return this.service.users(args);
    }
    async user(args) {
        const result = await this.service.user(args);
        if (result === null) {
            return null;
        }
        return result;
    }
    async createUser(args) {
        return await this.service.createUser({
            ...args,
            data: args.data,
        });
    }
    async updateUser(args) {
        try {
            return await this.service.updateUser({
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
    async deleteUser(args) {
        try {
            return await this.service.deleteUser(args);
        }
        catch (error) {
            if ((0, prisma_util_1.isRecordNotFoundError)(error)) {
                throw new graphql_1.GraphQLError(`No resource was found for ${JSON.stringify(args.where)}`);
            }
            throw error;
        }
    }
};
exports.UserResolverBase = UserResolverBase;
__decorate([
    graphql.Query(() => MetaQueryPayload_1.MetaQueryPayload),
    nestAccessControl.UseRoles({
        resource: "User",
        action: "read",
        possession: "any",
    }),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserCountArgs_1.UserCountArgs]),
    __metadata("design:returntype", Promise)
], UserResolverBase.prototype, "_usersMeta", null);
__decorate([
    common.UseInterceptors(aclFilterResponse_interceptor_1.AclFilterResponseInterceptor),
    graphql.Query(() => [User_1.User]),
    nestAccessControl.UseRoles({
        resource: "User",
        action: "read",
        possession: "any",
    }),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserFindManyArgs_1.UserFindManyArgs]),
    __metadata("design:returntype", Promise)
], UserResolverBase.prototype, "users", null);
__decorate([
    common.UseInterceptors(aclFilterResponse_interceptor_1.AclFilterResponseInterceptor),
    graphql.Query(() => User_1.User, { nullable: true }),
    nestAccessControl.UseRoles({
        resource: "User",
        action: "read",
        possession: "own",
    }),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserFindUniqueArgs_1.UserFindUniqueArgs]),
    __metadata("design:returntype", Promise)
], UserResolverBase.prototype, "user", null);
__decorate([
    common.UseInterceptors(aclValidateRequest_interceptor_1.AclValidateRequestInterceptor),
    graphql.Mutation(() => User_1.User),
    nestAccessControl.UseRoles({
        resource: "User",
        action: "create",
        possession: "any",
    }),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateUserArgs_1.CreateUserArgs]),
    __metadata("design:returntype", Promise)
], UserResolverBase.prototype, "createUser", null);
__decorate([
    common.UseInterceptors(aclValidateRequest_interceptor_1.AclValidateRequestInterceptor),
    graphql.Mutation(() => User_1.User),
    nestAccessControl.UseRoles({
        resource: "User",
        action: "update",
        possession: "any",
    }),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UpdateUserArgs_1.UpdateUserArgs]),
    __metadata("design:returntype", Promise)
], UserResolverBase.prototype, "updateUser", null);
__decorate([
    graphql.Mutation(() => User_1.User),
    nestAccessControl.UseRoles({
        resource: "User",
        action: "delete",
        possession: "any",
    }),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [DeleteUserArgs_1.DeleteUserArgs]),
    __metadata("design:returntype", Promise)
], UserResolverBase.prototype, "deleteUser", null);
exports.UserResolverBase = UserResolverBase = __decorate([
    common.UseGuards(gqlDefaultAuth_guard_1.GqlDefaultAuthGuard, gqlACGuard.GqlACGuard),
    graphql.Resolver(() => User_1.User),
    __metadata("design:paramtypes", [user_service_1.UserService, nestAccessControl.RolesBuilder])
], UserResolverBase);
//# sourceMappingURL=user.resolver.base.js.map