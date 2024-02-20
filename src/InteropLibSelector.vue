<script lang="ts">
import { defineComponent } from 'vue';

import { interopLib, INTEROP_LIBS, changeInteropLib } from './interop-lib';

export default defineComponent({
  name: 'InteropLibSelector',

  data() {
    return { INTEROP_LIBS, interopLib };
  },

  methods: {
    changeInteropLib(v: (typeof INTEROP_LIBS)[number]) {
      changeInteropLib(v);
    },
  },
});
</script>

<template>
  <select :value="interopLib" @input="changeInteropLib($event.target.value)">
    <option v-for="i in INTEROP_LIBS" :key="i">{{ i }}</option>
  </select>
</template>
