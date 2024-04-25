import { create } from "zustand";

type Items = {
  id: string[];
};

export const useCartId = create<
  Items & { setItemsValue: (newId: string) => void }
>((set) => ({
  id: [],

  setItemsValue: (newId: string) =>
    set((state) => ({ id: [...state.id, newId] })),
}));
