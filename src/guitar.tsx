import React, { useState } from 'react';
import {
  markRootNoteOnTheFretBoard,
  standardTuning,
  notec,
} from './notesOnAString';
import Tuner from './tuner';
import Fretboard from './fretboard';
import Display from './display';

export default (): JSX.Element => {
  const [fretboard, setFretboard] = useState(
    markRootNoteOnTheFretBoard('E', standardTuning)
  );

  const [offsetNote, setOffsetNote] = useState(notec);
  return (
    <div>
      <Tuner changeFretboard={setFretboard} setOffsetNote={setOffsetNote} />
      <Display offsetNote={offsetNote} />
      <Fretboard fretboard={fretboard} />
    </div>
  );
};
