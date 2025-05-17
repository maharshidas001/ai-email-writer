import { create } from "zustand";

const useEmailStore = create(set => ({
  emails: [],
  loading: false,
  error: null,

  // Set emails
  setEmails: (emails) => set({ emails }),
  // Add new email
  addEmail: (email) => set(state => ({
    emails: [email, ...state.emails],
  })),
  // Delete email
  removeEmail: (emailID) => set(state => ({
    emails: state.emails.filter((email) => email.id !== emailID),
  })),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  clearError: () => set({ error: null }),
}));

export default useEmailStore;