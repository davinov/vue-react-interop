import Vue from 'vue';

import VueTable from './VueTable.vue';

new Vue({
  el: '#vue-app',
  render: (h) => h(VueTable),
});
console.log(VueTable)
