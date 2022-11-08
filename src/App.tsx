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
  const [category, setCategory] = useState<String>("");
  const [resultsToggle, setResultsToggle] = useState<Boolean>(false);
  return (
    <AppContainer>
      <Navbar 
       setResultsToggle={setResultsToggle}
       setCategory={setCategory}
       resultsToggle={resultsToggle}
       />
      {!resultsToggle ? (
        <SectionOne
          setResultsToggle={setResultsToggle}
          setCategory={setCategory}
        />
      ) : (
        <SearchResults category={category}/>
      )}
    </AppContainer>
  );
}

export default App;
