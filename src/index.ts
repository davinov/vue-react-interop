/* eslint-disable @typescript-eslint/no-unused-vars */
import Vue from 'vue';

import VueTable from './VueTable.vue';
import ContentChooserWrapper from './ListOfThings/ContentChooserWrapper.vue';
import DynamicContent from './ListOfThings/DynamicContent.vue';
import InteropLibSelector from './InteropLibSelector.vue';
import { store } from './vuex-store';

new Vue({
  el: '#vue-app',
  store,
  render: (h) =>
    h('div', [
      h(InteropLibSelector),
      h('br'),
      // h(VueTable),
      h(ContentChooserWrapper),
      h(DynamicContent),
    ]),
});
