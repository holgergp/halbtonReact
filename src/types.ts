export interface Fretboard {
  [key: number]: GuitarString;
}

export interface Fret {
  name: string;
  targetName: string;
  note?: boolean;
  rootNote?: boolean;
  fretnumber?: number;
}

export interface Tuning {
  [key: number]: Note;
}

export interface Note {
  name: string;
  targetName: string;
}

export interface GuitarString {
  frets: Fret[];
  stringNumber: number;
}
