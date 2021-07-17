import { Router } from "express";
import { Auth } from "./middleware/Auth";
import { AuthUserController } from "./app/controllers/AuthUserController";
import { CreatePostController } from "./app/controllers/CreatePostController";
import { CreateUserController } from "./app/controllers/CreateUserController";

const router = Router();

const authUserController = new AuthUserController();
const createUserController = new CreateUserController();
const createPostController = new CreatePostController();

router.post('/register', createUserController.handle);
router.post('/login', authUserController.handle);
router.post('posts', Auth, createPostController.handle)

export { router };