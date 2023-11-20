import { signal } from '@preact/signals-react';
import { canvasSize, characterSize } from './constants';

export const projectiles = signal<
  {
    x: number;
    y: number;
  }[]
>([]);

const initialX = (canvasSize.width - characterSize.width) / 2;
const initialY = (canvasSize.height - characterSize.height) / 2;

export const characterPosition = signal<{
  x: number;
  y: number;
}>({ x: initialX, y: initialY });

export const enemies = signal<
  {
    x: number;
    y: number;
  }[]
>([]);
