import styled from "styled-components";
import Navbar from "./Components/Navbar/Navbar";
import SearchResults from "./Components/SearchResults/SearchResults";
import SectionOne from "./Components/SectionOne/SectionOne";
import { useState } from "react";
import { iClothes } from "./iClothes";
import SideBar from "./Components/SideBar/SideBar";

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
`;

type BagItem = {
  id: number;
  quantity: number;
};

// type ShoppingBag = {
//   getItemQuantity: (id: number) => number;
//   increaseBagQuantity: (id: number) => void;
//   decreaseBagQuantity: (id: number) => void;
//   removeFromBag: (id: number) => void;
// }

function App() {
  const [category, setCategory] = useState<String>("");
  const [resultsToggle, setResultsToggle] = useState<Boolean>(false);
  const [gender, setGender] = useState<String>("");
  const [data, setData] = useState<iClothes[]>([]);
  const [isClosed, setIsClosed] = useState<Boolean>(true);
  const [showBag, setShowBag] = useState<Boolean>(false);
  const [bagItems, setBagItems] = useState<BagItem[]>([]);

  // TOTAL BAG QUANTITY

  const bagTotal = bagItems.reduce(function (previous: any, current: any) {
    return previous + current.quantity;
  }, 0);

  // GET ITEM

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

  function removeFromBag(id: number) {
    setBagItems((currentItems) => {
      return currentItems.filter((item) => item.id !== id);
    });
  }

  return (
    <AppContainer>
      <Navbar
        setResultsToggle={setResultsToggle}
        setCategory={setCategory}
        resultsToggle={resultsToggle}
        setGender={setGender}
        setIsClosed={setIsClosed}
        isClosed={isClosed}
        setShowBag={setShowBag}
        bagTotal={bagTotal}
      />
      {!resultsToggle ? (
        <SectionOne
          setResultsToggle={setResultsToggle}
          setCategory={setCategory}
          setGender={setGender}
        />
      ) : (
        <SearchResults
          category={category}
          gender={gender}
          data={data}
          setData={setData}
          increaseBagQuantity={increaseBagQuantity}
        />
      )}
      <SideBar
        isClosed={isClosed}
        setIsClosed={setIsClosed}
        showBag={showBag}
        setShowBag={setShowBag}
        bagTotal={bagTotal}
        bagItems={bagItems}
        data={data}
      />
    </AppContainer>
  );
}

export default App;
