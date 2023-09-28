"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_session_1 = __importDefault(require("cookie-session"));
const controller_1 = require("./controllers/decorators/controller");
require("./controllers/LoginController");
require("./controllers/PostController");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_session_1.default)({ keys: ["secret"] }));
app.use(controller_1.router);
app.listen(4000, () => {
    console.log('...listening port 4000');
});
