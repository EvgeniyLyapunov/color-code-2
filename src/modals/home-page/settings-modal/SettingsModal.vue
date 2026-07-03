<template>
  <q-dialog
    v-model="store.isSettingsModalOpen"
    backdrop-filter="blur(4px)"
    persistent
    transition-show="scale"
    transition-hide="scale">
    <q-card class="modal" flat :bordered="false">
      <!-- header -->
      <q-card-section class="modal-header">
        <div class="modal-header__title">
          <q-icon class="modal-header__title-icon" name="sym_o_instant_mix" />
          <h2 class="modal-header__title-value">Настройки приложения</h2>
        </div>
        <q-space />
        <q-btn class="modal-header__icon-close" icon="sym_o_close" flat round dense v-close-popup />
      </q-card-section>

      <!-- theme-switcher -->
      <q-card-section class="modal-row">
        <div class="modal-field modal-field_w60">
          <q-icon class="modal-field__icon" name="sym_o_palette" />
          <span class="modal-field__label">Тема оформления</span>
        </div>
        <div class="modal-field modal-field_w40 justify-center">
          <LwThemeSwitch />
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
  import { useSettingsStore } from '@/stores/settingsStore';
  import LwThemeSwitch from '@/components/lw-theme-switch/LwThemeSwitch.vue';

  const store = useSettingsStore();
</script>

<style lang="scss" scoped>
  @use './settings-modal.scss' as *;
</style>
