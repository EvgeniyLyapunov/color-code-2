<template>
  <div class="fit flex justify-between theme-switcher">
    <q-btn flat round @click="themeStore.changeTheme('light')">
      <q-icon
        class="theme-switcher__icon"
        :class="{ 'theme-switcher__icon_active': theme === 'light' }"
        name="sym_o_light_mode" />
    </q-btn>
    <q-btn flat round @click="themeStore.changeTheme('auto')">
      <q-icon
        class="theme-switcher__icon"
        :class="{ 'theme-switcher__icon_active': theme === 'auto' }"
        name="sym_o_brightness_auto" />
    </q-btn>
    <q-btn flat round @click="themeStore.changeTheme('dark')">
      <q-icon
        class="theme-switcher__icon"
        :class="{ 'theme-switcher__icon_active': theme === 'dark' }"
        name="sym_o_dark_mode" />
    </q-btn>
  </div>
</template>

<script setup lang="ts">
  import { useThemeStore } from '@/stores/themeStore';

  const themeStore = useThemeStore();
  const { theme } = storeToRefs(themeStore);
</script>

<style lang="scss" scoped>
  .theme-switcher {
    &__icon {
      color: var(--lw-theme-switcher-icon-color);
      &_active {
        color: var(--lw-theme-switcher-icon-color-active);
      }
    }
  }
</style>
