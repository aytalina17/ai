import { NavLink } from "react-router-dom";
import iconHome from "../../shared/icons/icon-nav-home.svg";
import iconMap from "../../shared/icons/icon-nav-map.svg";
import iconAdd from "../../shared/icons/btn-nav-add.svg";
import iconList from "../../shared/icons/icon-nav-list.svg";
import iconUser from "../../shared/icons/icon-nav-user.svg";
import { ROUTES } from "../../shared/config/routes";
import { triggerHaptic } from "../../shared/telegram";
import styles from "./BottomNavigation.module.css";

/**
 * Fixed bottom navigation bar. Only "Главная" and "Каталог" are wired to
 * real screens (the only ones present in the Figma file); "Карта",
 * "Добавить" and "Профиль" are visual placeholders for future screens —
 * see README "Допущения".
 */
export function BottomNavigation() {
  return (
    <nav className={styles.nav} aria-label="Основная навигация">
      <NavLink
        to={ROUTES.home}
        end
        className={({ isActive }) => [styles.navButton, isActive ? styles.active : ""].join(" ")}
        aria-label="Главная"
      >
        <img src={iconHome} alt="" aria-hidden="true" className={styles.icon} />
      </NavLink>

      <button type="button" className={styles.navButton} onClick={() => triggerHaptic("light")} aria-label="Карта (скоро)">
        <img src={iconMap} alt="" aria-hidden="true" className={styles.icon} />
      </button>

      <button
        type="button"
        className={styles.addButton}
        onClick={() => triggerHaptic("medium")}
        aria-label="Добавить (скоро)"
      >
        <img src={iconAdd} alt="" aria-hidden="true" className={styles.addIcon} />
      </button>

      <NavLink
        to={ROUTES.catalog}
        className={({ isActive }) => [styles.navButton, isActive ? styles.active : ""].join(" ")}
        aria-label="Каталог вкусов"
      >
        <img src={iconList} alt="" aria-hidden="true" className={styles.icon} />
      </NavLink>

      <button type="button" className={styles.navButton} onClick={() => triggerHaptic("light")} aria-label="Профиль (скоро)">
        <img src={iconUser} alt="" aria-hidden="true" className={styles.icon} />
      </button>
    </nav>
  );
}
