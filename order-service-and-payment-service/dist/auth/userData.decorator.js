"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserData = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
function userFactory(ctx) {
    const contextType = ctx.getType();
    if (contextType === "http") {
        const { user } = ctx.switchToHttp().getRequest();
        return user;
    }
    else if (contextType === "rpc") {
        throw new Error("Rpc context is not implemented yet");
    }
    else if (contextType === "ws") {
        throw new Error("Websockets context is not implemented yet");
    }
    else if (ctx.getType() === "graphql") {
        const gqlExecutionContext = graphql_1.GqlExecutionContext.create(ctx);
        return gqlExecutionContext.getContext().req.user;
    }
    throw new Error("Invalid context");
}
exports.UserData = (0, common_1.createParamDecorator)((data, ctx) => userFactory(ctx));
//# sourceMappingURL=userData.decorator.js.map