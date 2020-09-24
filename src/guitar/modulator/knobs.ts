import { findOffsetNote, markNotesOnTheFretboard } from './modulator';
import { Fretboard, Note } from './types';
const isNumber = (shouldBeNumber: string) => {
  return !!shouldBeNumber || isNaN(+shouldBeNumber);
};

export const fiddleWithFretboard = (
  rootnoteName: string,
  offset: string,
  tuningName: string,
  setFretboard: (fretboard: Fretboard) => void
): void => {
  if (isNumber(offset)) {
    console.log(offset);
    setFretboard(
      markNotesOnTheFretboard(rootnoteName, parseInt(offset), tuningName)
    );
  }
};

export const fiddleWithOffset = (
  offset: string,
  setOffset: (offset: string) => void
): void => {
  setOffset(offset);
};

export const fiddleWithOffsetNote = (
  rootnoteName: string,
  offset: string,
  setOffsetNote: (offsetNote: Note) => void
): void => {
  if (isNumber(offset)) {
    setOffsetNote(findOffsetNote(rootnoteName, parseInt(offset)));
  }
};
