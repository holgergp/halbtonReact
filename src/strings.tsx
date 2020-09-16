import React from 'react';
import Fret from './frets';
import { GuitarString } from './types';

interface Props {
  string: GuitarString;
}
export default ({ string }: Props): JSX.Element => {
  const fretsMarkup = string.frets.map((fret) => {
    return <Fret key={fret.fretnumber} fret={fret} />;
  });
  return <div className="string">{fretsMarkup}</div>;
};
