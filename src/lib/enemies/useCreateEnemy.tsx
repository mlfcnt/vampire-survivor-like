import { useEffect } from 'react';
import { enemies } from '../../store';
import { canvasSize, enemiesSpawnRate } from '../../constants';

export const useCreateEnemy = () => {
  useEffect(() => {
    const createEnemyInterval = setInterval(() => {
      const newEnemy = {
        x: Math.random() * canvasSize.width,
        y: Math.random() * canvasSize.height,
      };

      enemies.value = [...enemies.value, newEnemy];
    }, enemiesSpawnRate);

    return () => {
      clearInterval(createEnemyInterval);
    };
  }, []);
};
