import 'reflect-metadata'

export const get = (path: string)=>{
    return (target: any, key: string, desc: PropertyDescriptor)=>{
        Reflect.defineMetadata(Feature.PATH, path, target, key)
        Reflect.defineMetadata(Feature.METHOD, Method.GET, target, key)
    }
}

export const post = (path: string)=>{
    return (target: any, key: string, desc: PropertyDescriptor)=>{
        Reflect.defineMetadata(Feature.PATH, path, target, key)
        Reflect.defineMetadata(Feature.METHOD, Method.POST, target, key)
    }
}