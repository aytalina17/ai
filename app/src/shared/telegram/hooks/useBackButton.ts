import { useEffect, useRef } from "react";
import { getWebApp } from "../telegram";

/**
 * Shows Telegram's native BackButton while the screen is mounted and
 * wires it to `onBack`. Pass `enabled = false` on root screens (e.g. Home)
 * to keep it hidden.
 */
export function useBackButton(onBack: () => void, enabled = true) {
  const onBackRef = useRef(onBack);
  onBackRef.current = onBack;

  useEffect(() => {
    if (!enabled) return;

    const tg = getWebApp();
    const handler = () => onBackRef.current();

    tg.BackButton.onClick(handler);
    tg.BackButton.show();

    return () => {
      tg.BackButton.offClick(handler);
      tg.BackButton.hide();
    };
  }, [enabled]);
}
