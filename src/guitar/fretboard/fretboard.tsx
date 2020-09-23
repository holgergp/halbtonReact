import React from 'react';
import GuitarString from '../guitarString/guitarString';
import { Fretboard } from '../modulator/types';
import styles from './fretboard.module.scss';

interface Props {
  fretboard: Fretboard;
}

export default ({ fretboard }: Props): JSX.Element => {
  const fretBoardMarkup = Object.values(fretboard).map((string) => {
    return (
      <div key={string.stringNumber}>
        <GuitarString string={string} />
      </div>
    );
  });
  return <div className={styles.fretboard}>{fretBoardMarkup}</div>;
};
