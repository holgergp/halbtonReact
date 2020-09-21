import React from 'react';
import { Note } from '../notesOnAString/types';
import styles from './tuner.module.scss';

interface Props {
  offsetNote: Note;
}
export default ({ offsetNote }: Props): JSX.Element => {
  return <div className={styles.display}>{offsetNote.name}</div>;
};
