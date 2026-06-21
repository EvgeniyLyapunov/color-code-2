<template>
  <router-view />
</template>

<script setup lang="ts">
  import { useQuasar } from 'quasar';
  import { useStorage } from '@vueuse/core';

  const $q = useQuasar();

  const themePreference = useStorage<'auto' | boolean>('color-code-theme', 'auto');

  watch(
    themePreference,
    (newValue) => {
      $q.dark.set(newValue);
    },
    { immediate: true },
  );
</script>
<style scoped lang="scss"></style>
