<template>
  <div class="base-container home">
    <!-- title -->
    <div class="home__title">
      <h1 class="home__title-value">Color Code 2</h1>
    </div>

    <!-- nav-panel -->
    <div class="home__nav-panel">
      <div class="home__nav-bar">
        <div class="home__nav-bar-item" @click="onStartGameOpen">
          <q-icon class="home__nav-bar-item-icon" name="sym_o_joystick" />
          <span class="home__nav-bar-item-label">Игра</span>
        </div>
        <div class="home__nav-bar-item" @click="onDescriptionModalOpen">
          <q-icon class="home__nav-bar-item-icon" name="sym_o_developer_guide" />
          <span class="home__nav-bar-item-label">Описание</span>
        </div>
        <div class="home__nav-bar-item" @click="onSettingsOpen">
          <q-icon class="home__nav-bar-item-icon" name="sym_o_instant_mix" />
          <span class="home__nav-bar-item-label">Опции</span>
        </div>
      </div>
    </div>

    <!-- logo -->
    <div class="home__copy">
      <span class="home__copy-label">little wing studio&copy;&nbsp;2026</span>
      <div class="home__copy-logo"></div>
    </div>
  </div>

  <GameModal />
  <DescriptionModal />
  <SettingsModal />
</template>

<script setup lang="ts">
  import { useAppStore } from '@/stores/appStore';
  import GameModal from '@/modals/home-page/game-modal/GameModal.vue';
  import DescriptionModal from '@/modals/home-page/description-modal/DescriptionModal.vue';
  import SettingsModal from '@/modals/home-page/settings-modal/SettingsModal.vue';

  const store = useAppStore();

  const onStartGameOpen = () => {
    store.isStartModalOpen = true;
  };

  const onDescriptionModalOpen = () => {
    store.isDescriptionModalOpen = true;
  };

  const onSettingsOpen = () => {
    store.isSettingsModalOpen = true;
  };
</script>

<style scoped lang="scss">
  @use './home-page.scss' as *;
</style>
