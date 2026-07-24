import { useEffect, useRef } from "react";
import { getWebApp } from "../telegram";

export interface UseMainButtonOptions {
  text: string;
  visible?: boolean;
  active?: boolean;
  onClick: () => void;
}

/**
 * Binds React state to Telegram's native MainButton.
 * Outside Telegram, the mock implementation just tracks the same state
 * so the hook never throws and behaves identically in dev mode.
 */
export function useMainButton({ text, visible = true, active = true, onClick }: UseMainButtonOptions) {
  const onClickRef = useRef(onClick);
  onClickRef.current = onClick;

  useEffect(() => {
    const tg = getWebApp();
    const handler = () => onClickRef.current();

    tg.MainButton.setText(text);
    tg.MainButton.onClick(handler);

    if (visible) {
      tg.MainButton.show();
    } else {
      tg.MainButton.hide();
    }

    if (active) {
      tg.MainButton.enable();
    } else {
      tg.MainButton.disable();
    }

    return () => {
      tg.MainButton.offClick(handler);
      tg.MainButton.hide();
    };
  }, [text, visible, active]);
}
