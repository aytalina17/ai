import { Link } from "react-router-dom";
import { ROUTES } from "../../shared/config/routes";
import styles from "./NotFoundPage.module.css";

export function NotFoundPage() {
  return (
    <div className={styles.page}>
      <p className={styles.code}>404</p>
      <p className={styles.text}>Такой страницы нет</p>
      <Link to={ROUTES.home} className={styles.link}>
        На главную
      </Link>
    </div>
  );
}
