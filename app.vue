<script lang="ts" setup>
const myName = ref("");
</script>

<template>
  <div>
    <app-input v-model="myName" label="Nam" />
    <span>{{ myName }}</span>
  </div>
</template>
