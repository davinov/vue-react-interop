/* eslint-disable @typescript-eslint/no-unused-vars */
import Vue from 'vue';

import VueTable from './VueTable.vue';
import ContainerForListOfThings from './ListOfThings/ContainerForListOfThings.vue';

new Vue({
  el: '#vue-app',
  render: (h) => h(ContainerForListOfThings),
});
