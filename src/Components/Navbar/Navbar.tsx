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
  z-index: 5;
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

const IconContainer = styled.div<IColor>`
  cursor: pointer;

  position: relative;
  display: flex;
  height: 24px;
  width: 24px;

  &:hover {
    color: ${({ resultsToggle }) => (resultsToggle ? "grey" : "#e8eaed")};
  }
`;
const IconCount = styled.div`
  position: absolute;
  border-radius: 50px;
  width: 15px;
  height: 15px;
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

type Props = {
  setResultsToggle: (val: Boolean) => void;
  setCategory: (val: string) => void;
  resultsToggle: Boolean;
  setGender: (val: string) => void;
  isClosed: Boolean;
  setIsClosed: (val: Boolean) => void;
  setShowBag: (val: Boolean) => void;
  setShowSave: (val: Boolean) => void;
};

const Navbar: React.FC<Props> = (Props): ReactElement => {
  const {
    setResultsToggle,
    setCategory,
    resultsToggle,
    setGender,
    isClosed,
    setIsClosed,
    setShowBag,
    setShowSave,
  } = Props;

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
    setIsClosed(true);
  };

  const handleBagClick = () => {
    setIsClosed(!isClosed);
    setShowBag(true);
  };
  const handleSaveClick = () => {
    setIsClosed(!isClosed);
    console.log({ isClosed });
    setShowSave(true);
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
          <IconContainer
            resultsToggle={resultsToggle}
            onClick={handleSaveClick}
          >
            <HiOutlineHeart size="24" />
            <IconCount>1</IconCount>
          </IconContainer>
          <IconContainer resultsToggle={resultsToggle} onClick={handleBagClick}>
            <HiOutlineShoppingBag size="24" />
            <IconCount>1</IconCount>
          </IconContainer>
        </RightContainer>
      </NavContainer>
    </>
  );
};

export default Navbar;
