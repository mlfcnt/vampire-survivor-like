import { useEffect } from 'react';
import { useCreateProjectile } from '../lib/projectiles/useCreateProjectile.1';
import { projectiles } from '../store';
import { projectileColor, projectileSize } from '../constants';
import { useMoveProjectiles } from '../lib/projectiles/useMoveProjectiles';
import { useClearProjectiles } from '../lib/projectiles/useClearProjectiles';
import { useClearOOBProjectiles } from '../lib/projectiles/useClearOOBProjectiles';

export const useDrawProjectiles = (
  context: CanvasRenderingContext2D | null | undefined,
) => {
  useClearProjectiles(context);
  useCreateProjectile();
  useClearOOBProjectiles();
  useMoveProjectiles();

  useEffect(() => {
    if (!context) return;
    for (const projectile of projectiles.value) {
      context.fillStyle = projectileColor;
      context.fillRect(
        projectile.x,
        projectile.y,
        projectileSize.width,
        projectileSize.height,
      );
    }
  }, [context, projectiles.value]);
};
