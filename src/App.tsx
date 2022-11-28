import styled from "styled-components";
import Navbar from "./Components/Navbar/Navbar";
import SearchResults from "./Components/SearchResults/SearchResults";
import SectionOne from "./Components/SectionOne/SectionOne";
import SideBar from "./Components/SideBar/SideBar";
import { useShoppingBag } from "./Context/ShoppingBagContext";
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom"

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
`;

function App() {
  const { resultsToggle, setData, category } = useShoppingBag();

  // API fetch
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  }, [category, setData]);

  return (
    <AppContainer>
      <Navbar />
      {!resultsToggle ? <SectionOne /> : <SearchResults />}
      <SideBar />
    </AppContainer>
  );
}

export default App;
