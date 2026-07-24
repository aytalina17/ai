import { useEffect, useState } from "react";
import missionFruit1 from "./assets/mission-fruit-1.svg";
import missionFruit2 from "./assets/mission-fruit-2.svg";
import styles from "./MissionBanner.module.css";

const INITIAL_SECONDS = 20 * 3600 + 35 * 60 + 2;

function formatCountdown(totalSeconds: number): string {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return [hours, minutes, seconds].map((n) => String(n).padStart(2, "0")).join(":");
}

/**
 * "Миссия дня" — daily mission card with a live countdown until it resets.
 * Assumption: the countdown just loops (20:35:02 → 0 → restarts) since the
 * mission-reset business rule isn't defined in the Figma file.
 */
export function MissionBanner() {
  const [secondsLeft, setSecondsLeft] = useState(INITIAL_SECONDS);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((prev) => (prev <= 0 ? INITIAL_SECONDS : prev - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.card} aria-label="Миссия дня">
      <div className={styles.textBlock}>
        <p className={styles.title}>Миссия дня</p>
        <p className={styles.subtitle}>Проверь наличие вкусов Лапочки</p>
      </div>

      <time className={styles.timer} dateTime={`PT${secondsLeft}S`}>
        {formatCountdown(secondsLeft)}
      </time>

      <img src={missionFruit1} alt="" aria-hidden="true" className={styles.fruit1} />
      <img src={missionFruit2} alt="" aria-hidden="true" className={styles.fruit2} />
    </section>
  );
}
