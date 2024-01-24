"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInvalidAttributes = void 0;
function getInvalidAttributes(permission, data) {
    const filteredData = permission.filter(structuredClone(data));
    return Object.keys(data).filter((key) => !(key in filteredData));
}
exports.getInvalidAttributes = getInvalidAttributes;
//# sourceMappingURL=abac.util.js.map