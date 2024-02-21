import { defineStore } from 'pinia';

export const useDynamicContentStore = defineStore('dynamicContent', {
  state: (): { displayedElement: 'searchable-list' | null } => {
    return { displayedElement: null };
  },
  actions: {
    showSearchableList() {
      this.displayedElement = 'searchable-list';
    },
    resetSidePanel() {
      this.displayedElement = null;
    },
  },
});
