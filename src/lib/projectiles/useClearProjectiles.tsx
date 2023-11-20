import { useEffect } from 'react';
import { projectiles } from '../../store';
import { projectileSize, projectileSpeed } from '../../constants';

export const useClearProjectiles = (
  context: CanvasRenderingContext2D | null | undefined,
) => {
  useEffect(() => {
    if (!context) return;

    const interval = setInterval(() => {
      for (const projectile of projectiles.value) {
        context.clearRect(
          projectile.x,
          projectile.y,
          projectileSize.width,
          projectileSize.height,
        );
      }
    }, projectileSpeed);

    return () => clearInterval(interval);
  }, [context, projectiles.value]);
};
