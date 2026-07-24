import type { PropsWithChildren } from "react";
import { TelegramProvider } from "./TelegramProvider";

/** Root composition point for all app-wide providers. */
export function AppProviders({ children }: PropsWithChildren) {
  return <TelegramProvider>{children}</TelegramProvider>;
}
