import { useEffect, useState } from "react";
import { MomentTile, fetchMoments, type Moment } from "../../entities/moment";
import { Skeleton } from "../../shared/ui/components/Skeleton";
import { ErrorState } from "../../shared/ui/components/ErrorState";
import plusIcon from "../../shared/icons/icon-plus-outline.svg";
import { triggerHaptic } from "../../shared/telegram";
import styles from "./MomentsGallery.module.css";

type Status = "loading" | "success" | "error";

/** "Моменты с Лапочкой" — user photo mosaic + "add a photo" call to action. */
export function MomentsGallery() {
  const [status, setStatus] = useState<Status>("loading");
  const [moments, setMoments] = useState<Moment[]>([]);

  const load = () => {
    setStatus("loading");
    fetchMoments()
      .then((result) => {
        setMoments(result);
        setStatus("success");
      })
      .catch(() => setStatus("error"));
  };

  useEffect(load, []);

  return (
    <section className={styles.section} aria-label="Моменты с Лапочкой">
      <h2 className={styles.title}>Моменты с Лапочкой</h2>

      {status === "error" ? <ErrorState message="Не удалось загрузить моменты." onRetry={load} /> : null}

      {status !== "error" ? (
        <div className={styles.canvas}>
          <button
            type="button"
            className={styles.addTile}
            onClick={() => triggerHaptic("light")}
            aria-label="Добавить фото момента с Лапочкой"
          >
            <img src={plusIcon} alt="" aria-hidden="true" className={styles.addIcon} />
            <span>Добавить фото</span>
          </button>

          {status === "loading"
            ? Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className={styles.skeletonTile} style={SKELETON_POSITIONS[i]}>
                  <Skeleton width="100%" height="100%" radius={20} />
                </div>
              ))
            : moments.map((moment) => <MomentTile key={moment.id} moment={moment} />)}
        </div>
      ) : null}
    </section>
  );
}

const SKELETON_POSITIONS = [
  { top: 123, left: 0, width: 115, height: 229 },
  { top: 360, left: 0, width: 115, height: 229 },
  { top: 419, left: 123, width: 115, height: 229 },
  { top: 237, left: 123, width: 115, height: 174 },
  { top: 123, left: 246, width: 115, height: 229 },
  { top: 0, left: 246, width: 115, height: 115 },
  { top: 0, left: 123, width: 115, height: 229 },
  { top: 360, left: 246, width: 115, height: 229 },
].map((pos) => ({ position: "absolute" as const, ...pos }));
