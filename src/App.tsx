import styled from "styled-components";
import Navbar from "./Components/Navbar/Navbar";
import SearchResults from "./Components/SearchResults/SearchResults";
import SectionOne from "./Components/SectionOne/SectionOne";
import { useState } from "react";
import { iClothes } from "./iClothes";

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
  const [resultsLength, setResultsLength] = useState<Number>()


  return (
    <AppContainer>
      <Navbar
        setResultsToggle={setResultsToggle}
        setCategory={setCategory}
        resultsToggle={resultsToggle}
        setGender={setGender}
      />
      {!resultsToggle ? (
        <SectionOne
          setResultsToggle={setResultsToggle}
          setCategory={setCategory}
          setGender={setGender}
          setResultsLength={setResultsLength}
          data={data}
        />
      ) : (
        <SearchResults category={category} gender={gender} data={data} setData={setData}/>
      )}
    </AppContainer>
  );
}

export default App;
