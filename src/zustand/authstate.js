import { create } from "zustand";

const useAuthStore = create(set => ({
  user: null,
  isAuthenticated: false,

  // Login user
  setUser: (userData) => set({
    user: userData,
    isAuthenticated: true,
  }),

  // Logout user
  removeUser: () => set({
    user: null,
    isAuthenticated: false,
  }),

  // Update user info
  updateUser: (userData) => set(state => ({
    user: { ...state.user, ...userData },
  })),
}));

export default useAuthStore;