import styled from "styled-components";
import Navbar from "./Components/Navbar/Navbar";
import SearchResults from "./Components/SearchResults/SearchResults";
import SectionOne from "./Components/SectionOne/SectionOne";
import { useState } from "react";
import { iClothes } from "./iClothes";
import Bag from "./Components/SideBar/SideBar";

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
`;

function App() {
  const [category, setCategory] = useState<String>("");
  const [resultsToggle, setResultsToggle] = useState<Boolean>(false);
  const [gender, setGender] = useState<String>("");
  const [data, setData] = useState<iClothes[]>([]);
  const [isClosed, setIsClosed] = useState<Boolean>(true);
  const [showBag, setShowBag] = useState<Boolean>(false);
  const [showSave, setShowSave] = useState<Boolean>(false);
  const [cart, setCart] = useState<iClothes[]>([])

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
        setShowSave={setShowSave}
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
      <Bag
        isClosed={isClosed}
        setIsClosed={setIsClosed}
        showBag={showBag}
        setShowBag={setShowBag}
        showSave={showSave}
        setShowSave={setShowSave}
      />
    </AppContainer>
  );
}

export default App;
