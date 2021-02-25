import React from 'react';
import FretComponent from '../fret/fret';
import { GuitarString } from '../modulator/types';
import styles from './guitarString.module.scss';

interface Props {
  string: GuitarString;
}
const GuitarStringComponent = ({ string }: Props): JSX.Element => {
  const fretsMarkup = string.frets.map((fret) => {
    return <FretComponent key={fret.fretnumber} fret={fret} />;
  });
  return <div className={styles.guitarString}>{fretsMarkup}</div>;
};

export default GuitarStringComponent;
