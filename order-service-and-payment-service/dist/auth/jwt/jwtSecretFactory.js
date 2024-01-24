"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtSecretFactory = void 0;
const constants_1 = require("../../constants");
const secretsManager_service_1 = require("../../providers/secrets/secretsManager.service");
const secretsNameKey_enum_1 = require("../../providers/secrets/secretsNameKey.enum");
exports.jwtSecretFactory = {
    provide: constants_1.JWT_SECRET_KEY_PROVIDER_NAME,
    useFactory: async (secretsService) => {
        const secret = await secretsService.getSecret(secretsNameKey_enum_1.EnumSecretsNameKey.JwtSecretKey);
        if (secret) {
            return secret;
        }
        throw new Error("jwtSecretFactory missing secret");
    },
    inject: [secretsManager_service_1.SecretsManagerService],
};
//# sourceMappingURL=jwtSecretFactory.js.map