import React from 'react';

import { createStage } from '../utils/gameHelpers';
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';

import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

const Tetris = () => {
  return (
    <StyledTetrisWrapper>
      <StyledTetris>
        <Stage stage={createStage()} />
        <aside>
          <div>
            <Display text="Score" />
            <Display text="score" />
            <Display text="score" />
          </div>
        </aside>
        <StartButton />
      </StyledTetris>
    </StyledTetrisWrapper>
  )
};

export default Tetris;