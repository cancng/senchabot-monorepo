import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeState {
  darkMode: boolean;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      darkMode: true,
      toggleTheme: () =>
        set({ darkMode: get().darkMode === true ? false : true }),
    }),
    {
      name: "sencha-theme",
    },
  ),
);
