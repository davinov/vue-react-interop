import React from 'react';
import type { PropsWithChildren } from 'react';

export type ButtonProps = PropsWithChildren<{
  onClick: () => void;
}>;

export function ReactButton({ onClick, children }: ButtonProps) {
  return <button onClick={onClick}>{children}</button>;
}
