import { useEffect, useState } from 'react';
import { StoreDefinition as PiniaStoreDefinition, StateTree } from 'pinia';

export function usePiniaState<S extends StateTree>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  useStore: PiniaStoreDefinition<string, S, any, any>
) {
  const store = useStore();

  const [state, setState] = useState({ ...store.$state });

  useEffect(() => {
    return store.$subscribe((_, state) => {
      /*
        The reference to state stays the same across updates,
        so `setState(state)` won't trigger any re-rendering.
        */
      setState({ ...state });
    });
  }, [store]);

  return state;
}
