import React from 'react';
import { Fret } from './types';
import NoteBubble from './noteBubbles';
import NoteName from './noteName';

interface Props {
  fret: Fret;
}

export default ({ fret }: Props): JSX.Element => {
  const { offsetNote, rootNote, name } = fret;
  return (
    <span className={'fret'}>
      <NoteBubble rootNote={rootNote} offsetNote={offsetNote} />
      <NoteName noteName={name} />
    </span>
  );
};
