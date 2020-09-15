import React from 'react';
import Fret from './frets';

export default ({ string }) => {
  const fretsMarkup = string.frets.map((fret) => {
    return <Fret key={fret.fretnumber} fret={fret} />;
  });
  return <div className="string">{fretsMarkup}</div>;
};
