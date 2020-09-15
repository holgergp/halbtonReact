import React from 'react';

export default ({ fret }) => {
  const { note, rootNote } = fret;
  let noteClass = 'note';
  if (rootNote) {
    noteClass += ' root';
  } else if (!note) {
    noteClass += ' notDisplayed';
  }
  return (
    <span className={'fret'}>
      <div className={noteClass}></div>
    </span>
  );
};
