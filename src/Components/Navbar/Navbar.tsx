import styled from "styled-components";
import { HiOutlineHeart, HiOutlineShoppingBag } from "react-icons/hi";
import { ReactElement } from "react";

const NavContainer = styled.nav<IColor>`
  width: 100vw;
  height: 80px;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  box-sizing: border-box;
  z-index: 10;
  background: ${({ resultsToggle }) => (resultsToggle ? "#fff" : "")};
`;
const Logo = styled.h1<IColor>`
  color: ${({ resultsToggle }) => (resultsToggle ? "black" : "#fff")};
  cursor: pointer;
`;
const LinkContainer = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 1.5rem;
  font-size: 18px;
`;

const RightContainer = styled.div<IColor>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: ${({ resultsToggle }) => (resultsToggle ? "black" : "#fff")};
`;
const SearchBar = styled.input<IColor>`
  background-color: rgba(0, 0, 0, 0) !important;
  border: none !important;
  border-bottom: 1px solid
    ${({ resultsToggle }) => (resultsToggle ? "black" : "#fff")} !important;
  box-shadow: none !important;
  height: 30px;
  font-size: 16px;
  font-weight: 400;
  color: ${({ resultsToggle }) => (resultsToggle ? "black" : "#fff")};
  padding: 0 15px;
  max-width: 150px;

  &:focus {
    outline: none;
  }
  ::placeholder {
    color: ${({ resultsToggle }) => (resultsToggle ? "black" : "#fff")};
  }
`;
const IconContainer = styled.div<IColor>`
  cursor: pointer;

  &:hover {
    color: ${({ resultsToggle }) => (resultsToggle ? "grey" : "#e8eaed")};
  }
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

type Props = {
  setResultsToggle: (val: Boolean) => void;
  setCategory: (val: string) => void;
  resultsToggle: Boolean;
  setGender: (val: string) => void;
};

const Navbar: React.FC<Props> = (Props): ReactElement => {
  const { setResultsToggle, setCategory, resultsToggle, setGender } = Props;

  const handleMenClick = () => {
    setResultsToggle(true);
    setCategory("men's%20clothing");
    setGender("Men's clothing");
  };

  const handleWomenClick = () => {
    setResultsToggle(true);
    setCategory("women's%20clothing");
    setGender("Women's clothing");
  };
  const handleHomeClick = () => {
    setResultsToggle(false);
    setCategory("");
  };

  return (
    <>
      <NavContainer resultsToggle={resultsToggle}>
        <Logo onClick={handleHomeClick} resultsToggle={resultsToggle}>
          Oakwood Outfits
        </Logo>
        <LinkContainer>
          <Links resultsToggle={resultsToggle} onClick={handleMenClick}>
            Men
          </Links>
          <Links resultsToggle={resultsToggle} onClick={handleWomenClick}>
            Women
          </Links>
        </LinkContainer>
        <RightContainer resultsToggle={resultsToggle}>
          <SearchBar
            type="text"
            placeholder="Search..."
            resultsToggle={resultsToggle}
          ></SearchBar>
          <IconContainer resultsToggle={resultsToggle}>
            <HiOutlineHeart size="24" />
          </IconContainer>
          <IconContainer resultsToggle={resultsToggle}>
            <HiOutlineShoppingBag size="24" />
          </IconContainer>
        </RightContainer>
      </NavContainer>
    </>
  );
};

export default Navbar;
