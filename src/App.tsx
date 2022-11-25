import styled from "styled-components";
import Navbar from "./Components/Navbar/Navbar";
import SearchResults from "./Components/SearchResults/SearchResults";
import SectionOne from "./Components/SectionOne/SectionOne";
import { useState } from "react";
import { iClothes } from "./iClothes";
import SideBar from "./Components/SideBar/SideBar";
import { ShoppingBagProvider } from "./Context/ShoppingBagContext";

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

function App() {
  const [category, setCategory] = useState<String>("");
  const [resultsToggle, setResultsToggle] = useState<Boolean>(false);
  const [gender, setGender] = useState<String>("");
  const [data, setData] = useState<iClothes[]>([]);
  const [isClosed, setIsClosed] = useState<Boolean>(true);
  const [showBag, setShowBag] = useState<Boolean>(false);
  const [bagItems, setBagItems] = useState<BagItem[]>([]);


  return (
    <ShoppingBagProvider>
      <AppContainer>
        <Navbar
          setResultsToggle={setResultsToggle}
          setCategory={setCategory}
          resultsToggle={resultsToggle}
          setGender={setGender}
          setIsClosed={setIsClosed}
          isClosed={isClosed}
          setShowBag={setShowBag}
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
          />
        )}
        <SideBar
          isClosed={isClosed}
          setIsClosed={setIsClosed}
          showBag={showBag}
          setShowBag={setShowBag}
          bagItems={bagItems}
          data={data}
        />
      </AppContainer>
    </ShoppingBagProvider>
  );
}

export default App;
