import { useMemo } from "react";
import { getWebApp } from "../telegram";
import type { TelegramUser } from "../types";

/**
 * Returns the Telegram user from initData (or the mock guest user
 * outside Telegram). Server-side validation of initData happens in the
 * backend/edge function once it is connected — see README "Где менять API".
 */
export function useTelegramUser(): TelegramUser | undefined {
  return useMemo(() => getWebApp().initDataUnsafe.user, []);
}
