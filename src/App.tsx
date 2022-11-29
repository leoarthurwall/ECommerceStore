import styled from "styled-components";
import Navbar from "./Components/Navbar/Navbar";
import SideBar from "./Components/SideBar/SideBar";
import { useShoppingBag } from "./Context/ShoppingBagContext";
import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Mens } from "./Pages/Mens";
import { Womens } from "./Pages/Womens";

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
`;

function App() {
  const { setData, setResultsToggle, resultsToggle} = useShoppingBag();

  // API fetch
  useEffect(() => {

    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  }, [setData]);

  const location = useLocation();
  console.log(location);
  if (location.pathname === "/"){
    setResultsToggle(false)
  } else {
    setResultsToggle(true)
  }
  console.log("resultsToggle:", resultsToggle)

  return (
    <AppContainer>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/womens" element={<Womens />} />
      </Routes>
      <SideBar />
    </AppContainer>
  );
}

export default App;
