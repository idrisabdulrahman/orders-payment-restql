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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AclFilterResponseInterceptor = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
const nest_access_control_1 = require("nest-access-control");
const core_1 = require("@nestjs/core");
let AclFilterResponseInterceptor = class AclFilterResponseInterceptor {
    rolesBuilder;
    reflector;
    constructor(rolesBuilder, reflector) {
        this.rolesBuilder = rolesBuilder;
        this.reflector = reflector;
    }
    intercept(context, next) {
        const [permissionsRoles] = this.reflector.getAllAndMerge("roles", [context.getHandler(), context.getClass()]);
        const permission = this.rolesBuilder.permission({
            role: permissionsRoles.role,
            action: permissionsRoles.action,
            possession: permissionsRoles.possession,
            resource: permissionsRoles.resource,
        });
        return next.handle().pipe((0, operators_1.map)((data) => {
            if (Array.isArray(data)) {
                return data.map((results) => permission.filter(results));
            }
            else {
                return permission.filter(data);
            }
        }));
    }
};
exports.AclFilterResponseInterceptor = AclFilterResponseInterceptor;
exports.AclFilterResponseInterceptor = AclFilterResponseInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nest_access_control_1.InjectRolesBuilder)()),
    __metadata("design:paramtypes", [nest_access_control_1.RolesBuilder,
        core_1.Reflector])
], AclFilterResponseInterceptor);
//# sourceMappingURL=aclFilterResponse.interceptor.js.map