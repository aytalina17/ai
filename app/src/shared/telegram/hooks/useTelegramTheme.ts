import { useEffect, useState } from "react";
import { getWebApp } from "../telegram";
import type { TelegramColorScheme, TelegramThemeParams } from "../types";

const THEME_KEY_TO_CSS_VAR: Record<string, string> = {
  bg_color: "--tg-theme-bg-color",
  text_color: "--tg-theme-text-color",
  hint_color: "--tg-theme-hint-color",
  link_color: "--tg-theme-link-color",
  button_color: "--tg-theme-button-color",
  button_text_color: "--tg-theme-button-text-color",
  secondary_bg_color: "--tg-theme-secondary-bg-color",
};

function applyThemeToDocument(theme: TelegramThemeParams) {
  const root = document.documentElement;
  for (const [key, value] of Object.entries(theme)) {
    const cssVar = THEME_KEY_TO_CSS_VAR[key];
    if (cssVar && value) {
      root.style.setProperty(cssVar, value);
    }
  }
}

/**
 * Exposes Telegram's theme params/colorScheme and mirrors them onto
 * `--tg-theme-*` CSS variables (consumed by shared/styles/tokens.css),
 * so components never read `window.Telegram` directly.
 */
export function useTelegramTheme() {
  const [theme, setTheme] = useState<TelegramThemeParams>(() => getWebApp().themeParams);
  const [colorScheme, setColorScheme] = useState<TelegramColorScheme>(() => getWebApp().colorScheme);

  useEffect(() => {
    const tg = getWebApp();
    applyThemeToDocument(tg.themeParams);

    const handleThemeChanged = () => {
      setTheme({ ...tg.themeParams });
      setColorScheme(tg.colorScheme);
      applyThemeToDocument(tg.themeParams);
    };

    tg.onEvent("themeChanged", handleThemeChanged);
    return () => tg.offEvent("themeChanged", handleThemeChanged);
  }, []);

  return { theme, colorScheme };
}
