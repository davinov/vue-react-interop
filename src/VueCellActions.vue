<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ReactButton, ReactButtonProps } from './ReactButton';
import reactInVue from './reactInVue';
import { applyReactInVue } from 'vuereact-combined';
import { useVRC } from './interop-lib';

export default defineComponent({
  name: 'CellActions',

  components: {
    ReactButtonVRC: applyReactInVue(ReactButton),
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
    useVRC: boolean;
  } {
    return {
      currentInputValue: this.currentValue,
      useVRC,
    };
  },
});
</script>

<template>
  <div>
    <div>
      <input v-model="currentInputValue" :size="2" />
      <ReactButtonVRC
        v-if="useVRC"
        :label="'Save'"
        @click="() => $emit('save', currentInputValue)"
      />
      <ReactButton
        v-else
        :props="{ label: 'Save', onClick: () => $emit('save', currentInputValue) }"
      />
    </div>
    <button @click="$emit('delete')">Delete</button>
  </div>
</template>
