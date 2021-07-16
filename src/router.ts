import { Router } from "express";
import { CreateUserUseCase } from "./app/useCases/createUserUseCase/CreateUserUseCase";

const router = Router();

const createUserController = new CreateUserUseCase();

router
    .post('/register', createUserController.execute)

export { router }