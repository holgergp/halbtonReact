import { Fret, Fretboard, Note, Tuning, TuningInfo } from './types';

const NUMBER_OF_FRETS = 20;

export const notec = { name: 'C', targetName: 'C' };
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

// const noNote = { targetName: 'noNote' };

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

const markRootNoteOnAString = (
  stringNumber: number,
  rootNoteName: string,
  tuning: Tuning
): Fret[] => {
  return fretboardWith(tuning)[stringNumber].frets.map(
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
  offset: number,
  tuning: Tuning
): Fret[] => {
  const offsetNote = findOffsetNote(rootNoteName, offset);
  return fretboardWith(tuning)[stringNumber].frets.map(
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
      frets: markRootNoteOnAString(stringNumber, rootNoteName, tuning),
      stringNumber,
    };
    return fretboard;
  }, {} as Fretboard);
};

//TODO tuning param might not be needed
export const markOffsetNoteOnTheFretBoard = (
  rootNoteName: string,
  offset: number,
  tuningName: string
): Fretboard => {
  const tuning = getTuningForName(tuningName);
  console.log(tuning);
  return stringNumbers(tuning).reduce<Fretboard>(
    (fretboard: Fretboard, stringNumber: number) => {
      fretboard[stringNumber] = {
        frets: markOffsetNoteOnAString(
          stringNumber,
          rootNoteName,
          offset,
          tuning
        ),
        stringNumber,
      };
      return fretboard;
    },
    {} as Fretboard
  );
};

export const findOffsetNote = (rootNoteName: string, offset: number): Note => {
  const rootNoteIndex = halftones.findIndex(
    (t: Note) => t.targetName === rootNoteName
  );
  const targetNoteIndex = (rootNoteIndex + offset) % halftones.length;
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
    note: false,
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
