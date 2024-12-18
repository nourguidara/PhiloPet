
const express = require("express");
const userRoute = express.Router();
const {
getUsers,
postUser,
putUser,
deleteUser,
getOneUser,
login,
} = require("../Controllers/userController");
const isAuth = require("../middlewares/isAuth")
const isAutho=require('../middlewares/isAutho')
userRoute.get("/users", getUsers);
userRoute.get("/users/:id", isAuth,isAutho(['user']), getOneUser);
userRoute.post("/users", postUser);
userRoute.put("/users/:id", putUser);
userRoute.delete("/users/:id",isAuth,isAutho(['admin']), deleteUser);
userRoute.post("/login", login);
module.exports = userRoute;
