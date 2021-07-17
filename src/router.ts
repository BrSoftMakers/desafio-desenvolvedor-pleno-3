import { Router } from "express";
import { Auth } from "./middleware/Auth";
import { AuthUserController } from "./app/controllers/AuthUserController";
import { CreatePostController } from "./app/controllers/CreatePostController";
import { CreateUserController } from "./app/controllers/CreateUserController";
import { UpdatePostController } from "./app/controllers/UpdatePostController";
import { ListPostsController } from "./app/controllers/ListPostsController";
import { ListPostUniqueController } from "./app/controllers/ListPostUniqueController";
import { DeletePostController } from "./app/controllers/DeletePostController";

const router = Router();

const authUserController = new AuthUserController();
const createUserController = new CreateUserController();
const createPostController = new CreatePostController();
const updatePostController = new UpdatePostController();
const listPostsController = new ListPostsController();
const listPostUniqueController = new ListPostUniqueController();
const deletePostController = new DeletePostController();

router.post('/register', createUserController.handle);
router.post('/login', authUserController.handle);
router
    .get('/posts', Auth, listPostsController.handle)
    .get('/posts/:id', Auth, listPostUniqueController.handle)
    .post('/posts', Auth, createPostController.handle)
    .put('/posts/:id', Auth, updatePostController.handle)
    .delete('/posts/:id', Auth, deletePostController.handle);


export { router };