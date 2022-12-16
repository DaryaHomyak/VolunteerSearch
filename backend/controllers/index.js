import { Book } from "../models/Book.js";
import { Order } from "../models/Order.js";

export function IndexRoute(app) {
  app.get("/books", async (req, res) => {
    const books = await Book.findAll();
    res.send(books);
  });

  app.get("/orders", async (req, res) => {
    const { userId } = app.locals.settings;

    const orders = await Order.findAll({
      where: {
        userId,
      },
    });

    res.send({ orders });
  });

  app.post("/books", async (req, res) => {
    const query = req.query;
    const books = await Book.create({
      author: query.author,
      name: query.name,
    });
    res.send(books);
  });

  app.delete("/books", async (req, res) => {
    const query = req.query;
    const books = await Book.destroy({
      where: {
        id: query.id,
      },
    });
    res.send({ books });
  });

  app.post("/orders", async (req, res) => {
    const query = req.query;
    const { userId } = app.locals.settings;
    const orders = await Order.create({
      bookId: query.bookId,
      orderBy: query.orderBy,
      userId,
    });

    res.send(orders);
  });

  app.put("/orders", async (req, res) => {
    const query = req.query;
    const { userId } = app.locals.settings;
    const orders = await Order.update(
      {
        bookId: query.bookId,
      },
      {
        where: {
          id: query.id,
          userId,
        },
      }
    );
    res.send(orders);
  });
}
