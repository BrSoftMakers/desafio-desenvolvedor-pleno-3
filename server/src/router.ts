import { Router } from "express";
import { Auth } from "./middleware/Auth";
import { AuthUserController } from "./app/controllers/AuthUserController";
import { CreatePostController } from "./app/controllers/CreatePostController";
import { CreateUserController } from "./app/controllers/CreateUserController";
import { UpdatePostController } from "./app/controllers/UpdatePostController";
import { ListPostsController } from "./app/controllers/ListPostsController";
import { ListPostUniqueController } from "./app/controllers/ListPostUniqueController";
import { DeletePostController } from "./app/controllers/DeletePostController";
import { ListUserController } from "./app/controllers/ListUserController";
import { UserIdController } from "./app/controllers/UserIdController";
import { ListPostUserController } from "./app/controllers/ListPostUsercontroller";

const router = Router();

const authUserController = new AuthUserController();
const createUserController = new CreateUserController();
const userIdController = new UserIdController();
const createPostController = new CreatePostController();
const updatePostController = new UpdatePostController();
const listUserController = new ListUserController();
const listPostsController = new ListPostsController();
const listPostsUserController = new ListPostUserController();
const listPostUniqueController = new ListPostUniqueController();
const deletePostController = new DeletePostController();

router.post('/register', createUserController.handle);
router.post('/login', authUserController.handle);
router.get('/users', listUserController.handle);
router.post('/userId', userIdController.handle);

router
    .get('/posts', Auth, listPostsController.handle)
    .get('/posts/:id', Auth, listPostUniqueController.handle)
    .post('/posts/user', Auth, listPostsUserController.handle)
    .post('/posts', Auth, createPostController.handle)
    .put('/posts/:id', Auth, updatePostController.handle)
    .delete('/posts/:id', Auth, deletePostController.handle);


export { router };