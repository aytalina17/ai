import type { Moment } from "../../model/types";
import styles from "./MomentTile.module.css";

export interface MomentTileProps {
  moment: Moment;
}

/** One photo tile inside the "Моменты с Лапочкой" mosaic. Absolutely
 * positioned by its own layout data (see entities/moment/model). */
export function MomentTile({ moment }: MomentTileProps) {
  return (
    <div
      className={styles.tile}
      style={{
        top: moment.top,
        left: moment.left,
        width: moment.width,
        height: moment.height,
      }}
    >
      <img src={moment.image} alt="" className={styles.image} />
    </div>
  );
}
