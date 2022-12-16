export function deleteOrder(app) {
   app.delete("/orders", async (req, res) => {
     const query = req.query;
     const orders = await Order.destroy({
       where: {
         id: query.id,
       },
     });
     res.send({ orders });
   });
}