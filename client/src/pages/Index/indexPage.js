import "./indexPage.css";
import { Input, Button } from "antd";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function IndexPage() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();

  const handleOnClick = () => {
    fetch(
      `http://localhost:5000/users/auth?login=${login}&password=${password}`
    )
      .then((e) => e.json())
      .then((e) => {
        if (e.token) {
          localStorage.setItem("token", e.token);
          navigation("/orders");
        } else {
          alert("Ошибка авторизации");
        }
      });
  };

  return (
    <div className="parent">
      <h1>Авторизация</h1>
      <Input
        placeholder="Логин"
        onChange={(e) => {
          setLogin(e.target.value);
        }}
      />
      <Input
        placeholder="Пароль"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type={"password"}
      />
      <Button type="primary" onClick={handleOnClick}>
        Войти
      </Button>
      <Link to={"/register"}>Зарегистрироваться</Link>
    </div>
  );
}
