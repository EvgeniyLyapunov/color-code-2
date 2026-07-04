<template>
  <q-dialog
    v-model="store.isStartModalOpen"
    backdrop-filter="blur(4px)"
    persistent
    transition-show="scale"
    transition-hide="scale">
    <q-card class="modal">
      <!-- header -->
      <q-card-section class="modal-header">
        <div class="modal-header__title">
          <q-icon class="modal-header__title-icon" name="sym_o_joystick" />
          <h2 class="modal-header__title-value">Старт игры</h2>
        </div>
        <q-space />
        <q-btn class="modal-header__icon-close" icon="sym_o_close" flat round dense v-close-popup />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
<script setup lang="ts">
  import { useAppStore } from '@/stores/appStore';

  const store = useAppStore();
</script>

<style lang="scss" scoped>
  @use './game-modal.scss' as *;
</style>
