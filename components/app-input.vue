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


<style lang="scss" scoped>
  .app-input {
    display: inline-flex;
    flex-direction: column;
    margin-bottom: 1rem;

    label {
      font-size: 0.8rem;
      margin-bottom: 0.5rem;
    }

    input {
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 0.25rem;
      font-size: 1rem;
    }
  }
</style>
