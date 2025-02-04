import { create } from "zustand";

export interface IUser {
  email: string;
  type: "Patient" | "PharmacyAdmin" | "Doctor" | string;
  firstName: string;
  lastName: string;
  photo?: string;
  _id: string;
  history?: Array<any>;
  location?: string;
  gender: "male" | "female";
  dob: Date;
  country: string;
  company?: string;
  messages: string[];
  createdAt: Date;
  updatedAt: Date;
  subscribedToNewsletter: boolean;
}

interface UserStore {
  user: IUser | null;
  update: (user: IUser) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  update: (user) => {
    console.log("State Before Update:", useUserStore.getState().user); // ✅ Debugging log
    set((state) => ({ ...state, user }));
    console.log("State After Update:", useUserStore.getState().user); // ✅ Debugging log
  },
  logout: () => set(() => ({ user: null })),
}));
