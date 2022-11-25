import { createContext, ReactNode, useContext } from "react";

type ShoppingBagProviderProps = {
    children: ReactNode 
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