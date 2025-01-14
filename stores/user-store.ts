import { IUser } from "@/app/(root)/(company)/company/[id]/overview/page"
import {create} from "zustand"

interface UserStore {
    user: IUser | null;
    update: (user: IUser) => voi;
}

export const useUserStore = create<UserStore>((set) => ({
    user: null,
    update: (user) => set(() => ({user}))
}))