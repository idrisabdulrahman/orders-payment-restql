"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerServiceBase = void 0;
class CustomerServiceBase {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async count(args) {
        return this.prisma.customer.count(args);
    }
    async customers(args) {
        return this.prisma.customer.findMany(args);
    }
    async customer(args) {
        return this.prisma.customer.findUnique(args);
    }
    async createCustomer(args) {
        return this.prisma.customer.create(args);
    }
    async updateCustomer(args) {
        return this.prisma.customer.update(args);
    }
    async deleteCustomer(args) {
        return this.prisma.customer.delete(args);
    }
    async findOrders(parentId, args) {
        return this.prisma.customer
            .findUniqueOrThrow({
            where: { id: parentId },
        })
            .orders(args);
    }
    async getAddress(parentId) {
        return this.prisma.customer
            .findUnique({
            where: { id: parentId },
        })
            .address();
    }
}
exports.CustomerServiceBase = CustomerServiceBase;
//# sourceMappingURL=customer.service.base.js.map