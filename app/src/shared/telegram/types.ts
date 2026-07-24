export type TelegramColorScheme = "light" | "dark";

export interface TelegramThemeParams {
  bg_color?: string;
  text_color?: string;
  hint_color?: string;
  link_color?: string;
  button_color?: string;
  button_text_color?: string;
  secondary_bg_color?: string;
  [key: string]: string | undefined;
}

export interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code?: string;
  photo_url?: string;
}

export interface TelegramButtonController {
  text: string;
  color: string;
  textColor: string;
  isVisible: boolean;
  isActive: boolean;
  setText(text: string): void;
  onClick(callback: () => void): void;
  offClick(callback: () => void): void;
  show(): void;
  hide(): void;
  enable(): void;
  disable(): void;
}

export interface TelegramBackButtonController {
  isVisible: boolean;
  onClick(callback: () => void): void;
  offClick(callback: () => void): void;
  show(): void;
  hide(): void;
}

export interface TelegramHapticFeedback {
  impactOccurred(style: "light" | "medium" | "heavy" | "rigid" | "soft"): void;
  notificationOccurred(type: "error" | "success" | "warning"): void;
  selectionChanged(): void;
}

export type TelegramEventName = "themeChanged" | "viewportChanged" | "backButtonClicked" | "mainButtonClicked";

export interface TelegramWebAppLike {
  readonly platform: string;
  readonly version: string;
  readonly colorScheme: TelegramColorScheme;
  readonly themeParams: TelegramThemeParams;
  readonly initDataUnsafe: { user?: TelegramUser };
  readonly MainButton: TelegramButtonController;
  readonly BackButton: TelegramBackButtonController;
  readonly HapticFeedback: TelegramHapticFeedback;
  ready(): void;
  expand(): void;
  close(): void;
  onEvent(event: TelegramEventName, callback: () => void): void;
  offEvent(event: TelegramEventName, callback: () => void): void;
}

declare global {
  interface Window {
    Telegram?: {
      WebApp: TelegramWebAppLike;
    };
  }
}
