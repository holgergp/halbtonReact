import React, { useState } from 'react';
import { markRootNoteOnTheFretBoard, standardTuning } from './notesOnAString';
import Tuner from './tuner';
import Fretboard from './fretboard';

export default (): JSX.Element => {
  const [fretboard, setFretboard] = useState(
    markRootNoteOnTheFretBoard('E', standardTuning)
  );
  return (
    <div>
      <Tuner changeFretboard={setFretboard} />
      <Fretboard fretboard={fretboard} />
    </div>
  );
};
