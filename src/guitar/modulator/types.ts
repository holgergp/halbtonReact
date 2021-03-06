export interface Fretboard {
  [key: number]: GuitarString;
}

export interface Fret {
  name: string;
  targetName: string;
  offsetNote?: boolean;
  rootNote?: boolean;
  fretnumber: number;
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

export interface TuningInfo {
  name: string;
  tuning: Tuning;
}
