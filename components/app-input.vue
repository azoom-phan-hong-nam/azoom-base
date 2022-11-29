<script lang="ts" setup>
interface Props {
  modelValue: string | number;
  label?: string;
}

const { modelValue, label } = defineProps<Props>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string | number): void;
}>();

const onInput = (event: Event) => {
  const input = event.target as HTMLInputElement;

  emit("update:modelValue", input.value);
};
</script>

<template>
  <div class="app-input" role="input">
    <label v-if="label">{{ label }}</label>
    <input type="text" :value="modelValue" @input="onInput" />
  </div>
</template>
