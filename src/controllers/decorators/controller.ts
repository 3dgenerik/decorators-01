import 'reflect-metadata'
import express from 'express';

export const router = express.Router()

export const controller = (pathPrefix: String)=>{
    return (target: Function)=>{
        const targetPrototype = Object.getOwnPropertyNames(target.prototype)
        for (const key of targetPrototype) {
            const path = Reflect.getMetadata(Feature.PATH, target.prototype, key)
            const method = Reflect.getMetadata(Feature.METHOD, target.prototype, key) as Method
            if(path && method){
                router[method](`${pathPrefix}${path}`, target.prototype[key])
            }
        }
    }
}