import heroBg from "./assets/hero-bg.jpg";
import headlineMask from "./assets/headline-mask.svg";
import canImage from "./assets/can-peach-passion.png";
import leafGroup from "./assets/leaf-group.svg";
import { AppTopBar } from "../AppTopBar";
import styles from "./Hero.module.css";

/** Top hero: background photo, decorative leaves, headline and product can. */
export function Hero() {
  return (
    <div className={styles.hero}>
      <img src={heroBg} alt="" className={styles.background} />

      <div className={styles.leafGroup} aria-hidden="true">
        <img src={leafGroup} alt="" />
      </div>

      <AppTopBar />

      <div className={styles.headlineWrap}>
        <h1 className={styles.headline}>
          Найди
          <br />
          lapochka
        </h1>
        <img src={headlineMask} alt="" aria-hidden="true" className={styles.headlineMask} />
      </div>

      <div className={styles.canWrap}>
        <img src={canImage} alt="lapochka Peach + Passion Fruit" className={styles.can} />
      </div>
    </div>
  );
}
