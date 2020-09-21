import React from 'react';
import Fret from '../fret/fret';
import { GuitarString } from '../notesOnAString/types';
import './guitarString.scss';

interface Props {
  string: GuitarString;
}
export default ({ string }: Props): JSX.Element => {
  const fretsMarkup = string.frets.map((fret) => {
    return <Fret key={fret.fretnumber} fret={fret} />;
  });
  return <div className="string">{fretsMarkup}</div>;
};
