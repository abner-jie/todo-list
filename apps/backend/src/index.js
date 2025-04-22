"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const koa_cors_1 = __importDefault(require("koa-cors"));
const routes_1 = __importDefault(require("./routes"));
const app = new koa_1.default();
// Middleware
app.use((0, koa_cors_1.default)());
app.use((0, koa_bodyparser_1.default)());
// Routes
app.use(routes_1.default.routes());
app.use(routes_1.default.allowedMethods());
// Error handling
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
