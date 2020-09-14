import React, { useState } from 'react';
import String from './strings';

const NUMBER_OF_STRINGS = 6;
const NUMBER_OF_FRETS = 20;

export default () => {
  const [stringValues, setStringValues] = useState(strings());
  return Object.values(stringValues).map((string) => {
    return (
      <div class="fretboard" onClick={() => setStringValues(strings())}>
        <String string={string} />
      </div>
    );
  });
};

const frets = () => {
  const fretNumbers = [...Array(NUMBER_OF_FRETS).keys()];
  return fretNumbers.map((fretNumber) => {
    const note = Math.random() >= 0.5;
    const rootNote = Math.random() >= 0.8;
    return { fretNumber, note, rootNote };
  });
};

const strings = () => {
  const stringNumbers = [...Array(NUMBER_OF_STRINGS).keys()];
  return stringNumbers.reduce((map, stringNumber) => {
    map[stringNumber] = { frets: frets() };
    return map;
  }, {});
};
