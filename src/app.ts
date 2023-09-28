import express from "express";
import cookieSession from "cookie-session";
import { router } from "./controllers/decorators/controller";
import './controllers/LoginController'
import './controllers/PostController'

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieSession({keys:["secret"]}))
app.use(router)

app.listen(4000, ()=>{
    console.log('...listening port 4000');
})