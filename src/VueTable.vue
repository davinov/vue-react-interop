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
    alertText: string;
    buttonLabel: string;
  } {
    return {
      columns: ['a', 'b', 'c'],
      rows: [1, 2, 3, 4, 5],
      alertText: 'Clicked!',
      buttonLabel: 'Click me',
    };
  },

  methods: {
    alert(message: string) {
      alert(message);
    }
  }
});
</script>

<template>
  <div>
    Button label: <input v-model="buttonLabel">
    Alert when clicked: <input v-model="alertText">
    <ReactButton :props="{onClick: () => alert(alertText), label: buttonLabel}">
      <span>Vue content</span>
    </ReactButton>
    <table>
      <tr>
        <th v-for="col in columns" :key="col">
          {{ col }}
        </th>
      </tr>
      <tr v-for="row in rows" :key="row">
        <td v-for="col in columns" :key="col">{{ col }} {{ row }}</td>
      </tr>
    </table>
  </div>
</template>
