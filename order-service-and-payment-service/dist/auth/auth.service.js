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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const password_service_1 = require("./password.service");
const token_service_1 = require("./token.service");
const user_service_1 = require("../user/user.service");
let AuthService = class AuthService {
    passwordService;
    tokenService;
    userService;
    constructor(passwordService, tokenService, userService) {
        this.passwordService = passwordService;
        this.tokenService = tokenService;
        this.userService = userService;
    }
    async validateUser(username, password) {
        const user = await this.userService.user({
            where: { username },
        });
        if (user && (await this.passwordService.compare(password, user.password))) {
            const { id, roles } = user;
            const roleList = roles;
            return { id, username, roles: roleList };
        }
        return null;
    }
    async login(credentials) {
        const { username, password } = credentials;
        const user = await this.validateUser(credentials.username, credentials.password);
        if (!user) {
            throw new common_1.UnauthorizedException("The passed credentials are incorrect");
        }
        const accessToken = await this.tokenService.createToken({
            id: user.id,
            username,
            password,
        });
        return {
            accessToken,
            ...user,
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [password_service_1.PasswordService,
        token_service_1.TokenService,
        user_service_1.UserService])
], AuthService);
//# sourceMappingURL=auth.service.js.map