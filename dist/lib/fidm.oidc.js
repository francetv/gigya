"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FidmOidc = void 0;
var fidm_oidc_op_1 = require("./fidm.oidc.op");
var fidm_oidc_rp_1 = require("./fidm.oidc.rp");
__exportStar(require("./interfaces/gigya-response"), exports);
__exportStar(require("./fidm.oidc.op"), exports);
__exportStar(require("./fidm.oidc.rp"), exports);
var FidmOidc = /** @class */ (function () {
    function FidmOidc(gigya) {
        this.gigya = gigya;
        this.op = new fidm_oidc_op_1.default(gigya);
        this.rp = new fidm_oidc_rp_1.default(gigya);
    }
    return FidmOidc;
}());
exports.FidmOidc = FidmOidc;
exports.default = FidmOidc;
//# sourceMappingURL=fidm.oidc.js.map