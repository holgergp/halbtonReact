import React, { useState } from 'react';
import {
  markNotesOnTheFretboard,
  notec,
  standardTuningInfo,
} from './notesOnAString/notesOnAString';
import styles from './guitar.module.scss';

import Tuner from './tuner/tuner';
import Fretboard from './fretboard/fretboard';

export default (): JSX.Element => {
  const [fretboard, setFretboard] = useState(
    markNotesOnTheFretboard(notec.targetName, 0, standardTuningInfo.name)
  );

  return (
    <div className={styles.guitar}>
      <Tuner changeFretboard={setFretboard} />
      <Fretboard fretboard={fretboard} />

      <footer>Press CTRL+k to toggle notenames</footer>
    </div>
  );
};
