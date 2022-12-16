import express from "express";
import { deleteOrder } from "./controllers/deleteOrder.js";
import { IndexRoute } from "./controllers/index.js";
import { usersRoutes } from "./controllers/users/index.js";
import jwt from "jsonwebtoken";
import { jwtKey } from "./constrants.js";
import cors from "cors";

// Приложение
const app = express();
const port = 5000;

app.use(cors());

app.use((req, res, next) => {
  const paths = ["/users/register", "/users/auth"];
  const token = req.query.token || "";

  if (paths.includes(req["_parsedUrl"].pathname)) {
    next();
  } else {
    try {
      const decoded = jwt.verify(token, jwtKey);
      app.set("userId", decoded.id);
      next();
    } catch (e) {
      res.status(403).send({ error: "not authorized" });
    }
  }
});

IndexRoute(app);
deleteOrder(app);
usersRoutes(app);

app.listen(port);
