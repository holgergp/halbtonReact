import React from 'react';
import styles from './fret.module.scss';

interface Props {
  offsetNote?: boolean;
  rootNote?: boolean;
}

const NoteBubbleComponent = ({
  offsetNote = false,
  rootNote = false,
}: Props) => {
  let noteClass: string;
  if (rootNote) {
    noteClass = 'note__root';
  } else if (offsetNote) {
    noteClass = 'note__offset';
  } else {
    noteClass = 'note__notVisible';
  }
  return (
    <div className="note">
      <div className={styles[noteClass]} />
    </div>
  );
};

export default NoteBubbleComponent;
