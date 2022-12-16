import { registerRoute } from "./register.js";
import { authRoute } from "./auth.js";

export function usersRoutes(app) {
  const path = "/users";

  registerRoute(app, path);
  authRoute(app, path);
}
