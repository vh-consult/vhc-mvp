import { IUser } from "@/app/(root)/(company)/company/[id]/overview/page"
import {create} from "zustand"

interface UserStore {
    user: IUser | null;
    update: (user: IUser) => Promise<void>;}

    export const useUserStore = create<UserStore>((set) => ({
        user: null,
        update: (user) =>
          new Promise((resolve) => {
            set(() => ({ user }));
            resolve();
          }),
      }));