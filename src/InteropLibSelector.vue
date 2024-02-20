<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'InteropLibSelector',

  data() {
    return { interopLib: localStorage.interopLib ?? 'local' };
  },

  methods: {
    changeInteropLib(v: 'vuereact-combined' | 'local') {
      localStorage.interopLib = v;
      window.location.reload();
    },
  },
});
</script>

<template>
  <select :value="interopLib" @input="changeInteropLib($event.target.value)">
    <option>vuereact-combined</option>
    <option>local</option>
  </select>
</template>
