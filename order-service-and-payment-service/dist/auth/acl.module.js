"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ACLModule = void 0;
const nest_access_control_1 = require("nest-access-control");
const grants_json_1 = __importDefault(require("../grants.json"));
exports.ACLModule = nest_access_control_1.AccessControlModule.forRoles(new nest_access_control_1.RolesBuilder(grants_json_1.default));
//# sourceMappingURL=acl.module.js.map