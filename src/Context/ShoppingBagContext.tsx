import { createContext, ReactNode, useContext, useState } from "react";

type ShoppingBagProviderProps = {
  children: ReactNode;
};

type BagItem = {
  id: number;
  quantity: number;
};

type ShoppingBagContextProps = {
  getItemQuantity: (id: number) => number;
  increaseBagQuantity: (id: number) => void;
  decreaseBagQuantity: (id: number) => void;
  removeFromBag: (id: number) => void;
  bagItems: BagItem[];
  bagQuantity: number;
  resultsToggle: Boolean;
  setResultsToggle: (val: Boolean) => void;
  isClosed: Boolean;
  setIsClosed: (val: Boolean) => void;
  category: String;
  setCategory: (val: String) => void;
  gender: String;
  setGender: (val: String) => void;
};

const ShoppingBagContext = createContext({} as ShoppingBagContextProps);

export function useShoppingBag() {
  return useContext(ShoppingBagContext);
}

export function ShoppingBagProvider({ children }: ShoppingBagProviderProps) {
  const [bagItems, setBagItems] = useState<BagItem[]>([]); // array where the bag items are stored
  const [resultsToggle, setResultsToggle] = useState<Boolean>(false); // toggles search results on and off
  const [isClosed, setIsClosed] = useState<Boolean>(true); // toggles sidebar between open and closed
  const [category, setCategory] = useState<String>(""); //sets the api category to men or women's clothing
  const [gender, setGender] = useState<String>(""); //set's the gender for the header to men or women

  // TOTAL BAG QUANTITY
  const bagQuantity = bagItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  // GET BAG QUANTITY
  function getItemQuantity(id: number) {
    return bagItems.find((item) => item.id === id)?.quantity || 0;
  }

  // INCREASE QUANTITY
  function increaseBagQuantity(id: number) {
    setBagItems((currentItems) => {
      if (currentItems.find((item) => item.id === id) == null) {
        return [...currentItems, { id, quantity: 1 }];
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
    console.log("bag items:", bagItems);
  }
  // DECREASE QUANTITY
  function decreaseBagQuantity(id: number) {
    setBagItems((currentItems) => {
      if (currentItems.find((item) => item.id === id)?.quantity === 1) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
    console.log("quantity reduced by 1");
  }

  //REMOVE FROM BAG
  function removeFromBag(id: number) {
    setBagItems((currentItems) => {
      return currentItems.filter((item) => item.id !== id);
    });
  }

  return (
    <ShoppingBagContext.Provider
      value={{
        getItemQuantity,
        increaseBagQuantity,
        decreaseBagQuantity,
        removeFromBag,
        bagItems,
        bagQuantity,
        resultsToggle,
        setResultsToggle,
        isClosed,
        setIsClosed,
        category,
        setCategory,
        gender,
        setGender,
      }}
    >
      {children}
    </ShoppingBagContext.Provider>
  );
}
