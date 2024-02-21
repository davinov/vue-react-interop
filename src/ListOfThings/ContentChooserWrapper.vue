<script lang="ts">
import { defineComponent } from 'vue';
import { ContentChooser } from './ContentChooser';
import { applyReactInVue } from 'vuereact-combined';
import { useVRC } from '../interop-lib';
import reactInVue from '../reactInVue';

export default defineComponent({
  name: 'ContentChooserWrapper',

  components: {
    ContentChooser: reactInVue(ContentChooser),
    ContentChooserVRC: applyReactInVue(ContentChooser),
  },

  computed: {
    useVRC() {
      return useVRC;
    },
    resetSidePanel() {
      return () => {
        this.$store.commit('resetSidePanel');
      };
    },
    showSearchableList() {
      return () => {
        this.$store.commit('showSearchableList');
      };
    },
  },
});
</script>

<template>
  <ContentChooserVRC
    v-if="useVRC"
    :resetSidePanel="resetSidePanel"
    :showSearchableList="showSearchableList"
  />
  <ContentChooser v-else :props="{ resetSidePanel, showSearchableList }" />
</template>
