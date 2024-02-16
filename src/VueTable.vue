<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
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
  <table>
    <tr>
      <th :key="col" v-for="col in columns">{{ col }}</th>
    </tr>
    <tr :key="row" v-for="row in rows">
      <td :key="col" v-for="col in columns">{{ col }} {{ row }}</td>
    </tr>
  </table>
</template>
