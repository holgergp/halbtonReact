import { Fret, Fretboard, Note, Tuning } from './types';

const NUMBER_OF_FRETS = 20;

const notec = { name: 'C', targetName: 'C' };
const notecsharp = { name: 'C#', targetName: 'C#/D\u266D' };
const noted = { name: 'D', targetName: 'D' };
const notedsharp = { name: 'D#', targetName: 'D#/E\u266D' };
const notee = { name: 'E', targetName: 'E' };
const notef = { name: 'F', targetName: 'F' };
const notefsharp = { name: 'F#', targetName: 'F#/G\u266D' };
const noteg = { name: 'G', targetName: 'G' };
const notegsharp = { name: 'G#', targetName: 'G#/A\u266D' };
const notea = { name: 'A', targetName: 'A' };
const noteasharp = { name: 'A#', targetName: 'A#/H\u266D' };
const noteb = { name: 'B', targetName: 'B/H' };

const noNote = { targetName: 'noNote' };

const halftone = [
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
  2: notea,
  3: noted,
  4: noteg,
  5: noteb,
  6: notee,
};

export const dropd: Tuning = {
  1: notee,
  2: notea,
  3: noted,
  4: noteg,
  5: noteb,
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

const stringNumbers = (tuning: Tuning): number[] =>
  Object.keys(tuning).map((s) => parseInt(s));

const markRootNoteOnAString = (
  stringNumber: number,
  rootNoteName: string
): Fret[] => {
  return defaultFretboard[stringNumber].frets.map(
    (fret: Fret, fretnumber: number) => ({
      ...fret,
      rootNote: fret.targetName === rootNoteName,
      fretnumber,
    })
  );
};

const markOffsetNoteOnAString = (
  stringNumber: number,
  rootNoteName: string,
  offset: number
): Fret[] => {
  const offsetNote = findOffsetNote(rootNoteName, offset);
  return defaultFretboard[stringNumber].frets.map(
    (fret: Fret, fretnumber: number) => ({
      ...fret,
      note: fret.targetName === offsetNote.name,
      rootNote: fret.targetName === rootNoteName,
      fretnumber,
    })
  );
};

//TODO tuning param might not be needed
export const markRootNoteOnTheFretBoard = (
  rootNoteName: string,
  tuning: Tuning
): Fretboard => {
  return stringNumbers(tuning).reduce((fretboard, stringNumber) => {
    fretboard[stringNumber] = {
      frets: markRootNoteOnAString(stringNumber, rootNoteName),
      stringNumber,
    };
    return fretboard;
  }, {} as Fretboard);
};

//TODO tuning param might not be needed
export const markOffsetNoteOnTheFretBoard = (
  rootNoteName: string,
  offset: number,
  tuning: Tuning
): Fretboard => {
  return stringNumbers(tuning).reduce<Fretboard>(
    (map: Fretboard, stringNumber: number) => {
      map[stringNumber] = {
        frets: markOffsetNoteOnAString(stringNumber, rootNoteName, offset),
        stringNumber,
      };
      return map;
    },
    {} as Fretboard
  );
};

export const findOffsetNote = (rootNoteName: string, offset: number): Note => {
  const rootNoteIndex = halftone.findIndex(
    (t: Note) => t.targetName === rootNoteName
  );
  const targetNoteIndex = (rootNoteIndex + offset) % halftone.length;
  return halftone[targetNoteIndex];
};

const notesOnAString = (stringNumber: number, tuning: Tuning): Note[] => {
  const startNote = tuning[stringNumber];
  const fretNumberArray = [...Array(NUMBER_OF_FRETS).keys()];
  const noteIndexNormalized = halftone.findIndex(
    (ton: Note) => ton === startNote
  );

  return fretNumberArray.map((i: number) => {
    return halftone[(noteIndexNormalized + i) % halftone.length];
  }, fretNumberArray);
};

const frets = (stringNumber: number, tuning: Tuning): Fret[] =>
  notesOnAString(stringNumber, tuning).map((fret) => ({
    ...fret,
    note: false,
    rootNote: false,
  }));

export const fretboardWith = (tuning: Tuning): Fretboard => {
  return stringNumbers(tuning).reduce(
    (map: Fretboard, stringNumber: number) => {
      map[stringNumber] = { frets: frets(stringNumber, tuning), stringNumber };
      return map;
    },
    {} as Fretboard
  );
};

const defaultFretboard: Fretboard = fretboardWith(standardTuning);
