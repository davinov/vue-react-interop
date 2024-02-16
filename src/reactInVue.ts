import { FunctionComponent as ReactComponent, createElement as createReactElement } from 'react';
import { defineComponent, defineComponent as defineVueComponent } from 'vue';
import { createRoot } from 'react-dom/client';

export default function reactInVue<P extends Record<string, unknown>>(
  reactComponent: ReactComponent<P>,
  renderWrapper?: Parameters<typeof defineComponent>[0]['render'],
) {
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

    render:
      renderWrapper ??
      function renderDefaultWrapper(h) {
        return h('div', { class: 'react-wrapper' });
      },
  });
}
