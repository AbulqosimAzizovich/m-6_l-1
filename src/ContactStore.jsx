import create from "zustand";

const useContactStore = create((set) => ({
  contacts: [],
  addContact: (contact) =>
    set((state) => ({ contacts: [...state.contacts, contact] })),
}));

export default useContactStore;
