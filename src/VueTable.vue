<script lang="ts">
import { defineComponent } from 'vue';
import reactInVue from './reactInVue';
import { ReactButton, ReactButtonProps } from './ReactButton';
import { ReactCell, ReactCellProps } from './ReactCell';

export default defineComponent({
  components: {
    ReactButton: reactInVue<ReactButtonProps>(ReactButton),
    ReactCell: reactInVue<ReactCellProps>(ReactCell),
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
        <ReactCell
          v-for="col in columns"
          :key="col"
          :props="{label: `${col} ${row}`}"
        />
      </tr>
    </table>
  </div>
</template>
