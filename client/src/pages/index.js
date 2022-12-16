import styles from "./MainPage.module.scss";
import Button from "../components/Button/Button";
import { useNavigate } from "react-router-dom";

export function MainPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.mainPage}>
      <h1>Портал для поиска волонтеров</h1>
      <div className={styles.buttonsContainer}>
        <Button
          onClick={() => {
            navigate("/company");
          }}
        >
          Ищу волонтеров!
        </Button>
        <Button
          onClick={() => {
            navigate("/volunteer");
          }}
        >
          Хочу волонтерить!
        </Button>
      </div>
    </div>
  );
}
