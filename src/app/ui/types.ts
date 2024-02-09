import React from 'react';

export interface Flower {
  id: string;
  icon: React.ReactNode;
  startPosition: { x: number | string; y: number | string };
  endPosition: { x: number | string; y: number | string };
}
