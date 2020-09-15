import React, { useState } from 'react';
import String from './strings';
import {
  markRootNoteOnTheFretBoard,
  markOffsetNoteOnTheFretBoard,
} from './notesOnAString';

export default () => {
  const [fretboard, setFretboard] = useState(markRootNoteOnTheFretBoard('E'));
  return Object.values(fretboard).map((string) => {
    return (
      <div
        key={string.stringNumber}
        className="fretboard"
        onClick={() => setFretboard(markOffsetNoteOnTheFretBoard('E', 3))}
      >
        <String string={string} />
      </div>
    );
  });
};
