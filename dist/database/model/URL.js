"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const encurtadorSchema = new Schema({
    hash: String,
    originURL: String,
    shortURL: String,
});
const URL = mongoose_1.default.model("URL", encurtadorSchema);
exports.default = URL;
//# sourceMappingURL=URL.js.map