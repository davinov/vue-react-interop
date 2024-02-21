import React from 'react';

export function ContentChooser({
  resetSidePanel,
  showSearchableList,
}: {
  resetSidePanel: () => void;
  showSearchableList: () => void;
}) {
  return (
    <menu>
      <button onClick={resetSidePanel}>Reset side panel</button>
      <button onClick={showSearchableList}>Display searchable list</button>
    </menu>
  );
}
