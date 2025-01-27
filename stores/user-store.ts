import { IUser } from "@/app/(root)/(company)/company/[id]/overview/page";
import { create } from "zustand";

interface UserStore {
  user: IUser | null;
  update: (user: IUser) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  update: (user) => set((state) => ({ ...state, user })),
  // logout: () => set((state) => ({...state, user: null })), // Uncomment to enable logout functionality.
}));
