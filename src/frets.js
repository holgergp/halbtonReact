import React from 'react';

export default ({ fret }) => {
  const { note, rootNote } = fret;
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
