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

  const { resultsToggle } = useShoppingBag();

  return (
    <AppContainer>
      <Navbar />
      {!resultsToggle ? <SectionOne /> : <SearchResults />}
      <SideBar />
    </AppContainer>
  );
}

export default App;
