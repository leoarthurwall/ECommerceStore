import styled from "styled-components";
import Navbar from "./Components/Navbar/Navbar";
import SearchResults from "./Components/SearchResults/SearchResults";
import SectionOne from "./Components/SectionOne/SectionOne";
import { useState } from "react";
import { iClothes } from "./iClothes";
import SideBar from "./Components/SideBar/SideBar";
import { useShoppingBag } from "./Context/ShoppingBagContext";

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
`;

function App() {
  const [gender, setGender] = useState<String>("");
  const [data, setData] = useState<iClothes[]>([]);

  const {
    resultsToggle,
  } = useShoppingBag();

  return (
    
    
      <AppContainer>
        <Navbar
          setGender={setGender}
        />
        {!resultsToggle ? (
          <SectionOne
            setGender={setGender}
          />
        ) : (
          <SearchResults
            gender={gender}
            data={data}
            setData={setData}
          />
        )}
        <SideBar data={data} />
      </AppContainer>
  );
}

export default App;
