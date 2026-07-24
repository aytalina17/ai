import { useEffect, useState } from "react";
import mapBg from "./assets/map-bg.jpg";
import { fetchMapFindings, type MapFinding } from "../../entities/mapFinding";
import { Button } from "../../shared/ui/components/Button";
import { Skeleton } from "../../shared/ui/components/Skeleton";
import { triggerHaptic } from "../../shared/telegram";
import styles from "./TreasureMap.module.css";

/** "Карта находок" — map preview with pinned flavour sightings nearby. */
export function TreasureMap() {
  const [findings, setFindings] = useState<MapFinding[] | null>(null);

  useEffect(() => {
    fetchMapFindings().then(setFindings);
  }, []);

  return (
    <section className={styles.section} aria-label="Карта находок">
      <h2 className={styles.title}>Карта находок</h2>

      <div className={styles.body}>
        {findings === null ? (
          <Skeleton height={226} radius={24} />
        ) : (
          <div className={styles.mapPreview}>
            <img src={mapBg} alt="Карта находок lapochka поблизости" className={styles.mapImage} />
            {findings.map((finding) => (
              <span
                key={finding.id}
                className={styles.pin}
                style={{ top: finding.top, left: finding.left }}
                aria-hidden="true"
              >
                {finding.label}
              </span>
            ))}
          </div>
        )}

        <Button variant="secondary" onClick={() => triggerHaptic("light")}>
          Найти рядом
        </Button>
      </div>
    </section>
  );
}
