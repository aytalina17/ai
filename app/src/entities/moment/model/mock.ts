import moment1 from "../assets/moment-8.jpg";
import moment2 from "../assets/moment-1.jpg";
import moment3 from "../assets/moment-3.jpg";
import moment4 from "../assets/moment-4.jpg";
import moment5 from "../assets/moment-2.jpg";
import moment6 from "../assets/moment-5.jpg";
import moment7 from "../assets/moment-6.jpg";
import moment8 from "../assets/moment-7.jpg";
import type { Moment } from "./types";

const TILE_WIDTH = 115;

export const moments: Moment[] = [
  { id: "m1", image: moment1, top: 123, left: 0, height: 229, width: TILE_WIDTH },
  { id: "m2", image: moment2, top: 360, left: 0, height: 229, width: TILE_WIDTH },
  { id: "m3", image: moment3, top: 419, left: 123, height: 229, width: TILE_WIDTH },
  { id: "m4", image: moment4, top: 237, left: 123, height: 174, width: TILE_WIDTH },
  { id: "m5", image: moment5, top: 123, left: 246, height: 229, width: TILE_WIDTH },
  { id: "m6", image: moment6, top: 0, left: 246, height: 115, width: TILE_WIDTH },
  { id: "m7", image: moment7, top: 0, left: 123, height: 229, width: TILE_WIDTH },
  { id: "m8", image: moment8, top: 360, left: 246, height: 229, width: TILE_WIDTH },
];
