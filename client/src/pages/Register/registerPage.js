import "./registerPage.css";
import { Input, Button } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function RegisterPage() {
  const [login, setLogin] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();

  const handleOnClick = () => {
    fetch(
      `http://localhost:5000/users/register?login=${login}&password=${password}&username=${username}`
    )
      .then((e) => e.json())
      .then((e) => {
        console.log(e);
        if (e?.token) {
          localStorage.setItem("token", e.token);
          navigation("/orders");
        } else {
          alert("Ошибка регистрации");
        }
      });
  };

  return (
    <div className="parent">
      <h1>Регистрация</h1>
      <Input
        placeholder="Имя"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
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
        Зарегистрироваться
      </Button>
    </div>
  );
}
