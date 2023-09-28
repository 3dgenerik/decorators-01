import { Request, Response } from 'express';
import { controller, get } from './decorators';

@controller(ControllerPrefix.PREFIX)
class LoginController {
    @get('login')
    getLogin(req: Request, res: Response): void {
        res.send(`
            <form method = "POST">
                <label>Email</label><br>
                <input type="email" name="email"/><br>
                <label>Passowrd</label><br>
                <input type="password" name="password"/><br>
                <button>Button</button>
            </form>
        `);
  }
}
