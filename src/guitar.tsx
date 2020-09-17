import React, { useState } from 'react';
import {
  notec,
  markNotesOnTheFretboard,
  standardTuningInfo,
} from './notesOnAString';
import Tuner from './tuner';
import Fretboard from './fretboard';

export default (): JSX.Element => {
  const [fretboard, setFretboard] = useState(
    markNotesOnTheFretboard(notec.targetName, 0, standardTuningInfo.name)
  );

  return (
    <div>
      <Tuner changeFretboard={setFretboard} />
      <Fretboard fretboard={fretboard} />
      <article>Press CTRL+k to toggle notenames</article>
    </div>
  );
};
