import Router from "express";
import useController from "../app/controllers/use.controller.js";
import middlewareAuthen from "../app/middlewares/authenticator.middlewares.js";
import middlewareAuthor from "../app/middlewares/authorization.middlewares.js";

const router = Router();

// [GET] /api/v1/users/
router.get("/", middlewareAuthen.verifyToken, useController.getAll);

// [PORT] /api/v1/users/register
router.post("/register", useController.register);

// [PORT] /api/v1/users/login
router.post("/login", useController.login);

// [PUT] /api/v1/users/:id
router.put("/:id", middlewareAuthor.verifyToken, useController.update);

// [DELETE] /api/v1/users/:id
router.delete("/:id", middlewareAuthor.verifyToken, useController.delete);

export default router;
