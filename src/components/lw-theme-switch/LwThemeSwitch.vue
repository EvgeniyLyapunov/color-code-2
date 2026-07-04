<template>
  <div class="fit flex justify-between theme-switcher">
    <q-btn flat round @click="store.changeTheme('light')">
      <q-icon
        class="theme-switcher__icon"
        :class="{ 'theme-switcher__icon_active': theme === 'light' }"
        name="sym_o_light_mode" />
    </q-btn>
    <q-btn flat round @click="store.changeTheme('auto')">
      <q-icon
        class="theme-switcher__icon"
        :class="{ 'theme-switcher__icon_active': theme === 'auto' }"
        name="sym_o_brightness_auto" />
    </q-btn>
    <q-btn flat round @click="store.changeTheme('dark')">
      <q-icon
        class="theme-switcher__icon"
        :class="{ 'theme-switcher__icon_active': theme === 'dark' }"
        name="sym_o_dark_mode" />
    </q-btn>
  </div>
</template>

<script setup lang="ts">
  import { useAppStore } from '@/stores/appStore';

  const store = useAppStore();
  const { theme } = storeToRefs(store);
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
