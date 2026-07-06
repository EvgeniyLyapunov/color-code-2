<template>
  <q-dialog
    v-model="store.isDescriptionModalOpen"
    backdrop-filter="blur(4px)"
    persistent
    transition-show="scale"
    transition-hide="scale">
    <q-card class="modal" flat :bordered="false">
      <!-- header -->
      <q-card-section class="modal-header">
        <div class="modal-header__title">
          <q-icon class="modal-header__title-icon" name="sym_o_developer_guide" />
          <h2 class="modal-header__title-value">Описание игры</h2>
        </div>
        <q-space />
        <q-btn class="modal-header__icon-close" icon="sym_o_close" flat round dense v-close-popup />
      </q-card-section>
      <q-list class="modal-menu" style="width: 100%">
        <q-item class="modal-menu__item" clickable v-ripple>
          <q-item-section avatar style="min-width: 30px">
            <q-icon class="modal-menu__item-icon" name="sym_o_developer_guide" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="modal-menu__item-label">Описание игры</q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="modal-menu__item" clickable v-ripple>
          <q-item-section avatar style="min-width: 30px">
            <q-icon class="modal-menu__item-icon" name="sym_o_live_tv" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="modal-menu__item-label">Демонстрация</q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="modal-menu__item" clickable v-ripple>
          <q-item-section avatar style="min-width: 30px">
            <q-icon class="modal-menu__item-icon" name="sym_o_signature" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="modal-menu__item-label">Об авторе</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
  import { useAppStore } from '@/stores/appStore';

  const store = useAppStore();
</script>

<style lang="scss" scoped>
  @use './description-modal.scss' as *;
</style>
