import React, { useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import styles from './fret.module.scss';

interface Props {
  noteName: string;
}

export default ({ noteName }: Props) => {
  const [toggleNotes, setToggleNotes] = useState(false);
  useHotkeys('ctrl+k', () =>
    setToggleNotes((toggleNotes) => {
      return !toggleNotes;
    })
  );
  const toggleNoteClass = toggleNotes
    ? 'notename--notesVisible'
    : 'notename--notesInvisible';

  return <div className={styles[toggleNoteClass]}>{noteName}</div>;
};
