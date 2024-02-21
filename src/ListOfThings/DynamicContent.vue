<script lang="ts">
import { defineComponent } from 'vue';
import { mapStores } from 'pinia';
import reactInVue from '../reactInVue';
import { applyReactInVue } from 'vuereact-combined';
import { SearchableList } from './SearchableList';
import SidePanel from './SidePanel.vue';
import { useVRC } from '../interop-lib';
import { useDynamicContentStore } from './dynamicContentStore';
import { CurrentContentDisplay } from './CurrentContentDisplay';

export default defineComponent({
  name: 'DynamicContent',
  components: {
    SidePanel,

    SearchableList: reactInVue(SearchableList),
    SearchableListVRC: applyReactInVue(SearchableList),

    CurrentContentDisplay: reactInVue(CurrentContentDisplay),
    CurrentContentDisplayVRC: applyReactInVue(CurrentContentDisplay),
  },
  computed: {
    useVRC() {
      return useVRC;
    },
    ...mapStores(useDynamicContentStore),
  },
});
</script>

<template>
  <SidePanel>
    <CurrentContentDisplayVRC v-if="useVRC" />
    <CurrentContentDisplay v-else :props="{}" />

    <template v-if="dynamicContentStore.displayedElement === 'searchable-list'">
      <SearchableListVRC v-if="useVRC" />
      <SearchableList v-else :props="{}" />
    </template>
  </SidePanel>
</template>
