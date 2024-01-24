"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtStrategyBase = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const passport_jwt_1 = require("passport-jwt");
class JwtStrategyBase extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    secretOrKey;
    userService;
    constructor(secretOrKey, userService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey,
        });
        this.secretOrKey = secretOrKey;
        this.userService = userService;
    }
    async validate(payload) {
        const { username } = payload;
        const user = await this.userService.user({
            where: { username },
        });
        if (!user) {
            throw new common_1.UnauthorizedException();
        }
        if (!Array.isArray(user.roles) ||
            typeof user.roles !== "object" ||
            user.roles === null) {
            throw new Error("User roles is not a valid value");
        }
        return { ...user, roles: user.roles };
    }
}
exports.JwtStrategyBase = JwtStrategyBase;
//# sourceMappingURL=jwt.strategy.base.js.map