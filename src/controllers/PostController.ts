import { Request, Response } from "express";
import { controller } from "./decorators/controller";
import { post } from "./decorators/routes";

@controller(ControllerPrefix.PREFIX)
class PostController{
    @post('login')
    postLogin(req: Request, res: Response):void{
        const {email, password} = req.body;
        res.send({email, password})
    }
}