import { User } from "../../models/User.js";
import jwt from "jsonwebtoken";
import { jwtKey } from "../../constrants.js";

export function registerRoute(app, path) {
  app.get(path + "/register", async (req, res) => {
    const { username, login, password } = req.query;

    const existingUser = await User.findOne({
      where: {
        login,
      },
    });

    if (existingUser) {
      res
        .status(400)
        .send({ error: "Пользовать с таким логином уже существует" });
      
      return;
    }

    const user = await User.create({
      username,
      login,
      password,
    });

    const parsedUser = JSON.parse(JSON.stringify(user));

    const token = jwt.sign({ id: parsedUser.id }, jwtKey);

    res.send({ ...parsedUser, password: undefined, token });
  });
}
