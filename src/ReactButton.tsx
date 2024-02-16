import React from 'react';
import type { FunctionComponent, PropsWithChildren } from 'react';

export type ReactButtonProps = PropsWithChildren<{
  onClick: () => void;
}>;

export const ReactButton: FunctionComponent<ReactButtonProps> = function ReactButton({
  onClick,
  children,
}: ReactButtonProps) {
  return <button onClick={onClick}>{children}</button>;
};
