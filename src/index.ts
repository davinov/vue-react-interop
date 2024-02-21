/* eslint-disable @typescript-eslint/no-unused-vars */
import Vue from 'vue';

import VueTable from './VueTable.vue';
import ContainerForListOfThings from './ListOfThings/ContainerForListOfThings.vue';
import InteropLibSelector from './InteropLibSelector.vue';

new Vue({
  el: '#vue-app',
  render: (h) =>
    h('div', [
      h(InteropLibSelector),
      // h(VueTable),
      h(ContainerForListOfThings),
    ]),
});
