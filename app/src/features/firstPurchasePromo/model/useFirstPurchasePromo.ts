import { useEffect, useState } from "react";
import { triggerHaptic } from "../../../shared/telegram";

const STORAGE_KEY = "lapochka:first-purchase-promo-dismissed";
const AUTO_OPEN_DELAY_MS = 1200;

/**
 * Controls the "first purchase" onboarding sheet.
 * Assumption (not specified in Figma): it auto-opens once per browser
 * (persisted in localStorage) shortly after landing on Home, and can be
 * re-triggered manually — see README "Допущения".
 */
export function useFirstPurchasePromo() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const dismissed = typeof window !== "undefined" && window.localStorage.getItem(STORAGE_KEY) === "1";
    if (dismissed) return undefined;

    const timer = setTimeout(() => setIsOpen(true), AUTO_OPEN_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  const open = () => setIsOpen(true);

  const close = () => {
    setIsOpen(false);
    window.localStorage.setItem(STORAGE_KEY, "1");
  };

  const confirm = () => {
    triggerHaptic("medium");
    close();
  };

  return { isOpen, open, close, confirm };
}
