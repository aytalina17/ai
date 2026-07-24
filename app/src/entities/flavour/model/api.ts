import { flavours } from "./mock";
import type { Flavour } from "./types";

/**
 * Mock "API" layer. Signatures mirror the future REST/Supabase calls
 * (`GET /flavours`, `GET /flavours/:id`) so pages/widgets never change
 * when mock.ts is swapped for a real fetch() — see README "Где менять API".
 */

const NETWORK_DELAY_MS = 450;

function delay<T>(value: T, ms = NETWORK_DELAY_MS): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

export function fetchFlavours(): Promise<Flavour[]> {
  return delay(flavours);
}

export function fetchFlavourById(id: string): Promise<Flavour | undefined> {
  return delay(flavours.find((flavour) => flavour.id === id));
}
