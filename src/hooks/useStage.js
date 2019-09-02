import { useState, useEffect } from 'react';

import { createStage } from '../utils/gameHelpers';

export const useStage = (player, resetPlayer) => {
  const [stage, setStage] = useState(createStage());

  useEffect(() => {
    const updateStage = prevStage => {
      const newStage = prevStage.map(row => 
        // First flush the stage
          row.map(cell => (cell[1] === 'clear' ? [0, 'clear']: cell)),
        );

        // Then draw the Tetromino
        player.tetromino.forEach((row, y) => {
          row.forEach((value, x) => {
            if (value !== 0) {
              newStage[y + player.pos.y][x + player.pos.x] = [
                value,
                `${player.collided ? 'merged' : 'clear'}`,
              ];
            }
          });
        });

        // Then check if we collided

        if (player.collided) {
          resetPlayer();
        };

        return newStage;
    };

    setStage(prev => updateStage(prev));
  }, [player, resetPlayer]);

  return [stage, setStage];
};
