<template>
  <div class="fit">
    <q-btn-group>
      <q-btn color="secondary" glossy @click="themeStore.changeTheme('light')">
        <q-icon name="sym_o_light_mode" :color="theme === 'light' ? 'warning' : 'white'" />
      </q-btn>
      <q-btn color="secondary" glossy @click="themeStore.changeTheme('auto')">
        <q-icon name="sym_o_brightness_auto" :color="theme === 'auto' ? 'warning' : 'white'" />
      </q-btn>
      <q-btn color="secondary" glossy @click="themeStore.changeTheme('dark')">
        <q-icon name="sym_o_dark_mode" :color="theme === 'dark' ? 'warning' : 'white'" />
      </q-btn>
    </q-btn-group>
  </div>
</template>

<script setup lang="ts">
  import { useThemeStore } from '@/stores/themeStore';

  const themeStore = useThemeStore();
  const { theme } = storeToRefs(themeStore);
</script>
