import React from 'react';
import type { FunctionComponent, PropsWithChildren } from 'react';
import { vueInReact } from './vueInReact';
import VueCellActions from './VueCellActions.vue';
import { applyVueInReact } from 'vuereact-combined';
import { useVRC } from './interop-lib';

export type ReactCellProps = PropsWithChildren<{
  label: string;
  onEdit: (newVal: string) => void;
}>;

const ReactCellActions = vueInReact(VueCellActions);
const ReactCellActionsVRC = applyVueInReact(VueCellActions);

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
      {useVRC ? (
        <ReactCellActionsVRC currentValue={label} on={{ save: onEdit }} />
      ) : (
        <ReactCellActions props={{ currentValue: label }} on={{ save: onEdit }} />
      )}
    </td>
  );
};
