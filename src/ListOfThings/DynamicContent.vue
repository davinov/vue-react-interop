<script lang="ts">
import { defineComponent } from 'vue';
import reactInVue from '../reactInVue';
import { applyReactInVue } from 'vuereact-combined';
import { SearchableList, SearchableListProps } from './SearchableList';
import SidePanel from './SidePanel.vue';
import { useVRC } from '../interop-lib';

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
    displayedElement() {
      return this.$store.state.displayedElement;
    },
  },
});
</script>

<template>
  <SidePanel>
    <template v-if="displayedElement === 'searchable-list'">
      <SearchableListVRC v-if="useVRC" />
      <SearchableList v-else :props="{}" />
    </template>
  </SidePanel>
</template>
