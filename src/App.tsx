import styled from "styled-components";
import Navbar from "./Components/Navbar/Navbar";
import SideBar from "./Components/SideBar/SideBar";
import { useShoppingBag } from "./Context/ShoppingBagContext";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Mens } from "./Pages/Mens";
import { Womens } from "./Pages/Womens";
import MenuBar from "./Components/MenuBar/MenuBar";

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
`;

function App() {
  const { setData } = useShoppingBag();

  // API fetch
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  }, [setData]);

  return (
    <AppContainer>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Mens />} />
        <Route path="/women" element={<Womens />} />
      </Routes>
      <MenuBar />
      <SideBar />
    </AppContainer>
  );
}

export default App;
