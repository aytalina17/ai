export { getWebApp, initMiniApp, closeMiniApp, triggerHaptic } from "./telegram";
export { useMainButton } from "./hooks/useMainButton";
export { useBackButton } from "./hooks/useBackButton";
export { useTelegramTheme } from "./hooks/useTelegramTheme";
export { useTelegramUser } from "./hooks/useTelegramUser";
export type {
  TelegramUser,
  TelegramThemeParams,
  TelegramColorScheme,
  TelegramWebAppLike,
} from "./types";
