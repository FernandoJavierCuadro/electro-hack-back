const jwt = require("express-jwt");
const { validateRegister, validateLogin } = require("../validation");

const {
  register,
  logIn,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

function userRoutes(app) {
  app.post("/api/v1/users/create", validateRegister, register);

  app.post("/api/v1/users/find", validateLogin, logIn);

  app.put(
    "/api/v1/users",
    jwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
    updateUser
  );

  app.delete(
    "/api/v1/users",
    jwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
    deleteUser
  );
}

module.exports = userRoutes;
