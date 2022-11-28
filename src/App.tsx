import styled from "styled-components";
import Navbar from "./Components/Navbar/Navbar";
import SearchResults from "./Components/SearchResults/SearchResults";
import SectionOne from "./Components/SectionOne/SectionOne";
import SideBar from "./Components/SideBar/SideBar";
import { useShoppingBag } from "./Context/ShoppingBagContext";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home"
import { Mens } from "./Pages/Mens";
import { Womens } from "./Pages/Womens";

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/womens" element={<Womens />} />
      </Routes>
      {!resultsToggle ? <SectionOne /> : <SearchResults />}
      <SideBar />
    </AppContainer>
  );
}

export default App;
