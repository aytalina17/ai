import { createMockTelegramWebApp } from "./mockTelegram";
import type { TelegramWebAppLike } from "./types";

/**
 * The ONLY place in the app allowed to touch `window.Telegram.WebApp`.
 * Every other module (components, hooks, pages) must go through the
 * functions and hooks exported from `shared/telegram`.
 */

let cachedWebApp: TelegramWebAppLike | null = null;

function resolveWebApp(): TelegramWebAppLike {
  if (cachedWebApp) return cachedWebApp;

  const real = typeof window !== "undefined" ? window.Telegram?.WebApp : undefined;
  cachedWebApp = real ?? createMockTelegramWebApp();

  if (!real) {
    console.info(
      "[shared/telegram] Telegram WebApp SDK not found — falling back to mockTelegram for local development."
    );
  }

  return cachedWebApp;
}

/** Returns the active WebApp instance (real inside Telegram, mock otherwise). */
export function getWebApp(): TelegramWebAppLike {
  return resolveWebApp();
}

/** Call once on app startup: signals readiness and expands to full height. */
export function initMiniApp(): void {
  const tg = getWebApp();
  tg.ready();
  tg.expand();
}

/** Closes the Mini App (no-op with a console notice outside Telegram). */
export function closeMiniApp(): void {
  getWebApp().close();
}

/** Fires Telegram haptic feedback; safely ignored outside Telegram. */
export function triggerHaptic(style: "light" | "medium" | "heavy" | "rigid" | "soft" = "light"): void {
  getWebApp().HapticFeedback.impactOccurred(style);
}
