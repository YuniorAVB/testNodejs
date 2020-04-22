const { Router } = require("express");
const {
  create,
  update,
  destroy,
  read,
} = require("../controllers/Users.controllers");

const usersRouter = new Router();

usersRouter.post("/create", create);
usersRouter.put("/update", update);
usersRouter.delete("/delete", destroy);
usersRouter.get("/read", read);

module.exports = usersRouter;
