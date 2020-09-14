import React from 'react';

export default ({ fretNumber, note, rootNote }) => {
  let noteClass = '';
  if (note) {
    noteClass = 'note';
  }
  if (rootNote) {
    noteClass += ' root';
  }
  return (
    <span className={'fret'}>
      <div className={noteClass}></div>
    </span>
  );
};
