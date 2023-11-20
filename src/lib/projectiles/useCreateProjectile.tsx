import { useEffect } from 'react';
import { characterPosition, projectiles } from '../../store';
import { characterSize, projectileFireRateMs } from '../../constants';

export const useCreateProjectile = () => {
  useEffect(() => {
    const createProjectileInterval = setInterval(() => {
      const newProjectile = {
        x: characterPosition.value.x + characterSize.width,
        y: characterPosition.value.y + (characterSize.height - 2) / 2,
      };

      projectiles.value = [...projectiles.value, newProjectile];
    }, projectileFireRateMs);

    return () => {
      clearInterval(createProjectileInterval);
    };
  }, []);
};
