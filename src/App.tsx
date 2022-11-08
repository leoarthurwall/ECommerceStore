import styled from "styled-components";
import Navbar from "./Components/Navbar/Navbar";
import SearchResults from "./Components/SearchResults/SearchResults";
import SectionOne from "./Components/SectionOne/SectionOne";
import { useState } from "react";

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
`;

function App() {
  const [category, setCategory] = useState("");
  const [resultsToggle, setResultsToggle] = useState(false);
  return (
    <AppContainer>
      <Navbar />
      {!resultsToggle ? <SectionOne /> : <SearchResults />}
    </AppContainer>
  );
}

export default App;
