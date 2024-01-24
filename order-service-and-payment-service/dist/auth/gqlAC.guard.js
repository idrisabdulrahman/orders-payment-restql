"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GqlACGuard = void 0;
const graphql_1 = require("@nestjs/graphql");
const nest_access_control_1 = require("nest-access-control");
class GqlACGuard extends nest_access_control_1.ACGuard {
    async getUser(context) {
        const ctx = graphql_1.GqlExecutionContext.create(context);
        const request = ctx.getContext().req;
        return request.user;
    }
}
exports.GqlACGuard = GqlACGuard;
//# sourceMappingURL=gqlAC.guard.js.map