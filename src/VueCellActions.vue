<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'CellActions',

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
      <button @click="$emit('save', currentInputValue)">
        Save
      </button>
    </div>
    <button @click="$emit('delete')">
      Delete
    </button>
  </div>
</template>
