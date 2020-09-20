import React, { useState } from 'react';
import { Fretboard } from './types';
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
  const [offset, setOffset] = useState('0');
  const [tuningName, setTuningName] = useState(standardTuningInfo.name);

  const [offsetNote, setOffsetNote] = useState(notec);

  return (
    <form className="tuner">
      <span>Wenn ich vom Grundton</span>
      <select
        className="tuner--rootNote"
        value={rootnoteName}
        onChange={(evt) => {
          const newRootNoteName = evt.target.value;
          setRootnoteName(newRootNoteName);
          if (isNaN(+offset)) {
            return;
          }
          changeFretboard(
            markNotesOnTheFretboard(
              newRootNoteName,
              parseInt(offset),
              standardTuningInfo.name
            )
          );
          setOffsetNote(findOffsetNote(newRootNoteName, parseInt(offset)));
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
        className="tuner--offset"
        type="number"
        value={offset}
        onChange={(evt) => {
          const newOffset = evt.target.value;
          setOffset(newOffset);
          console.log(isNaN(+newOffset));
          if (isNaN(+newOffset)) {
            return;
          }
          changeFretboard(
            markNotesOnTheFretboard(
              rootnoteName,
              parseInt(newOffset),
              standardTuningInfo.name
            )
          );

          setOffsetNote(findOffsetNote(rootnoteName, parseInt(newOffset)));
        }}
      />
      <span>Schritte weitergehe und</span>
      <select
        className="tuner--tuning"
        value={tuningName}
        onChange={(evt) => {
          const newTuningName = evt.target.value;
          setTuningName(newTuningName);
          if (isNaN(+offset)) {
            return;
          }
          changeFretboard(
            markNotesOnTheFretboard(
              rootnoteName,
              parseInt(offset),
              newTuningName
            )
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
