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
exports.parseSalt = exports.PasswordService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt_1 = require("bcrypt");
const config_1 = require("@nestjs/config");
const BCRYPT_SALT_VAR = "BCRYPT_SALT";
const UNDEFINED_SALT_OR_ROUNDS_ERROR = `${BCRYPT_SALT_VAR} is not defined`;
const SALT_OR_ROUNDS_TYPE_ERROR = `${BCRYPT_SALT_VAR} must be a positive integer or text`;
let PasswordService = class PasswordService {
    configService;
    salt;
    constructor(configService) {
        this.configService = configService;
        const saltOrRounds = this.configService.get(BCRYPT_SALT_VAR);
        this.salt = parseSalt(saltOrRounds);
    }
    compare(password, encrypted) {
        return (0, bcrypt_1.compare)(password, encrypted);
    }
    hash(password) {
        return (0, bcrypt_1.hash)(password, this.salt);
    }
};
exports.PasswordService = PasswordService;
exports.PasswordService = PasswordService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], PasswordService);
function parseSalt(value) {
    if (value === undefined) {
        throw new Error(UNDEFINED_SALT_OR_ROUNDS_ERROR);
    }
    const rounds = Number(value);
    if (Number.isNaN(rounds)) {
        return value;
    }
    if (!Number.isInteger(rounds) || rounds < 0) {
        throw new Error(SALT_OR_ROUNDS_TYPE_ERROR);
    }
    return rounds;
}
exports.parseSalt = parseSalt;
//# sourceMappingURL=password.service.js.map