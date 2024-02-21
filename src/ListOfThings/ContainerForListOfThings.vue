<script lang="ts">
import { defineComponent } from 'vue';
import reactInVue from '../reactInVue';
import { applyReactInVue } from 'vuereact-combined';
import { SearchableList, SearchableListProps } from './SearchableList';
import { useVRC } from '../interop-lib';

export default defineComponent({
  name: 'ContainerForListOfThings',
  components: {
    SearchableList: reactInVue<SearchableListProps>(SearchableList),
    SearchableListVRC: applyReactInVue(SearchableList),
  },
  data(): { isDisplayed: boolean; useVRC: boolean } {
    return { isDisplayed: false, useVRC };
  },
});
</script>

<template>
  <div>
    Show/hide: <input type="checkbox" v-model="isDisplayed" />
    <SearchableList v-if="useVRC" v-show="isDisplayed" :props="{}" />
    <SearchableListVRC v-else v-show="isDisplayed" />
  </div>
</template>
