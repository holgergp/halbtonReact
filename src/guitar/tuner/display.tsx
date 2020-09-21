import React from 'react';
import { Note } from '../notesOnAString/types';

interface Props {
  offsetNote: Note;
}
export default ({ offsetNote }: Props): JSX.Element => {
  return <div className="display">{offsetNote.name}</div>;
};
