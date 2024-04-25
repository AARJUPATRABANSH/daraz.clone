import { create } from "zustand";
type Product = {
  count: number;
};
export const useCartCount = create<
  Product & { setValue: (newValue: Product) => void }
>((set) => ({
  count: 0,
  setValue: (newValue: Product) => set({ count: newValue.count }),
}));
