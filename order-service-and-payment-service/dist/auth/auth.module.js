"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const constants_1 = require("../constants");
const secretsManager_module_1 = require("../providers/secrets/secretsManager.module");
const secretsManager_service_1 = require("../providers/secrets/secretsManager.service");
const secretsNameKey_enum_1 = require("../providers/secrets/secretsNameKey.enum");
const auth_controller_1 = require("./auth.controller");
const auth_resolver_1 = require("./auth.resolver");
const auth_service_1 = require("./auth.service");
const jwt_strategy_1 = require("./jwt/jwt.strategy");
const jwtSecretFactory_1 = require("./jwt/jwtSecretFactory");
const password_service_1 = require("./password.service");
const token_service_1 = require("./token.service");
const user_module_1 = require("../user/user.module");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            (0, common_1.forwardRef)(() => user_module_1.UserModule),
            passport_1.PassportModule,
            secretsManager_module_1.SecretsManagerModule,
            jwt_1.JwtModule.registerAsync({
                imports: [secretsManager_module_1.SecretsManagerModule],
                inject: [secretsManager_service_1.SecretsManagerService, config_1.ConfigService],
                useFactory: async (secretsService, configService) => {
                    const secret = await secretsService.getSecret(secretsNameKey_enum_1.EnumSecretsNameKey.JwtSecretKey);
                    const expiresIn = configService.get(constants_1.JWT_EXPIRATION);
                    if (!secret) {
                        throw new Error("Didn't get a valid jwt secret");
                    }
                    if (!expiresIn) {
                        throw new Error("Jwt expire in value is not valid");
                    }
                    return {
                        secret: secret,
                        signOptions: { expiresIn },
                    };
                },
            }),
        ],
        providers: [
            auth_service_1.AuthService,
            password_service_1.PasswordService,
            auth_resolver_1.AuthResolver,
            jwt_strategy_1.JwtStrategy,
            jwtSecretFactory_1.jwtSecretFactory,
            token_service_1.TokenService,
        ],
        controllers: [auth_controller_1.AuthController],
        exports: [auth_service_1.AuthService, password_service_1.PasswordService],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map