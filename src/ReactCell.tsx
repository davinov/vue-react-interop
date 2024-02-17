import React from 'react';
import type { FunctionComponent, PropsWithChildren } from 'react';

export type ReactCellProps = PropsWithChildren<{
  label?: string;
}>;

export const ReactCell: FunctionComponent<ReactCellProps> = function ReactCell({
  label,
  children,
}: ReactCellProps) {
  return <td>
    <div className='cell__title'>Cell {label}</div>
    { children }
    <div className='cell__actions'>?</div>
  </td>;
};
