import { PadInput, PadDirection } from '../types';

export const pad = (
  input: PadInput,
  desiredLength = 0,
  padChar: PadInput = '0',
  direction: PadDirection = 'left'
) => {
  if (typeof input !== 'string') return input;
  if (typeof desiredLength !== 'number') return input;
  if (typeof padChar !== 'string') return input;

  const charsToPad = (desiredLength = input.length);
  const padding = [...Array(Number(charsToPad))].map((c, i) => {
    return padChar;
  });

  if (direction.toLowerCase() === 'left') {
    return padding.join('') + input;
  } else {
    return input + padding.join('');
  }
};
