import React from 'react';
import type { FunctionComponent, PropsWithChildren } from 'react';
import { vueInReact } from './vueInReact';
import VueCellActions from './VueCellActions.vue';

export type ReactCellProps = PropsWithChildren<{
  label: string;
  onEdit: (newVal: string) => void;
}>;

const ReactCellActions = vueInReact(VueCellActions);

export const ReactCell: FunctionComponent<ReactCellProps> = function ReactCell({
  label,
  onEdit,
  children,
}: ReactCellProps) {
  return (
    <td>
      <div className="cell__title">Cell {label}</div>
      {children}
      <div className="cell__actions"></div>
      <ReactCellActions props={{currentValue: label}} on={{ save: onEdit }} />
    </td>
  );
};
