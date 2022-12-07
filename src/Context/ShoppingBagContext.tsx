import { createContext, ReactNode, useContext, useState } from "react";
import { iClothes } from "../iClothes";

type ShoppingBagProviderProps = {
  children: ReactNode;
};

type BagItem = {
  id: number;
  quantity: number;
};

type ShoppingBagContextProps = {
  handleHomeClick: (val: any) => void;
  handleSidebarClick: (val: any) => void;
  handleMenuClick: (val: any) => void;
  getItemQuantity: (id: number) => number;
  increaseBagQuantity: (id: number) => void;
  decreaseBagQuantity: (id: number) => void;
  removeFromBag: (id: number) => void;
  bagItems: BagItem[];
  bagQuantity: number;
  resultsToggle: Boolean;
  setResultsToggle: (val: Boolean) => void;
  isBagClosed: Boolean;
  setIsBagClosed: (val: Boolean) => void;
  data: iClothes[];
  setData: (val: iClothes[]) => void;
  isMenuClosed: Boolean;
  setIsMenuClosed: (val: Boolean) => void;
};

const ShoppingBagContext = createContext({} as ShoppingBagContextProps);

export function useShoppingBag() {
  return useContext(ShoppingBagContext);
}

export function ShoppingBagProvider({ children }: ShoppingBagProviderProps) {
  const [bagItems, setBagItems] = useState<BagItem[]>([]); // array where the bag items are stored
  const [resultsToggle, setResultsToggle] = useState<Boolean>(false); // toggles navbar styles depending on active path
  const [isBagClosed, setIsBagClosed] = useState<Boolean>(true); // toggles sidebar between open and closed
  const [data, setData] = useState<iClothes[]>([]); // stores the api data
  const [isMenuClosed, setIsMenuClosed] = useState<Boolean>(true); // toggles sidebar between open and closed

  //CLOSES SIDEBAR WHEN HOME LOGO IS CLICKED
  const handleHomeClick = () => {
    setIsBagClosed(true);
  };

  //TOGGLES SIDEBAR OPEN AND CLOSED
  const handleSidebarClick = () => {
    setIsBagClosed(!isBagClosed);
  };

    //TOGGLES MENU OPEN AND CLOSED
    const handleMenuClick = () => {
      setIsMenuClosed(!isMenuClosed);
      console.log({isMenuClosed})

    };

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
        handleHomeClick,
        handleSidebarClick,
        handleMenuClick,
        getItemQuantity,
        increaseBagQuantity,
        decreaseBagQuantity,
        removeFromBag,
        bagItems,
        bagQuantity,
        resultsToggle,
        setResultsToggle,
        isBagClosed,
        setIsBagClosed,
        data,
        setData,
        isMenuClosed,
        setIsMenuClosed,
      }}
    >
      {children}
    </ShoppingBagContext.Provider>
  );
}
