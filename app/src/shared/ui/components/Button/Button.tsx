import type { ButtonHTMLAttributes, ReactNode } from "react";
import blobPrimary from "./assets/btn-add-purchase.svg";
import blobSecondary from "./assets/btn-find-nearby.svg";
import styles from "./Button.module.css";

export type ButtonVariant = "primary" | "secondary";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
}

/**
 * Pill-shaped CTA button matching the "Button" component from Figma
 * (organic blob outline, 64px tall, full width).
 * variant="primary"   — solid coral fill, white label (e.g. "Добавить покупку")
 * variant="secondary" — light coral fill, coral label (e.g. "Найти рядом")
 */
export function Button({ variant = "primary", children, className, type = "button", ...rest }: ButtonProps) {
  const blob = variant === "primary" ? blobPrimary : blobSecondary;

  return (
    <button
      type={type}
      className={[styles.button, styles[variant], className].filter(Boolean).join(" ")}
      {...rest}
    >
      <img src={blob} alt="" aria-hidden="true" className={styles.blob} />
      <span className={styles.label}>{children}</span>
    </button>
  );
}
