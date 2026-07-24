import type { CSSProperties } from "react";
import styles from "./Skeleton.module.css";

export interface SkeletonProps {
  width?: number | string;
  height?: number | string;
  radius?: number | string;
  className?: string;
}

/** Shimmering placeholder shown while mock/async data is "loading". */
export function Skeleton({ width = "100%", height = 16, radius = 12, className }: SkeletonProps) {
  const style: CSSProperties = {
    width,
    height,
    borderRadius: radius,
  };

  return <div className={[styles.skeleton, className].filter(Boolean).join(" ")} style={style} aria-hidden="true" />;
}
