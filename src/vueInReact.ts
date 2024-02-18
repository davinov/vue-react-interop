/* eslint-disable @typescript-eslint/ban-types */
import {
  FunctionComponent as ReactFunctionComponent,
  createElement,
  useState,
  useRef,
  useEffect,
} from 'react';
import Vue, { Component as VueComponent } from 'vue';

// Unfortunately, this is not enough to get the props P type right

/**
 * From a Vue component, generates a React component with the following props:
 * - `props`: an object containing the props to forward to the vue component
 * - `on`: an object containing the listeners of the vue component
 */
export function vueInReact<P extends Record<string, unknown>>(
  vueComponent: VueComponent<unknown, unknown, unknown, P>,
): ReactFunctionComponent<{ props: P; on: { [k: string]: Function } }> {
  function reactWrapperForVueComponent({ props, on }: { props: P; on: { [k: string]: Function } }) {
    const elementRef = useRef<HTMLElement>();
    const [vueInstance, setVueInstance] = useState<Vue<P> | undefined>();

    useEffect(() => {
      if (!elementRef.current) {
        return;
      }

      if (!vueInstance) {
        setVueInstance(
          new Vue({
            el: elementRef.current,
            data: {
              props,
              on,
            },
            render(h) {
              return h(vueComponent, { props: this.props, on: this.on });
            },
          }),
        );
      }

      return () => {
        if (vueInstance) {
          vueInstance.$destroy();
        }
      };
    }, [elementRef.current]);

    if (vueInstance) {
      vueInstance.$set(vueInstance, 'on', on);
      vueInstance.$set(vueInstance, 'props', props);
    }

    return createElement(
      'div', // TODO allow customization of this wrapper
      {
        className: 'vueInReact-wrapper',
        style: { display: 'contents' },
      },
      [
        // vue root element
        createElement('div', { ref: elementRef }),
      ],
    );
  }

  reactWrapperForVueComponent.displayName =
    'React' + (vueComponent.name ?? 'WrapperForAnonymousVueComponent');

  return reactWrapperForVueComponent;
}
