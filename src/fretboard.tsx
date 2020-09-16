import React from 'react';
import String from './strings';
import { Fretboard } from './types';

interface Props {
  fretboard: Fretboard;
}

export default ({ fretboard }: Props): JSX.Element => {
  const fretBoardMarkup = Object.values(fretboard).map((string) => {
    return (
      <div key={string.stringNumber} className="fretboard">
        <String string={string} />
      </div>
    );
  });
  return <div>{fretBoardMarkup}</div>;
};
