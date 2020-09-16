import React from 'react';
import { Fret } from './types';

interface Props {
  fret: Fret;
}

export default ({ fret }: Props): JSX.Element => {
  const { note, rootNote } = fret;
  let noteClass = 'note';
  if (rootNote) {
    noteClass += ' root';
  } else if (!note) {
    noteClass += ' notDisplayed';
  }
  return (
    <span className={'fret'}>
      <div className={noteClass}></div>
    </span>
  );
};
