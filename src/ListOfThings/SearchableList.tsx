import React, { useMemo, useState } from "react";
import { Button, Input, Label, SearchField } from 'react-aria-components';

import LOTR_CHARACTERS from './data/lotr-characters.json';

export type SearchableListProps = Record<string, never>;


const SearchableList: React.FC = function SearchableList() {
  const [currentSearch, setCurrentSearch] = useState('');

  const displayedCharacters = useMemo(() => {
    return LOTR_CHARACTERS.filter((c) => currentSearch.length > 0 ? (c.name as string).toLowerCase().includes(currentSearch.toLowerCase()): true)
  }, [currentSearch])

  return (
    <div>
      <SearchField onChange={setCurrentSearch} onClear={() => setCurrentSearch('')}>
        <Label>Search:</Label>&nbsp;
        <Input value={currentSearch} />
        {currentSearch.length > 0 && <Button>Clear</Button>}
      </SearchField>
      <ul>
        {displayedCharacters.map((character) => (
          <li key={character._id}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
}

export { SearchableList };
