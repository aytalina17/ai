import closeIcon from "../../shared/icons/close.svg";
import chevronDownIcon from "../../shared/icons/wrap.svg";
import moreIcon from "../../shared/icons/more-more-andriod.svg";
import logoWordmark from "../../shared/icons/logo-wordmark.svg";
import { closeMiniApp } from "../../shared/telegram";
import styles from "./AppTopBar.module.css";

/** Floating bar over the hero: close (Telegram close), logo, quick menu. */
export function AppTopBar() {
  return (
    <div className={styles.bar}>
      <button type="button" onClick={closeMiniApp} className={styles.closeButton} aria-label="Закрыть Mini App">
        <span className={styles.iconSlot}>
          <img src={closeIcon} alt="" aria-hidden="true" className={styles.closeIcon} />
        </span>
        <span className={styles.closeLabel}>Close</span>
      </button>

      <img src={logoWordmark} alt="lapochka" className={styles.logo} />

      <button type="button" className={styles.menuButton} aria-label="Открыть меню">
        <span className={styles.iconSlot}>
          <img src={chevronDownIcon} alt="" aria-hidden="true" className={styles.menuIcon} />
        </span>
        <span className={styles.iconSlot}>
          <img src={moreIcon} alt="" aria-hidden="true" className={styles.menuIcon} />
        </span>
      </button>
    </div>
  );
}
