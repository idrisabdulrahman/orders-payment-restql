"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoles = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
exports.UserRoles = (0, common_1.createParamDecorator)((data, context) => {
    const ctx = graphql_1.GqlExecutionContext.create(context);
    const request = ctx.getContext().req;
    if (!request.user) {
        return null;
    }
    return data ? request.user[data] : request.user.roles;
});
//# sourceMappingURL=gqlUserRoles.decorator.js.map