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
  const [showBag, setShowBag] = useState<Boolean>(false);

  return (
    <ShoppingBagProvider>
      <AppContainer>
        <Navbar
          setResultsToggle={setResultsToggle}
          setCategory={setCategory}
          resultsToggle={resultsToggle}
          setGender={setGender}
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
          
          showBag={showBag}
          setShowBag={setShowBag}
          data={data}
        />
      </AppContainer>
    </ShoppingBagProvider>
  );
}

export default App;
