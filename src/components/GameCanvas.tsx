import { useRef } from 'react';
import { handleKeyPress } from '../lib/character/handleCharacterMovement';
import { useDrawCharacter } from '../lib/character/useDrawCharacter';
import { canvasSize, characterSize } from '../constants';
import { useDrawProjectiles } from './useDrawProjectiles';
import { characterPosition } from '../store';
import { useDrawEnemies } from '../lib/enemies/useDrawEnemies';

export const GameCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useDrawCharacter(canvasRef);
  useDrawProjectiles(canvasRef.current?.getContext('2d'));
  useDrawEnemies(canvasRef.current?.getContext('2d'));

  return (
    <>
      <canvas
        ref={canvasRef}
        className=" bg-green-400"
        width={canvasSize.width}
        height={canvasSize.height}
        onKeyDown={(event) => {
          const context = canvasRef?.current?.getContext('2d');
          if (!context) return;
          context.clearRect(
            characterPosition.value.x,
            characterPosition.value.y,
            characterSize.width,
            characterSize.height,
          );
          handleKeyPress(event as unknown as KeyboardEvent);
        }}
        tabIndex={0} // Ensure the canvas is focusable to capture keyboard events
      >
        Your browser does not support the HTML5 Canvas element.
      </canvas>
    </>
  );
};
