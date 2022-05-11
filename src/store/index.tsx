import { useLayoutEffect } from "react";
import create, { UseBoundStore } from "zustand";
import createContext from "zustand/context";
import { combine } from "zustand/middleware";
import { Product } from "../shared/types";

type InitialState = {
  wishlist: Product[];
};

type UseStoreState = typeof initStore extends (
  ...args: never
) => UseBoundStore<infer T>
  ? T
  : never;

let store: any;

const initialState: InitialState = {
  wishlist: [],
};

const zustandContext = createContext<UseStoreState>();
export const Provider = zustandContext.Provider;
// An example of how to still gets types in JS
/** @type {import('zustand/index').UseStore<typeof initialState>} */
export const useStore = zustandContext.useStore;

export const initStore = (preloadedState = {}) => {
  return create(
    combine({ ...initialState, ...preloadedState }, (set, get) => ({
      addProductInWishlist: (product: Product) => {
        set({ wishlist: get().wishlist.concat(product) });
      },
      removeProductInWishlist: (product: Product) => {
        set({
          wishlist: get().wishlist.filter(
            (item: Product) => item.id !== product.id
          ),
        });
      },
    }))
  );
};

export const useCreateStore = (initialStateProps: InitialState) => {
  // For SSR & SSG, always use a new store.
  if (typeof window === `undefined`) {
    return () => initStore(initialStateProps);
  }

  // For CSR, always re-use same store.
  store = store ?? initStore(initialStateProps);
  // And if initialState changes, then merge states in the next render cycle.
  //
  // eslint complaining "React Hooks must be called in the exact same order in every component render"
  // is ignorable as this code runs in same order in a given environment
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useLayoutEffect(() => {
    if (initialStateProps && store) {
      store.setState({
        ...store.getState(),
        ...initialStateProps,
      });
    }
  }, [initialStateProps]);

  return () => store;
};
