import type {
  TelegramBackButtonController,
  TelegramButtonController,
  TelegramColorScheme,
  TelegramEventName,
  TelegramHapticFeedback,
  TelegramThemeParams,
  TelegramWebAppLike,
} from "./types";

/**
 * Imitates the Telegram WebApp API for local development
 * (npm run dev, plain browser, CI). Lets every screen and
 * hook run unmodified outside of Telegram.
 */

const FIGMA_THEME: TelegramThemeParams = {
  bg_color: "#ffffff",
  text_color: "#393838",
  hint_color: "#696969",
  link_color: "#fe7962",
  button_color: "#fe7962",
  button_text_color: "#ffffff",
  secondary_bg_color: "#f5f4f4",
};

const MOCK_USER = {
  id: 1,
  first_name: "Гость",
  username: "lapochka_guest",
  language_code: "ru",
};

class MockButtonController implements TelegramButtonController {
  text = "Continue";
  color = FIGMA_THEME.button_color!;
  textColor = FIGMA_THEME.button_text_color!;
  isVisible = false;
  isActive = true;
  private listeners = new Set<() => void>();

  setText(text: string) {
    this.text = text;
  }

  onClick(callback: () => void) {
    this.listeners.add(callback);
  }

  offClick(callback: () => void) {
    this.listeners.delete(callback);
  }

  show() {
    this.isVisible = true;
  }

  hide() {
    this.isVisible = false;
  }

  enable() {
    this.isActive = true;
  }

  disable() {
    this.isActive = false;
  }
}

class MockBackButtonController implements TelegramBackButtonController {
  isVisible = false;
  private listeners = new Set<() => void>();

  onClick(callback: () => void) {
    this.listeners.add(callback);
  }

  offClick(callback: () => void) {
    this.listeners.delete(callback);
  }

  show() {
    this.isVisible = true;
  }

  hide() {
    this.isVisible = false;
  }
}

const mockHaptic: TelegramHapticFeedback = {
  impactOccurred(style) {
    console.info(`[mockTelegram] haptic impact: ${style}`);
  },
  notificationOccurred(type) {
    console.info(`[mockTelegram] haptic notification: ${type}`);
  },
  selectionChanged() {
    console.info("[mockTelegram] haptic selection changed");
  },
};

export class MockTelegramWebApp implements TelegramWebAppLike {
  readonly platform = "mock";
  readonly version = "8.0";
  readonly colorScheme: TelegramColorScheme = "light";
  readonly themeParams: TelegramThemeParams = FIGMA_THEME;
  readonly initDataUnsafe = { user: MOCK_USER };
  readonly MainButton = new MockButtonController();
  readonly BackButton = new MockBackButtonController();
  readonly HapticFeedback = mockHaptic;
  private eventListeners = new Map<TelegramEventName, Set<() => void>>();

  ready() {
    console.info("[mockTelegram] ready() — running outside Telegram, using mock WebApp API");
  }

  expand() {
    console.info("[mockTelegram] expand()");
  }

  close() {
    console.info("[mockTelegram] close() called — no-op outside Telegram");
  }

  onEvent(event: TelegramEventName, callback: () => void) {
    if (!this.eventListeners.has(event)) {
      this.eventListeners.set(event, new Set());
    }
    this.eventListeners.get(event)!.add(callback);
  }

  offEvent(event: TelegramEventName, callback: () => void) {
    this.eventListeners.get(event)?.delete(callback);
  }
}

export function createMockTelegramWebApp(): TelegramWebAppLike {
  return new MockTelegramWebApp();
}
