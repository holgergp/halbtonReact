import React from 'react';
import GuitarString from './guitarString';
import { Fretboard } from './types';

interface Props {
  fretboard: Fretboard;
}

export default ({ fretboard }: Props): JSX.Element => {
  const fretBoardMarkup = Object.values(fretboard).map((string) => {
    return (
      <div key={string.stringNumber} className="fretboard">
        <GuitarString string={string} />
      </div>
    );
  });
  return <div>{fretBoardMarkup}</div>;
};
