import React from 'react';
import Fret from '../fret/fret';
import { GuitarString } from '../modulator/types';
import styles from './guitarString.module.scss';

interface Props {
  string: GuitarString;
}
export default ({ string }: Props): JSX.Element => {
  const fretsMarkup = string.frets.map((fret) => {
    return <Fret key={fret.fretnumber} fret={fret} />;
  });
  return <div className={styles.guitarString}>{fretsMarkup}</div>;
};
