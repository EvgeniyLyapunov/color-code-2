export const useSettingsStore = defineStore('settingsStore', () => {
  const isSettingsModalOpen = ref<boolean>(false);

  return {
    isSettingsModalOpen,
  };
});
