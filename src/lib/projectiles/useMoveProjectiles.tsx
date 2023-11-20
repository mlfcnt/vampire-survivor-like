import { useEffect } from 'react';
import { projectileSpeed } from '../../constants';
import { projectiles } from '../../store';

export const useMoveProjectiles = () => {
  useEffect(() => {
    console.log('inside move');
    const interval = setInterval(() => {
      projectiles.value = projectiles.value.map((projectile) => {
        projectile.x += projectileSpeed;
        return projectile;
      });
    }, projectileSpeed);
    return () => clearInterval(interval);
  }, [projectiles.value]);
};
