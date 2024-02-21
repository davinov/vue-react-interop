import React from 'react';
import { useDynamicContentStore } from './dynamicContentStore';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function ContentChooser(_props: Record<string, never>) {
  const dynamicContentStore = useDynamicContentStore();

  return <menu>
    <button onClick={dynamicContentStore.resetSidePanel}>Reset side panel</button>
    <button onClick={dynamicContentStore.showSearchableList}>Display searchable list</button>
  </menu>;
}
