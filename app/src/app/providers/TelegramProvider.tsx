import { useEffect, type PropsWithChildren } from "react";
import { initMiniApp, useTelegramTheme } from "../../shared/telegram";

/**
 * Bootstraps the Telegram Mini App: signals readiness, expands to full
 * height and mirrors the live theme onto CSS variables. Safe to render
 * outside Telegram — falls back to mockTelegram automatically.
 */
export function TelegramProvider({ children }: PropsWithChildren) {
  useTelegramTheme();

  useEffect(() => {
    initMiniApp();
  }, []);

  return <>{children}</>;
}
