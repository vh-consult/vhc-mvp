"use client";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

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
  affiliateHospital: string | null;
  personalPhysician: string | null;

}

interface UserStore {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
  updateUser: (partialUser: Partial<IUser>) => void;
  logoutUser: () => void;
}

export const useUserStore = create<UserStore>()(
  persist((set) => ({
    user: null,
    setUser: (user) => set((state) => ({ ...state, user })),
    updateUser: (partialUser) =>
      set((state) => ({
        user: state.user
          ? { ...state.user, ...partialUser }
          : null,
      })),
    logoutUser: () => set(() => ({ user: null })),
  }),
  {
    name: "user-store", // ✅ Unique key for localStorage
    storage: createJSONStorage(() => localStorage), // ✅ Corrected storage
  }
)
);
