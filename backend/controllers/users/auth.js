import { User } from "../../models/User.js";
import jwt from "jsonwebtoken";
import { jwtKey } from "../../constrants.js";

export function authRoute(app, path) {
  app.get(path + "/auth", (req, res) => {
    const { login, password } = req.query;

    User.findOne({
      where: {
        login,
        password,
      },
    }).then((user) => {
      if (!user) {
        res.status(403).send({ error: "Неверный логин или пароль" });
      } else {
        const token = jwt.sign({ id: user.get("id") }, jwtKey);
        res.send({ token });
      }
    });
  });
}
