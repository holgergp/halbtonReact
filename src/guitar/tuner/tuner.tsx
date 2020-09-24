import React, { useState } from 'react';
import {
  fiddleWithFretboard,
  fiddleWithOffset,
  fiddleWithOffsetNote,
} from '../modulator/knobs';
import {
  notec,
  standardTuningInfo,
  halftones,
  tunings,
} from '../modulator/modulator';
import { Fretboard } from '../modulator/types';
import Display from './display';
import styles from './tuner.module.scss';

interface Props {
  setFretboard: (fretboard: Fretboard) => void;
}

export default ({ setFretboard }: Props): JSX.Element => {
  const [rootnoteName, setRootnoteName] = useState(notec.targetName);
  const [offset, setOffset] = useState('0');
  const [tuningName, setTuningName] = useState(standardTuningInfo.name);
  const [offsetNote, setOffsetNote] = useState(notec);

  return (
    <form
      className={styles.tuner}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <span className={styles['tuner--tunerText']}>Wenn ich vom Grundton</span>
      <select
        className={styles['tuner--rootNote']}
        value={rootnoteName}
        onChange={(evt) => {
          const newRootNoteName = evt.target.value;
          setRootnoteName(newRootNoteName);
          fiddleWithFretboard(
            newRootNoteName,
            offset,
            tuningName,
            setFretboard
          );
          fiddleWithOffsetNote(newRootNoteName, offset, setOffsetNote);
        }}
      >
        {halftones.map((t) => (
          <option key={t.name} value={t.targetName}>
            {t.name}
          </option>
        ))}
      </select>

      <input
        className={styles['tuner--offset']}
        type="number"
        value={offset}
        onChange={(evt) => {
          const newOffset = evt.target.value;
          fiddleWithOffset(newOffset, setOffset);
          fiddleWithFretboard(
            rootnoteName,
            newOffset,
            tuningName,
            setFretboard
          );
          fiddleWithOffsetNote(rootnoteName, newOffset, setOffsetNote);
        }}
      />
      <span className={styles['tuner--tunerText']}>
        Schritte weitergehe und
      </span>
      <select
        className={styles['tuner--tuning']}
        value={tuningName}
        onChange={(evt) => {
          const newTuningName = evt.target.value;
          setTuningName(newTuningName);
          fiddleWithFretboard(
            rootnoteName,
            offset,
            newTuningName,
            setFretboard
          );
        }}
      >
        {tunings.map((t) => (
          <option key={t.name} value={t.name}>
            {t.name}
          </option>
        ))}
      </select>
      <span className={styles['tuner--tunerText']}>
        Tuning verwende, lande ich beim
      </span>
      <Display offsetNote={offsetNote} />
    </form>
  );
};
