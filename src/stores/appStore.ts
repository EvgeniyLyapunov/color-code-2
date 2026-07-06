import type { ThemePreferenceType } from '@/types/themeTypes';
import { useStorage } from '@vueuse/core';

export const useAppStore = defineStore('appStore', () => {
  const theme = useStorage<ThemePreferenceType>('color-code-theme', 'auto');

  const isSettingsModalOpen = ref<boolean>(false);
  const isStartModalOpen = ref<boolean>(false);
  const isDescriptionModalOpen = ref<boolean>(false);

  const changeTheme = (newMode: ThemePreferenceType) => {
    theme.value = newMode;
  };

  return {
    theme,
    isSettingsModalOpen,
    isStartModalOpen,
    isDescriptionModalOpen,
    changeTheme,
  };
});
