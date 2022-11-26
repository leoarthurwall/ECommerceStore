import styled from "styled-components";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { ReactElement } from "react";
import { useShoppingBag } from "../../Context/ShoppingBagContext";

const NavContainer = styled.nav<IColor>`
  width: 100vw;
  height: 80px;

  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  box-sizing: border-box;
  z-index: 5;
  background: ${({ resultsToggle }) => (resultsToggle ? "#fff" : "")};
`;

const Logo = styled.h1<IColor>`
  color: ${({ resultsToggle }) => (resultsToggle ? "black" : "#fff")};
  cursor: pointer;
  font-weight: 800;
  font-family: sans-serif;
  letter-spacing: -3px;
`;
const LinkContainer = styled.ul`
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  width: 150px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  list-style-type: none;
  font-size: 18px;
  padding: 0;
  margin: 0;
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

  position: relative;
  display: flex;
  height: 30px;
  width: 30px;

  &:hover {
    color: ${({ resultsToggle }) => (resultsToggle ? "grey" : "#e8eaed")};
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
const Links = styled.li<IColor>`
  margin: 0;
  padding: 0;
  color: ${({ resultsToggle }) => (resultsToggle ? "black" : "#fff")};

  cursor: pointer;

  &:hover {
    color: ${({ resultsToggle }) => (resultsToggle ? "grey" : "#e8eaed")};
  }
`;

interface IColor {
  resultsToggle: Boolean;
}

const Navbar: React.FC = (): ReactElement => {
  const {
    bagQuantity,
    isClosed,
    setIsClosed,
    resultsToggle,
    setResultsToggle,
    setCategory,
    handleMenClick,
    handleWomenClick,
  } = useShoppingBag();

  const handleHomeClick = () => {
    setResultsToggle(false);
    setCategory("");
    setIsClosed(true);
  };

  const handleBagClick = () => {
    setIsClosed(!isClosed);
  };

  return (
    <>
      <NavContainer resultsToggle={resultsToggle}>
        <Logo onClick={handleHomeClick} resultsToggle={resultsToggle}>
          ASUS
        </Logo>
        <LinkContainer>
          <Links resultsToggle={resultsToggle} onClick={(e) => handleMenClick(e)}>
            Men
          </Links>
          <Links resultsToggle={resultsToggle} onClick={(e) => handleWomenClick(e)}>
            Women
          </Links>
        </LinkContainer>
        <RightContainer resultsToggle={resultsToggle}>
          {/* <SearchBar
            type="text"
            placeholder="Search..."
            resultsToggle={resultsToggle}
          ></SearchBar> */}

          <IconContainer resultsToggle={resultsToggle} onClick={handleBagClick}>
            <HiOutlineShoppingBag size="auto" />
            <IconCount>{bagQuantity}</IconCount>
          </IconContainer>
        </RightContainer>
      </NavContainer>
    </>
  );
};

export default Navbar;
