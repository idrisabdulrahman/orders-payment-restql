"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductServiceBase = void 0;
class ProductServiceBase {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async count(args) {
        return this.prisma.product.count(args);
    }
    async products(args) {
        return this.prisma.product.findMany(args);
    }
    async product(args) {
        return this.prisma.product.findUnique(args);
    }
    async createProduct(args) {
        return this.prisma.product.create(args);
    }
    async updateProduct(args) {
        return this.prisma.product.update(args);
    }
    async deleteProduct(args) {
        return this.prisma.product.delete(args);
    }
    async findOrders(parentId, args) {
        return this.prisma.product
            .findUniqueOrThrow({
            where: { id: parentId },
        })
            .orders(args);
    }
}
exports.ProductServiceBase = ProductServiceBase;
//# sourceMappingURL=product.service.base.js.map