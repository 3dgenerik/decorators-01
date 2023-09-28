"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.post = exports.get = void 0;
require("reflect-metadata");
const get = (path) => {
    return (target, key, desc) => {
        Reflect.defineMetadata("path" /* Feature.PATH */, path, target, key);
        Reflect.defineMetadata("method" /* Feature.METHOD */, "get" /* Method.GET */, target, key);
    };
};
exports.get = get;
const post = (path) => {
    return (target, key, desc) => {
        Reflect.defineMetadata("path" /* Feature.PATH */, path, target, key);
        Reflect.defineMetadata("method" /* Feature.METHOD */, "post" /* Method.POST */, target, key);
    };
};
exports.post = post;
