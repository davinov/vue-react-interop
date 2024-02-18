<script lang="ts">
import { defineComponent } from 'vue';
import reactInVue from './reactInVue';
import { ReactButton, ReactButtonProps } from './ReactButton';
import { ReactCell, ReactCellProps } from './ReactCell';

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export default defineComponent({
  name: 'VueTable',
  components: {
    ReactButton: reactInVue<ReactButtonProps>(ReactButton),
    ReactCell: reactInVue<ReactCellProps>(ReactCell),
  },
  data(): {
    data: string[][];
    alertText: string;
    buttonLabel: string;
  } {
    return {
      data: [
        ['a1', 'b1', 'c1'],
        ['a2', 'b2', 'c2'],
        ['a3', 'b3', 'c3'],
        ['a4', 'b4', 'c4'],
      ],
      alertText: 'Clicked!',
      buttonLabel: 'Click me',
    };
  },

  computed: {
    columns(): string[] {
      return this.data[0].map((_, i) => LETTERS[i % LETTERS.length]);
    },
  },

  methods: {
    alert(message: string) {
      alert(message);
    },
    editValue(rowIndex: number, colIndex: number, newVal: string) {
      this.$set(this.data[rowIndex], colIndex, newVal);
    }
  },
});
</script>

<template>
  <div>
    Button label: <input v-model="buttonLabel"> Alert when clicked: <input v-model="alertText">
    <ReactButton :props="{ onClick: () => alert(alertText), label: buttonLabel }">
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
        v-for="(row, rowIndex) in data"
        :key="rowIndex"
      >
        <ReactCell
          v-for="(col, colIndex) in columns"
          :key="`${col} ${rowIndex}`"
          :data-label="row[colIndex]"
          :props="{ label: row[colIndex], onEdit: (newVal) => editValue(rowIndex, colIndex, newVal) }"
        />
      </tr>
    </table>
  </div>
</template>
