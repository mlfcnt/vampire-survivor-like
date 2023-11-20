import { RefObject } from "react";

export const initializeContext = (canvasRef: RefObject<HTMLCanvasElement>) => {
  const canvas = canvasRef.current;
  const context = canvas?.getContext("2d");
  return context;
};
