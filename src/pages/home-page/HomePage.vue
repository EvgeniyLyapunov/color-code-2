<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <q-page class="home">
        <div class="row">
          <div class="col-3 offset-9">
            <q-btn-toggle
              v-model="theme"
              spread
              no-caps
              toggle-color="primary"
              color="white"
              text-color="black"
              :options="themeOptionsArray"></q-btn-toggle>
          </div>
        </div>
        <div class="row">
          <h1 class="col-10 offset-2 text-accent home__title">Color Code 2</h1>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
  import { themeOptionsArray } from '@/types/themeTypes';
  import { useStorage } from '@vueuse/core';

  const theme = useStorage<'auto' | boolean>('color-code-theme', 'auto');
</script>

<style scoped lang="scss">
  @use './home-page.scss' as *;
</style>
