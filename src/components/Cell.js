import React from 'react';
import { StyledCell } from './styles/StyledCell';
import { TETROMINOS } from '../utils/tetrominos';

const Cell = ({ type }) => (
  <StyledCell type={type} color={TETROMINOS[type].color}>Cell</StyledCell>
);

export default Cell;
