"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = exports.router = void 0;
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
exports.router = express_1.default.Router();
const controller = (pathPrefix) => {
    return (target) => {
        const targetPrototype = Object.getOwnPropertyNames(target.prototype);
        for (const key of targetPrototype) {
            const path = Reflect.getMetadata("path" /* Feature.PATH */, target.prototype, key);
            const method = Reflect.getMetadata("method" /* Feature.METHOD */, target.prototype, key);
            if (path && method) {
                exports.router[method](`${pathPrefix}${path}`, target.prototype[key]);
            }
        }
    };
};
exports.controller = controller;
