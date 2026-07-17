<template>
  <q-dialog
    v-model="store.isStartModalOpen"
    backdrop-filter="blur(4px)"
    persistent
    transition-show="scale"
    transition-hide="scale">
    <q-card class="modal" flat :bordered="false">
      <!-- header -->
      <q-card-section class="modal-header">
        <div class="modal-header__title">
          <q-icon class="modal-header__title-icon" name="sym_o_joystick" />
          <h2 class="modal-header__title-value">Старт игры</h2>
        </div>
        <q-space />
        <q-btn class="modal-header__icon-close" icon="sym_o_close" flat round dense v-close-popup />
      </q-card-section>
      <q-list class="modal-menu" style="width: 100%">
        <q-item class="modal-menu__item" clickable v-ripple @click="onNewGameStart">
          <q-item-section avatar style="min-width: 30px">
            <q-icon class="modal-menu__item-icon" name="sym_o_flag_2" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="modal-menu__item-label">Начать новую игру</q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="modal-menu__item" clickable v-ripple>
          <q-item-section avatar style="min-width: 30px">
            <q-icon class="modal-menu__item-icon" name="sym_o_bookmark_flag" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="modal-menu__item-label">Продолжить сохранённую игру</q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="modal-menu__item" clickable v-ripple>
          <q-item-section avatar style="min-width: 30px">
            <q-icon class="modal-menu__item-icon" name="sym_o_bookmark_remove" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="modal-menu__item-label">Удалить сохранённую игру</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card>
  </q-dialog>
</template>
<script setup lang="ts">
  import { useAppStore } from '@/stores/appStore';

  const store = useAppStore();
  const router = useRouter();

  const onNewGameStart = () => {
    store.isStartModalOpen = false;
    if (store.isIntroShow) {
      router.push('/intro');
    } else {
      router.push('/game');
    }
  };
</script>

<style lang="scss" scoped>
  @use './game-modal.scss' as *;
</style>
