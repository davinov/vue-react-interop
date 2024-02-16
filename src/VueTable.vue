<script lang="ts">
import { defineComponent } from 'vue';
import reactInVue from './reactInVue';
import { ReactButton } from './ReactButton';
import type { ReactButtonProps } from './ReactButton';

export default defineComponent({
  components: {
    ReactButton: reactInVue<ReactButtonProps>(ReactButton),
  },
  data(): {
    columns: string[];
    rows: number[];
  } {
    return {
      columns: ['a', 'b', 'c'],
      rows: [1, 2, 3, 4, 5],
    };
  },
});
</script>

<template>
  <div>
    <ReactButton />
    <table>
      <tr>
        <th
          v-for="col in columns"
          :key="col"
        >
          {{ col }}
        </th>
      </tr>
      <tr
        v-for="row in rows"
        :key="row"
      >
        <td
          v-for="col in columns"
          :key="col"
        >
          {{ col }} {{ row }}
        </td>
      </tr>
    </table>
  </div>
</template>
