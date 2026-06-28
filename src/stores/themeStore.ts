import type { ThemePreferenceType } from '@/types/themeTypes';
import { useStorage } from '@vueuse/core';

export const useThemeStore = defineStore('themeStore', () => {
  const theme = useStorage<ThemePreferenceType>('color-code-theme', 'auto');

  const changeTheme = (newMode: ThemePreferenceType) => {
    theme.value = newMode;
  };

  return {
    theme,
    changeTheme,
  };
});
