<script lang="ts">
import { defineComponent } from 'vue';
import reactInVue from '../reactInVue';
import { SearchableList, SearchableListProps } from './SearchableList';


export default defineComponent({
  name: 'ContainerForListOfThings',
  components: {
    SearchableList: reactInVue<SearchableListProps>(SearchableList),
  },
});
</script>

<template>
  <div>
    Searchable list:
    <SearchableList />
  </div>
</template>
