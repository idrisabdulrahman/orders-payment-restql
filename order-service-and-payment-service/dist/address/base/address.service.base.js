"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressServiceBase = void 0;
class AddressServiceBase {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async count(args) {
        return this.prisma.address.count(args);
    }
    async addresses(args) {
        return this.prisma.address.findMany(args);
    }
    async address(args) {
        return this.prisma.address.findUnique(args);
    }
    async createAddress(args) {
        return this.prisma.address.create(args);
    }
    async updateAddress(args) {
        return this.prisma.address.update(args);
    }
    async deleteAddress(args) {
        return this.prisma.address.delete(args);
    }
    async findCustomers(parentId, args) {
        return this.prisma.address
            .findUniqueOrThrow({
            where: { id: parentId },
        })
            .customers(args);
    }
}
exports.AddressServiceBase = AddressServiceBase;
//# sourceMappingURL=address.service.base.js.map