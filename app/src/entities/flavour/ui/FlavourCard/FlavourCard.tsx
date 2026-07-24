import mapPinIcon from "../../../../shared/icons/icon-flavour-map.svg";
import type { Flavour } from "../../model/types";
import styles from "./FlavourCard.module.css";

export interface FlavourCardProps {
  flavour: Flavour;
  onSelect?: (flavour: Flavour) => void;
  className?: string;
}

/** Vertical flavour card: photo, gradient, name and a "find on map" pin. */
export function FlavourCard({ flavour, onSelect, className }: FlavourCardProps) {
  return (
    <button
      type="button"
      className={[styles.card, className].filter(Boolean).join(" ")}
      onClick={() => onSelect?.(flavour)}
      aria-label={`Открыть вкус ${flavour.name}`}
    >
      <img src={flavour.image} alt="" className={styles.image} />
      <div className={styles.gradient} aria-hidden="true" />
      <p className={styles.name}>{flavour.name}</p>
      <span className={styles.pin} aria-hidden="true">
        <img src={mapPinIcon} alt="" />
      </span>
    </button>
  );
}
