"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderServiceBase = void 0;
class OrderServiceBase {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async count(args) {
        return this.prisma.order.count(args);
    }
    async orders(args) {
        return this.prisma.order.findMany(args);
    }
    async order(args) {
        return this.prisma.order.findUnique(args);
    }
    async createOrder(args) {
        return this.prisma.order.create(args);
    }
    async updateOrder(args) {
        return this.prisma.order.update(args);
    }
    async deleteOrder(args) {
        return this.prisma.order.delete(args);
    }
    async getCustomer(parentId) {
        return this.prisma.order
            .findUnique({
            where: { id: parentId },
        })
            .customer();
    }
    async getProduct(parentId) {
        return this.prisma.order
            .findUnique({
            where: { id: parentId },
        })
            .product();
    }
}
exports.OrderServiceBase = OrderServiceBase;
//# sourceMappingURL=order.service.base.js.map