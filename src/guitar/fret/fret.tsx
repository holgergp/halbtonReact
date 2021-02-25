import React from 'react';
import { Fret } from '../modulator/types';
import NoteBubble from './noteBubbles';
import NoteName from './noteName';
import styles from './fret.module.scss';

interface Props {
  fret: Fret;
}

const fret = ({ fret }: Props): JSX.Element => {
  const { offsetNote, rootNote, name } = fret;
  return (
    <span className={styles.fret}>
      <NoteBubble rootNote={rootNote} offsetNote={offsetNote} />
      <NoteName noteName={name} />
    </span>
  );
};

export default fret;
