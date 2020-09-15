import React, { useState } from 'react';
import String from './strings';
import {
  markRootNoteOnTheFretBoard,
  markOffsetNoteOnTheFretBoard,
  standardTuning,
} from './notesOnAString';

export default () => {
  const [fretboard, setFretboard] = useState(
    markRootNoteOnTheFretBoard('E', standardTuning)
  );
  return Object.values(fretboard).map((string) => {
    return (
      <div
        key={string.stringNumber}
        className="fretboard"
        onClick={() =>
          setFretboard(markOffsetNoteOnTheFretBoard('E', 3, standardTuning))
        }
      >
        <String string={string} />
      </div>
    );
  });
};
