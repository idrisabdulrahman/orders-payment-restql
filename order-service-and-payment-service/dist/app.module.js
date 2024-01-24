"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const user_module_1 = require("./user/user.module");
const order_module_1 = require("./order/order.module");
const customer_module_1 = require("./customer/customer.module");
const address_module_1 = require("./address/address.module");
const product_module_1 = require("./product/product.module");
const health_module_1 = require("./health/health.module");
const prisma_module_1 = require("./prisma/prisma.module");
const secretsManager_module_1 = require("./providers/secrets/secretsManager.module");
const serve_static_1 = require("@nestjs/serve-static");
const serveStaticOptions_service_1 = require("./serveStaticOptions.service");
const config_1 = require("@nestjs/config");
const graphql_1 = require("@nestjs/graphql");
const apollo_1 = require("@nestjs/apollo");
const acl_module_1 = require("./auth/acl.module");
const auth_module_1 = require("./auth/auth.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        controllers: [],
        imports: [
            acl_module_1.ACLModule,
            auth_module_1.AuthModule,
            user_module_1.UserModule,
            order_module_1.OrderModule,
            customer_module_1.CustomerModule,
            address_module_1.AddressModule,
            product_module_1.ProductModule,
            health_module_1.HealthModule,
            prisma_module_1.PrismaModule,
            secretsManager_module_1.SecretsManagerModule,
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            serve_static_1.ServeStaticModule.forRootAsync({
                useClass: serveStaticOptions_service_1.ServeStaticOptionsService,
            }),
            graphql_1.GraphQLModule.forRootAsync({
                driver: apollo_1.ApolloDriver,
                useFactory: (configService) => {
                    const playground = configService.get('GRAPHQL_PLAYGROUND');
                    const introspection = configService.get('GRAPHQL_INTROSPECTION');
                    return {
                        autoSchemaFile: 'schema.graphql',
                        sortSchema: true,
                        playground,
                        introspection: playground || introspection,
                    };
                },
                inject: [config_1.ConfigService],
                imports: [config_1.ConfigModule],
            }),
        ],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map