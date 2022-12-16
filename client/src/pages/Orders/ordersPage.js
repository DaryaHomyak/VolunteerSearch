import "./ordersPage.css";
import { List, Typography } from "antd";
import { useEffect, useState } from "react";

export function OrdersPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch(`http://localhost:5000/orders?token=${token}`)
      .then((e) => e.json())
      .then((e) => {
        setData(e.orders);
      });
  }, []);

  return (
    <div className="parent">
      <h1>Список заказов</h1>
      <List
        bordered
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Typography.Text>{item.id} — </Typography.Text> ID книги:{" "}
            {item.bookId}
          </List.Item>
        )}
      />
    </div>
  );
}
