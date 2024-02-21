import React from 'react';
import { useDynamicContentStore } from './dynamicContentStore';
import { usePiniaState } from './usePiniaState';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function CurrentContentDisplay(_props: Record<string, never>) {
  const { displayedElement } = usePiniaState(useDynamicContentStore);

  return <div>Current content: {displayedElement ?? 'Nothing'}</div>;
}
