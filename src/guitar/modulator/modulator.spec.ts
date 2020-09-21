import {
  findOffsetNote,
  fretboardWith,
  markNotesOnTheFretboard,
  noteb,
  notec,
  noted,
  standardTuning,
} from './modulator';

describe('notesOnAString', () => {
  describe('markNotesOnTheFretboard', () => {
    it('should mark notes on the fretboard', () => {
      const markedFretboard = markNotesOnTheFretboard('C', 2, 'Standard');
      expect(markedFretboard).toMatchSnapshot();
    });
  });
  describe('findOffsetNote', () => {
    it('should find offset note when given offset', () => {
      const offsetNote = findOffsetNote('C', 2);
      expect(offsetNote).toBe(noted);
    });
    it('should find offset note with zero offset', () => {
      const offsetNote = findOffsetNote('C', 0);
      expect(offsetNote).toBe(notec);
    });
    it('should find offset note when negative offset', () => {
      const offsetNote = findOffsetNote('C', -1);
      expect(offsetNote).toBe(noteb);
    });
  });
  describe('fretboardWith', () => {
    expect(fretboardWith(standardTuning)).toMatchSnapshot();
  });
});
