/* eslint-disable @typescript-eslint/no-unused-vars */
import Vue from 'vue';
import { createPinia, PiniaVuePlugin } from 'pinia';

import VueTable from './VueTable.vue';
import ContentChooser from './ListOfThings/ContentChooser.vue';
import DynamicContent from './ListOfThings/DynamicContent.vue';
import InteropLibSelector from './InteropLibSelector.vue';

Vue.use(PiniaVuePlugin);

new Vue({
  el: '#vue-app',
  pinia: createPinia(),
  render: (h) =>
    h('div', [
      h(InteropLibSelector),
      h('br'),
      // h(VueTable),
      h(ContentChooser),
      h(DynamicContent),
    ]),
});
