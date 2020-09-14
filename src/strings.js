import React from 'react';
import Fret from './frets';

export default ({ string }) => {
  const fretsMarkup = string.frets.map((fret) => {
    return <Fret fret={fret} />;
  });
  return <div className="string">{fretsMarkup}</div>;
};
