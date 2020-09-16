import React, { useState } from 'react';
import { Fretboard, Note } from './types';
import Display from './display';

import {
  findOffsetNote,
  halftones,
  markNotesOnTheFretboard,
  notec,
  standardTuningInfo,
  tunings,
} from './notesOnAString';

interface Props {
  changeFretboard: (fretboard: Fretboard) => void;
}

export default ({ changeFretboard }: Props): JSX.Element => {
  const [rootnoteName, setRootnoteName] = useState(notec.targetName);
  const [offset, setOffset] = useState(0);
  const [tuningName, setTuningName] = useState(standardTuningInfo.name);

  const [offsetNote, setOffsetNote] = useState(notec);

  return (
    <form className="tuner">
      <span>Wenn ich vom Grundton</span>
      <select
        className="rootNote"
        value={rootnoteName}
        onChange={(evt) => {
          const newRootNoteName = evt.target.value;
          setRootnoteName(newRootNoteName);
          changeFretboard(
            markNotesOnTheFretboard(
              newRootNoteName,
              offset,
              standardTuningInfo.name
            )
          );
          setOffsetNote(findOffsetNote(newRootNoteName, offset));
        }}
      >
        {halftones.map((t) => {
          return (
            <option key={t.name} value={t.targetName}>
              {t.name}
            </option>
          );
        })}
      </select>

      <input
        className="offset"
        type="number"
        value={offset}
        onChange={(evt) => {
          const newOffset = parseInt(evt.target.value ? evt.target.value : '0');
          setOffset(newOffset);
          changeFretboard(
            markNotesOnTheFretboard(
              rootnoteName,
              newOffset,
              standardTuningInfo.name
            )
          );
          setOffsetNote(findOffsetNote(rootnoteName, newOffset));
        }}
      />
      <span>Schritte weitergehe und</span>
      <select
        className="tuning"
        value={tuningName}
        onChange={(evt) => {
          const newTuningName = evt.target.value;
          setTuningName(newTuningName);
          changeFretboard(
            markNotesOnTheFretboard(rootnoteName, offset, newTuningName)
          );
        }}
      >
        {tunings.map((t) => {
          return (
            <option key={t.name} value={t.name}>
              {t.name}
            </option>
          );
        })}
      </select>
      <span>Tuning verwende, lande ich beim</span>
      <Display offsetNote={offsetNote} />
    </form>
  );
};
