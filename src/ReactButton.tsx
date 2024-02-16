import React from 'react';
import type { FunctionComponent, PropsWithChildren } from 'react';

export type ReactButtonProps = PropsWithChildren<{
  onClick: () => void;
  label?: string;
}>;

export const ReactButton: FunctionComponent<ReactButtonProps> = function ReactButton({
  onClick,
  label,
  children,
}: ReactButtonProps) {
  return <button onClick={onClick}>{children ?? label}</button>;
};
