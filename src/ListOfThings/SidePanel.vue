<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SidePanel',
});
</script>

<template>
  <aside
    :style="{
      position: 'absolute',
      right: 0,
      top: 0,
      width: '250px',
      height: '100vh',
      borderLeft: 'solid 1px gray',
      background: 'rgba(255, 255, 255, 0.5)',
    }"
  >
    <slot />
  </aside>
</template>
