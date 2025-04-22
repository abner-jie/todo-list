"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const test_1 = __importDefault(require("./test"));
const router = new koa_router_1.default();
// Test route
router.use('/test', test_1.default.routes());
exports.default = router;
