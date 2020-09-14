import React from 'react';
import String from './strings';

const NUMBER_OF_STRINGS = 6;

export default () => {
  const stringNumbers = [...Array(NUMBER_OF_STRINGS).keys()];
  return stringNumbers.map((stringNumber) => {
    return (
      <div class="fretboard">
        <String stringNumber={stringNumber} />
      </div>
    );
  });
};
