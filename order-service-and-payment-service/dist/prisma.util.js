"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformStringFieldUpdateInput = exports.isRecordNotFoundError = exports.PRISMA_RECORD_NOT_FOUND = exports.PRISMA_QUERY_INTERPRETATION_ERROR = void 0;
exports.PRISMA_QUERY_INTERPRETATION_ERROR = "P2016";
exports.PRISMA_RECORD_NOT_FOUND = "RecordNotFound";
function isRecordNotFoundError(error) {
    return (error instanceof Error &&
        "code" in error &&
        error.code === exports.PRISMA_QUERY_INTERPRETATION_ERROR &&
        error.message.includes(exports.PRISMA_RECORD_NOT_FOUND));
}
exports.isRecordNotFoundError = isRecordNotFoundError;
async function transformStringFieldUpdateInput(input, transform) {
    if (typeof input === "object" && typeof input?.set === "string") {
        return { set: await transform(input.set) };
    }
    if (typeof input === "object") {
        if (typeof input.set === "string") {
            return { set: await transform(input.set) };
        }
        return input;
    }
    if (typeof input === "string") {
        return (await transform(input));
    }
    return input;
}
exports.transformStringFieldUpdateInput = transformStringFieldUpdateInput;
//# sourceMappingURL=prisma.util.js.map