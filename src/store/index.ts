import { createJSONStorage, PersistOptions } from "zustand/middleware";

import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface UserState {
  token: string | null;
  user: string | null;
  updateToken: (token: string | null) => void;
  updateUser: (user: string | null) => void;
}

export const useUserStore = create<UserState>()(
  devtools(
    persist(
      (set) => ({
        token: null,
        user: null,
        updateToken: (tokenString) => set((state) => ({ token: tokenString })),
        updateUser: (userString) => set((state) => ({ user: userString })),
      }),
      { name: "userStore", storage: createJSONStorage(() => sessionStorage) }
    )
  )
);
