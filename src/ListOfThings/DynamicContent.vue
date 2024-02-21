<script lang="ts">
import { defineComponent } from 'vue';
import { mapStores } from 'pinia';
import reactInVue from '../reactInVue';
import { applyReactInVue } from 'vuereact-combined';
import { SearchableList, SearchableListProps } from './SearchableList';
import SidePanel from './SidePanel.vue';
import { useVRC } from '../interop-lib';
import { useDynamicContentStore } from './dynamicContentStore';

export default defineComponent({
  name: 'DynamicContent',
  components: {
    SidePanel,
    SearchableList: reactInVue<SearchableListProps>(SearchableList),
    SearchableListVRC: applyReactInVue(SearchableList),
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
    <template v-if="dynamicContentStore.displayedElement === 'searchable-list'">
      <SearchableListVRC v-if="useVRC" />
      <SearchableList v-else :props="{}" />
    </template>
  </SidePanel>
</template>
