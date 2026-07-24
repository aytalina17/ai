export interface Moment {
  id: string;
  image: string;
  /** Mosaic layout, in px, within a 361×798 reference canvas (see MomentsGallery). */
  top: number;
  left: number;
  height: number;
  width: number;
}
