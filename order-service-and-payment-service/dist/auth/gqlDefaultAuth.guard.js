"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GqlDefaultAuthGuard = void 0;
const graphql_1 = require("@nestjs/graphql");
const defaultAuth_guard_1 = require("./defaultAuth.guard");
class GqlDefaultAuthGuard extends defaultAuth_guard_1.DefaultAuthGuard {
    getRequest(context) {
        const ctx = graphql_1.GqlExecutionContext.create(context);
        return ctx.getContext().req;
    }
}
exports.GqlDefaultAuthGuard = GqlDefaultAuthGuard;
//# sourceMappingURL=gqlDefaultAuth.guard.js.map