import { Router } from "express";
import { Auth } from "./middleware/Auth";
import { AuthUserController } from "./app/controllers/AuthUserController";
import { CreatePostController } from "./app/controllers/CreatePostController";
import { CreateUserController } from "./app/controllers/CreateUserController";
import { UpdatePostController } from "./app/controllers/UpdatePostController";
import { ListPostsController } from "./app/controllers/ListPostsController";

const router = Router();

const authUserController = new AuthUserController();
const createUserController = new CreateUserController();
const createPostController = new CreatePostController();
const updatePostController = new UpdatePostController();
const listPostsController = new ListPostsController();

router.post('/register', createUserController.handle);
router.post('/login', authUserController.handle);
router
    .get('/posts', Auth, listPostsController.handle)
    .post('/posts', Auth, createPostController.handle)
    .put('/posts/:id', Auth, updatePostController.handle)


export { router };