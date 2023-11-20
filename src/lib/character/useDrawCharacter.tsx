import { RefObject, useEffect } from 'react';
import { characterColor, characterSize } from '../../constants';
import { characterPosition } from '../../store';
import { initializeContext } from '../initializeContext';

export const useDrawCharacter = (canvasRef: RefObject<HTMLCanvasElement>) => {
  useEffect(() => {
    const context = initializeContext(canvasRef);
    if (!context) return;

    const drawCharacter = () => {
      context.fillStyle = characterColor;
      context.fillRect(
        characterPosition.value.x,
        characterPosition.value.y,
        characterSize.width,
        characterSize.height,
      );
    };

    drawCharacter();
  }, [canvasRef, characterPosition.value]);
};
