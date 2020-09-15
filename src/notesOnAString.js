import { addIndex, findIndex, map } from 'ramda';

const mapIndexed = addIndex(map);

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

export const standardTuning = {
  1: notee,
  2: notea,
  3: noted,
  4: noteg,
  5: noteb,
  6: notee,
};

export const dropd = {
  1: notee,
  2: notea,
  3: noted,
  4: noteg,
  5: noteb,
  6: noted,
};

export const dropc = {
  1: noted,
  2: notea,
  3: notef,
  4: notec,
  5: noteg,
  6: notec,
};

const markRootNoteOnAString = (stringNumber, rootNote) => {
  return mapIndexed(
    (string, fretnumber) => ({
      ...string,
      rootNote: string.targetName === rootNote,
      fretnumber,
    }),
    defaultFretboard[stringNumber].frets
  );
};

const markOffsetNoteOnAString = (stringNumber, rootNoteName, offset) => {
  const offsetNote = findOffsetNote(rootNoteName, offset);
  return mapIndexed(
    (string, fretnumber) => ({
      ...string,
      note: string.targetName === offsetNote.name,
      rootNote: string.targetName === rootNoteName,
      fretnumber,
    }),
    defaultFretboard[stringNumber].frets
  );
};

//TODO tuning param might not be needed
export const markRootNoteOnTheFretBoard = (rootNoteName, tuning) => {
  const stringNumbers = Object.keys(tuning);
  return stringNumbers.reduce((map, stringNumber) => {
    map[stringNumber] = {
      frets: markRootNoteOnAString(stringNumber, rootNoteName),
      stringNumber,
    };
    return map;
  }, {});
};

//TODO tuning param might not be needed
export const markOffsetNoteOnTheFretBoard = (rootNoteName, offset, tuning) => {
  const stringNumbers = Object.keys(tuning);
  return stringNumbers.reduce((map, stringNumber) => {
    map[stringNumber] = {
      frets: markOffsetNoteOnAString(stringNumber, rootNoteName, offset),
      stringNumber,
    };
    return map;
  }, {});
};

export const findOffsetNote = (rootNote, offset) => {
  const rootNoteIndex = findIndex((t) => t.targetName === rootNote, halftone);
  const targetNoteIndex = (rootNoteIndex + offset) % halftone.length;
  return halftone[targetNoteIndex];
};

const notesOnAString = (stringNumber, tuning) => {
  const startNote = tuning[stringNumber];
  const fretNumberArray = [...Array(NUMBER_OF_FRETS).keys()];
  const noteIndexNormalized = findIndex((ton) => ton === startNote, halftone);

  return mapIndexed((f, i) => {
    return halftone[(noteIndexNormalized + i) % halftone.length];
  }, fretNumberArray);
};

const frets = (stringNumber, tuning) =>
  notesOnAString(stringNumber, tuning).map((fret) => ({
    ...fret,
    note: false,
    rootNote: false,
  }));

export const fretboardWith = (tuning) => {
  const stringNumbers = Object.keys(tuning);

  return stringNumbers.reduce((map, stringNumber) => {
    map[stringNumber] = { frets: frets(stringNumber, tuning), stringNumber };
    return map;
  }, {});
};

const defaultFretboard = fretboardWith(standardTuning);
