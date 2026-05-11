import { create } from 'zustand';

interface AppState {
  currentNav: string;
  setCurrentNav: (nav: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
  currentNav: 'search',
  setCurrentNav: (nav) => set({ currentNav: nav }),
}));
