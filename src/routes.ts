import { Router } from "express";

import AuthMiddleware from "./middlewares/AuthMiddleware";

import { CreateUserController } from "./controllers/CreateUserController";
import { AuthController } from "./controllers/AuthController";

import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { DeleteCategoryController } from "./controllers/DeleteCategoryController";
import { GetAllCategoriesController } from "./controllers/GetAllCategoriesController";
import { GetCategoryByIdController } from "./controllers/GetCategoryByIdController";
import { UpdateCategoryController } from "./controllers/UpdateCategoryController";

import { CreateMovieController } from "./controllers/CreateMovieController";
import { DeleteMovieController } from "./controllers/DeleteMovieController";
import { GetAllMoviesController } from "./controllers/GetAllMoviesController";
import { GetMovieByIdController } from "./controllers/GetMovieByIdController";
import { UpdateMovieController } from "./controllers/UpdateMovieController";

const routes = Router();

routes.post("/user", new CreateUserController().handle);
routes.post("/login", new AuthController().handle);

routes.use(AuthMiddleware);

routes.get("/categories", new GetAllCategoriesController().handle);
routes.get("/category/:id", new GetCategoryByIdController().handle);
routes.post("/category", new CreateCategoryController().handle);
routes.put("/category/:id", new UpdateCategoryController().handle);
routes.delete("/category/:id", new DeleteCategoryController().handle);

routes.get("/movies", new GetAllMoviesController().handle);
routes.get("/movies/:id", new GetMovieByIdController().handle);
routes.post("/movies", new CreateMovieController().handle);
routes.put("/movies/:id", new UpdateMovieController().handle);
routes.delete("/movies/:id", new DeleteMovieController().handle);

export { routes };
