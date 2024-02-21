<script lang="ts">
import { defineComponent } from 'vue';
import { mapStores } from 'pinia';
import { useDynamicContentStore } from './dynamicContentStore';

export default defineComponent({
  name: 'ContentChooser',
  computed: {
    ...mapStores(useDynamicContentStore),
  },
});
</script>

<template>
  <menu>
    <button @click="dynamicContentStore.resetSidePanel">Reset side panel</button>
    <button @click="dynamicContentStore.showSearchableList">Display seachable list</button>
  </menu>
</template>
