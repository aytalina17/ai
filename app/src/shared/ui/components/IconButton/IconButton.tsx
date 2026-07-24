import type { ButtonHTMLAttributes } from "react";
import styles from "./IconButton.module.css";

export type IconButtonVariant = "plain" | "glass" | "surface";

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
  alt: string;
  size?: number;
  variant?: IconButtonVariant;
}

/** Round, accessible icon-only button. Touch target is always >= 44px. */
export function IconButton({
  icon,
  alt,
  size = 44,
  variant = "plain",
  className,
  type = "button",
  ...rest
}: IconButtonProps) {
  return (
    <button
      type={type}
      aria-label={alt}
      className={[styles.iconButton, styles[variant], className].filter(Boolean).join(" ")}
      style={{ width: size, height: size }}
      {...rest}
    >
      <img src={icon} alt="" aria-hidden="true" className={styles.icon} />
    </button>
  );
}
