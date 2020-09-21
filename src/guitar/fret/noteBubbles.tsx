import React from 'react';
import styles from './fret.module.scss';

interface Props {
  offsetNote?: boolean;
  rootNote?: boolean;
}

export default ({ offsetNote = false, rootNote = false }: Props) => {
  let noteClass = '';
  if (rootNote) {
    noteClass = 'note__root';
  } else if (offsetNote) {
    noteClass = 'note__offset';
  } else {
    noteClass = 'note__notVisible';
  }
  return (
    <div className="note">
      <div className={styles[noteClass]}></div>
    </div>
  );
};
