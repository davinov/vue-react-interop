<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ReactButton, ReactButtonProps } from './ReactButton';
import reactInVue from './reactInVue';

export default defineComponent({
  name: 'CellActions',

  components: {
    ReactButton: reactInVue<ReactButtonProps>(ReactButton),
  },

  props: {
    currentValue: {
      type: String as PropType<string>,
      default: () => '',
    },
  },

  data(): {
    currentInputValue?: string;
  } {
    return {
      currentInputValue: this.currentValue,
    };
  },
});
</script>

<template>
  <div>
    <div>
      <input
        v-model="currentInputValue"
        :size="2"
      >
      <ReactButton :props="{ label: 'Save', onClick: () => $emit('save', currentInputValue)} "/>
    </div>
    <button @click="$emit('delete')">
      Delete
    </button>
  </div>
</template>
