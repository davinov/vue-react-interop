import { FunctionComponent as ReactComponent, createElement as createReactElement } from 'react';
import { PropType, defineComponent, defineComponent as defineVueComponent } from 'vue';
import { createRoot } from 'react-dom/client';

export default function reactInVue<P extends Record<string, unknown>>(
  reactComponent: ReactComponent<P>,
  renderWrapper?: Parameters<typeof defineComponent>[0]['render'],
) {
  return defineVueComponent({
    name: 'Vue' + (reactComponent.displayName ?? reactComponent.name),

    props: {
      props: {
        type: Object as PropType<P>,
        default: () => {},
        required: true,
      },
    },

    data(): {
      reactRoot?: ReturnType<typeof createRoot>;
    } {
      return {};
    },

    mounted() {
      this.reactRoot = createRoot(this.$el);
      this.reactRoot.render(createReactElement(reactComponent, this.props as P));
    },

    beforeDestroy() {
      this.reactRoot?.unmount();
    },

    render:
      renderWrapper ??
      function renderDefaultWrapper(h) {
        return h('div', { class: 'react-wrapper' });
      },
  });
}
