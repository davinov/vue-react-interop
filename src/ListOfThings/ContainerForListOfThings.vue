<script lang="ts">
import { defineComponent } from 'vue';
import reactInVue from '../reactInVue';
import { applyReactInVue } from 'vuereact-combined';
import { SearchableList, SearchableListProps } from './SearchableList';

const VueSearchableList =
  localStorage.interopLib === 'vuereact-combined'
    ? applyReactInVue(SearchableList)
    : reactInVue<SearchableListProps>(SearchableList);

export default defineComponent({
  name: 'ContainerForListOfThings',
  components: {
    SearchableList: VueSearchableList,
  },
});
</script>

<template>
  <div>
    Searchable list:
    <SearchableList />
  </div>
</template>
