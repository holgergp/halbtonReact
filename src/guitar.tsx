import React, { useState } from 'react';
import {
  notec,
  markNotesOnTheFretboard,
  standardTuningInfo,
} from './notesOnAString';
import Tuner from './tuner';
import Fretboard from './fretboard';
import Display from './display';

export default (): JSX.Element => {
  const [fretboard, setFretboard] = useState(
    markNotesOnTheFretboard(notec.targetName, 0, standardTuningInfo.name)
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
