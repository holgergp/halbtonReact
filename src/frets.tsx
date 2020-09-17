import React, { useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import { Fret } from './types';

interface Props {
  fret: Fret;
}

export default ({ fret }: Props): JSX.Element => {
  const [toggleNotes, setToggleNotes] = useState(false);
  useHotkeys('ctrl+k', () =>
    setToggleNotes((toggleNotes) => {
      console.log('Pressed');
      return !toggleNotes;
    })
  );

  const { note, rootNote } = fret;
  let noteClass = 'note';
  if (rootNote) {
    noteClass += ' root';
  } else if (!note) {
    noteClass += ' notDisplayed';
  }
  const toggleNoteClass = toggleNotes ? 'notesVisible' : '';

  return (
    <span className={'fret'}>
      <div className={noteClass}></div>
      <div className={'notename ' + toggleNoteClass}>{fret.name}</div>
    </span>
  );
};
