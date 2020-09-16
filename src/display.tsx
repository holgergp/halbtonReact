import React from 'react';
import { Note } from './types';

interface Props {
  offsetNote: Note;
}
export default ({ offsetNote }: Props): JSX.Element => {
  return <div>{offsetNote.name}</div>;
};
