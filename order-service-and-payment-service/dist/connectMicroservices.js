"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectMicroservices = void 0;
const config_1 = require("@nestjs/config");
async function connectMicroservices(app) {
    const configService = app.get(config_1.ConfigService);
}
exports.connectMicroservices = connectMicroservices;
//# sourceMappingURL=connectMicroservices.js.map