import styled from "styled-components";
import { HiOutlineShoppingBag, HiMenu } from "react-icons/hi";
import { ReactElement } from "react";
import { useShoppingBag } from "../../Context/ShoppingBagContext";
import { NavLink, useLocation } from "react-router-dom";

const NavContainer = styled.nav<IColor>`
  width: 100vw;
  height: 80px;

  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  box-sizing: border-box;
  z-index: 5;
  background: ${({ resultsToggle }) => (resultsToggle ? "#fff" : "")};

  @media (max-width: 500px) {

    padding: 0 15px;
  }
`;

const Logo = styled(NavLink)<IColor>`
  color: ${({ resultsToggle }) => (resultsToggle ? "black" : "#fff")};
  cursor: pointer;
  font-weight: 800;
  font-family: inter;
  letter-spacing: -3px;
  font-size: 24px;
  text-decoration: none;
  transition: 0.2s;
`;

const RightContainer = styled.div<IColor>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: ${({ resultsToggle }) => (resultsToggle ? "black" : "#fff")};
`;
// const SearchBar = styled.input<IColor>`
//   background-color: rgba(0, 0, 0, 0) !important;
//   border: none !important;
//   border-bottom: 1px solid
//     ${({ resultsToggle }) => (resultsToggle ? "black" : "#fff")} !important;
//   box-shadow: none !important;
//   height: 30px;
//   font-size: 16px;
//   font-weight: 400;
//   color: ${({ resultsToggle }) => (resultsToggle ? "black" : "#fff")};
//   padding: 0 15px;
//   max-width: 150px;

//   &:focus {
//     outline: none;
//   }
//   ::placeholder {
//     color: ${({ resultsToggle }) => (resultsToggle ? "black" : "#fff")};
//   }
// `;

const IconContainer = styled.div<IColor>`
  cursor: pointer;
  color: ${({ resultsToggle }) => (resultsToggle ? "black" : "#fff")};

  position: relative;
  display: flex;
  height: 30px;
  width: 30px;

  transition: 0.2s;

  &:hover {
    color: ${({ resultsToggle }) => (resultsToggle ? "#9bad97" : "#e8eaed")};
  }
`;
const IconCount = styled.div`
  position: absolute;
  border-radius: 50px;
  width: 18px;
  height: 18px;
  background: red;
  color: white;
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: -4px;
  right: -4px;
`;

interface IColor {
  resultsToggle: Boolean;
}

const Navbar: React.FC = (): ReactElement => {
  const {
    bagQuantity,
    resultsToggle,
    setResultsToggle,
    handleHomeClick,
    handleMenuClick,
    handleSidebarClick,
  } = useShoppingBag();

  //GETS CURRENT PATH AND SETS TO FALSE IF ROUTE PATH, OTHERWISE TO TRUE - USED FOR CONDITIONAL STYLING
  const location = useLocation();
  console.log(location);
  if (location.pathname === "/") {
    setResultsToggle(false);
  } else {
    setResultsToggle(true);
  }
  console.log("resultsToggle:", resultsToggle);

  return (
    <>
      <NavContainer resultsToggle={resultsToggle}>
        <IconContainer
          resultsToggle={resultsToggle}
          onClick={(e) => handleMenuClick(e)}
        >
          <HiMenu size="auto" />
        </IconContainer>
        <Logo onClick={handleHomeClick} resultsToggle={resultsToggle} to="/">
          ASUS
        </Logo>

        <RightContainer resultsToggle={resultsToggle}>
          {/* <SearchBar
            type="text"
            placeholder="Search..."
            resultsToggle={resultsToggle}
          ></SearchBar> */}

          <IconContainer
            resultsToggle={resultsToggle}
            onClick={(e) => handleSidebarClick(e)}
          >
            <HiOutlineShoppingBag size="auto" />
            {bagQuantity > 0 ? <IconCount>{bagQuantity}</IconCount> : null}
          </IconContainer>
        </RightContainer>
      </NavContainer>
    </>
  );
};

export default Navbar;
