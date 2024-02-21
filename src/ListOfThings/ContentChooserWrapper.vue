<script lang="ts">
import { defineComponent } from 'vue';
import { mapStores } from 'pinia';
import { useDynamicContentStore } from './dynamicContentStore';
import { ContentChooser } from './ContentChooser';
import { applyReactInVue } from 'vuereact-combined';
import { useVRC } from '../interop-lib';
import reactInVue from '../reactInVue';

export default defineComponent({
  name: 'ContentChooserWrapper',

  components: {
    ContentChooser: reactInVue<Record<string, never>>(ContentChooser),
    ContentChooserVRC: applyReactInVue(ContentChooser),
  },

  computed: {
    ...mapStores(useDynamicContentStore),

    useVRC() {
      return useVRC;
    }
  },
});
</script>

<template>
  <ContentChooserVRC v-if="useVRC" />
  <ContentChooser v-else :props="{}" />
</template>
