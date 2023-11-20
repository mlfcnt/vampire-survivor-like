import { useEffect } from 'react';
import { enemyColor, enemySize } from '../../constants';
import { enemies } from '../../store';
import { useCreateEnemy } from './useCreateEnemy';

export const useDrawEnemies = (
  context: CanvasRenderingContext2D | null | undefined,
) => {
  useCreateEnemy();
  useEffect(() => {
    if (!context) return;
    for (const enemy of enemies.value) {
      context.fillStyle = enemyColor;
      context.fillRect(enemy.x, enemy.y, enemySize.width, enemySize.height);
    }
  }, [context]);
};
