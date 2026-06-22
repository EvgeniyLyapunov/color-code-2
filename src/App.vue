<template>
  <router-view />
</template>

<script setup lang="ts">
  import { useQuasar } from 'quasar';
  import { useStorage } from '@vueuse/core';
  import type { ThemePreferenceType } from './types/themeTypes';

  const $q = useQuasar();

  const themePreference = useStorage<ThemePreferenceType>('color-code-theme', 'auto');

  watch(
    themePreference,
    (newValue) => {
      $q.dark.set(toQuasarDarkMode(newValue));
    },
    { immediate: true },
  );

  function toQuasarDarkMode(themeStr: ThemePreferenceType): 'auto' | boolean {
    switch (themeStr) {
      case 'auto':
        return 'auto';
      case 'light':
        return false;
      case 'dark':
        return true;
    }
  }
</script>
<style scoped lang="scss"></style>
