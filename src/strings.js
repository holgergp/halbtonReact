import React from 'react';
import Fret from './frets';

const NUMBER_OF_FRETS = 20;

export default ({ stringNumber }) => {
  const fretNumbers = [...Array(NUMBER_OF_FRETS).keys()];

  const frets = fretNumbers.map((fretNumber) => {
    const note = Math.random() >= 0.5;
    const rootNote = Math.random() >= 0.8;
    return <Fret fretNumber={fretNumber} note={note} rootNote={rootNote} />;
  });
  return <div class="string">{frets}</div>;
};
