import { useEffect } from 'react';
import { projectiles } from '../../store';
import { canvasSize } from '../../constants';

export const useClearOOBProjectiles = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      projectiles.value = projectiles.value.filter((projectile) => {
        return (
          projectile.x >= 0 &&
          projectile.x <= canvasSize.width &&
          projectile.y >= 0 &&
          projectile.y <= canvasSize.height
        );
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);
};
