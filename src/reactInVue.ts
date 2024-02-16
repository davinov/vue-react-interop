import { FunctionComponent as ReactComponent, createElement as createReactElement } from 'react';
import { defineComponent as defineVueComponent } from 'vue';
import { createRoot } from 'react-dom/client';

export default function reactInVue<P extends Record<string, unknown>>(reactComponent: ReactComponent<P>) {
  return defineVueComponent({
    name: 'Vue' + (reactComponent.displayName ?? reactComponent.name),

    data(): {
      reactRoot?: ReturnType<typeof createRoot>;
    } {
      return {};
    },

    mounted() {
      this.reactRoot = createRoot(this.$el);
      this.reactRoot.render(createReactElement(reactComponent));
    },
    unmount() {
      this.reactRoot?.unmount();
    },

    render(h) {
      return h('div', { class: 'react-wrapper' });
    },
  });
}
