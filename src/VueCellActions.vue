<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
});
</script>

<template>
  <div>
    <button @click="$emit('edit')">Edit</button>
    <button @click="$emit('delete')">Delete</button>
  </div>
</template>
