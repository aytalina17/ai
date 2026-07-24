import { moments } from "./mock";
import type { Moment } from "./types";

const NETWORK_DELAY_MS = 450;

function delay<T>(value: T, ms = NETWORK_DELAY_MS): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

/** Mirrors the future `GET /moments` endpoint (user-submitted photos). */
export function fetchMoments(): Promise<Moment[]> {
  return delay(moments);
}
