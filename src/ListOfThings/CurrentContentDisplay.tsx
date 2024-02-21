import React, { useEffect, useState } from 'react';
import { useDynamicContentStore } from './dynamicContentStore';

function useDynamicContentState(): ReturnType<typeof useDynamicContentStore>['$state'] {
  const dynamicContentStore = useDynamicContentStore();

  const [state, setState] = useState<(typeof dynamicContentStore)['$state']>({...dynamicContentStore.$state});

  useEffect(() => {
    return dynamicContentStore.$subscribe((_, state) => {
      /*
        The reference to state stays the same across updates,
        so `setState(state)` won't trigger any re-rendering.
        */
      setState({...state})
    });
  }, [dynamicContentStore]);

  return state;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function CurrentContentDisplay(_props: Record<string, never>) {
  const { displayedElement } = useDynamicContentState();

  return <div>Current content: {displayedElement ?? 'Nothing'}</div>;
}
