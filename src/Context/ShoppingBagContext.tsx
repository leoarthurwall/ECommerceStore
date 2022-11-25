import { createContext, ReactNode, useContext } from "react";

type ShoppingBagProviderProps = {
    children: ReactNode 
}

type ShoppingBagContext = {
    getItemQuantity: (id: number) => number;
    increaseBagQuantity: (id: number) => void;
    decreaseBagQuantity: (id: number) => void;
    removeFromBag: (id: number) => void;
  }

const ShoppingBagContext  = createContext({})

export function useShoppingBag() {
    return useContext(ShoppingBagContext)
}


export function ShoppingBagProvider({ children }: ShoppingBagProviderProps) {
    return (
        <ShoppingBagContext.Provider value={{}}>
            {children}
        </ShoppingBagContext.Provider>
    )
}