import React, { useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';

interface Props {
  noteName: string;
}

export default ({ noteName }: Props) => {
  const [toggleNotes, setToggleNotes] = useState(false);
  useHotkeys('ctrl+k', () =>
    setToggleNotes((toggleNotes) => {
      console.log('Pressed');
      return !toggleNotes;
    })
  );
  const toggleNoteClass = toggleNotes
    ? 'notename--notesVisible'
    : 'notename--notesInvisible';

  return <div className={'notename ' + toggleNoteClass}>{noteName}</div>;
};
