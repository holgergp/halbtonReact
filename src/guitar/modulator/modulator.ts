import { Fret, Fretboard, Note, Tuning, TuningInfo } from './types';

const NUMBER_OF_FRETS = 20;

export const notec = { name: 'C', targetName: 'C' };
export const noted = { name: 'D', targetName: 'D' };
export const notecsharp = { name: 'C#', targetName: 'C#/D\u266D' };
export const notedsharp = { name: 'D#', targetName: 'D#/E\u266D' };
export const notee = { name: 'E', targetName: 'E' };
export const notef = { name: 'F', targetName: 'F' };
export const notefsharp = { name: 'F#', targetName: 'F#/G\u266D' };
export const noteg = { name: 'G', targetName: 'G' };
export const notegsharp = { name: 'G#', targetName: 'G#/A\u266D' };
export const notea = { name: 'A', targetName: 'A' };
export const noteasharp = { name: 'A#', targetName: 'A#/H\u266D' };
export const noteb = { name: 'B', targetName: 'B/H' };

export const halftones = [
  notec,
  notecsharp,
  noted,
  notedsharp,
  notee,
  notef,
  notefsharp,
  noteg,
  notegsharp,
  notea,
  noteasharp,
  noteb,
];

export const standardTuning: Tuning = {
  1: notee,
  2: noteb,
  3: noteg,
  4: noted,
  5: notea,
  6: notee,
};

export const dropd: Tuning = {
  1: notee,
  2: noteb,
  3: noteg,
  4: noted,
  5: notea,
  6: noted,
};

export const dropc: Tuning = {
  1: noted,
  2: notea,
  3: notef,
  4: notec,
  5: noteg,
  6: notec,
};

export const standardTuningInfo = { name: 'Standard', tuning: standardTuning };
export const tunings: TuningInfo[] = [
  standardTuningInfo,
  { name: 'DropD', tuning: dropd },
  { name: 'DropC', tuning: dropc },
];

const getTuningForName = (tuningName: string): Tuning => {
  const tuning = tunings.find((t) => t.name === tuningName);
  return tuning ? tuning.tuning : standardTuning;
};

const stringNumbers = (tuning: Tuning): number[] =>
  Object.keys(tuning).map((s) => parseInt(s));

const markNotesOnAString = (
  stringNumber: number,
  rootNoteName: string,
  offset: number,
  tuning: Tuning
): Fret[] => {
  const offsetNote = findOffsetNote(rootNoteName, offset);
  return fretboardWith(tuning)[stringNumber].frets.map(
    (fret: Fret, fretnumber: number) => ({
      ...fret,
      offsetNote: fret.targetName === offsetNote.targetName,
      rootNote: fret.targetName === rootNoteName,
      fretnumber,
    })
  );
};

export const markNotesOnTheFretboard = (
  rootNoteName: string,
  offset: number,
  tuningName: string
): Fretboard => {
  const tuning = getTuningForName(tuningName);
  return stringNumbers(tuning).reduce<Fretboard>(
    (fretboard: Fretboard, stringNumber: number) => {
      fretboard[stringNumber] = {
        frets: markNotesOnAString(stringNumber, rootNoteName, offset, tuning),
        stringNumber,
      };
      return fretboard;
    },
    {} as Fretboard
  );
};
//JS modulo fn gives negative values for negative inputs ...
const mod = (a: number, b: number): number => {
  return ((a % b) + b) % b;
};

export const findOffsetNote = (rootNoteName: string, offset: number): Note => {
  const rootNoteIndex = halftones.findIndex(
    (t: Note) => t.targetName === rootNoteName
  );
  const targetNoteIndex = mod(rootNoteIndex + offset, halftones.length);
  return halftones[targetNoteIndex];
};

const notesOnAString = (stringNumber: number, tuning: Tuning): Note[] => {
  const startNote = tuning[stringNumber];
  const fretNumberArray = [...Array(NUMBER_OF_FRETS).keys()];
  const noteIndexNormalized = halftones.findIndex(
    (ton: Note) => ton === startNote
  );

  return fretNumberArray.map((i: number) => {
    return halftones[(noteIndexNormalized + i) % halftones.length];
  }, fretNumberArray);
};

const frets = (stringNumber: number, tuning: Tuning): Fret[] =>
  notesOnAString(stringNumber, tuning).map((fret, fretnumber) => ({
    ...fret,
    offsetNote: false,
    rootNote: false,
    fretnumber,
  }));

export const fretboardWith = (tuning: Tuning): Fretboard => {
  return stringNumbers(tuning).reduce(
    (fretboard: Fretboard, stringNumber: number) => {
      fretboard[stringNumber] = {
        frets: frets(stringNumber, tuning),
        stringNumber,
      };
      return fretboard;
    },
    {} as Fretboard
  );
};
