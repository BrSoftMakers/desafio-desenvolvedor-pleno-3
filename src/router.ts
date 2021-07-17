import { Router } from "express";
import { AuthUserController } from "./app/controllers/AuthUserController";
import { CreateUserController } from "./app/controllers/CreateUserController";

const router = Router();

const createUserController = new CreateUserController();
const authUserController = new AuthUserController();

router.post('/register', createUserController.handle);
router.post('/login', authUserController.handle);

export { router };