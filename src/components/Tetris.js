import React from 'react';

import { createStage } from '../utils/gameHelpers';

import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

const Tetris = () => {
  return (
    <div>
      <Stage stage={createStage()} />
      <aside>
        <div>
          <Display text="score" />
          <Display text="score" />
          <Display text="score" />
        </div>
      </aside>
      <StartButton />
    </div>
  )
};

export default Tetris;