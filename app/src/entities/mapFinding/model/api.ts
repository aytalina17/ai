import { mapFindings } from "./mock";
import type { MapFinding } from "./types";

const NETWORK_DELAY_MS = 450;

function delay<T>(value: T, ms = NETWORK_DELAY_MS): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

/** Mirrors the future `GET /map/findings` endpoint (nearby flavour spots). */
export function fetchMapFindings(): Promise<MapFinding[]> {
  return delay(mapFindings);
}
