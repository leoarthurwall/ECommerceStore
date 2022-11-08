import styled from "styled-components";
import { HiOutlineHeart, HiOutlineShoppingBag } from "react-icons/hi";
import { ReactElement } from "react";

const NavContainer = styled.nav`
  width: 100vw;
  height: 80px;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  box-sizing: border-box;
  z-index: 10;
  background: red;
`;
const Logo = styled.h1`
  color: #fff;
  cursor: pointer;
`;
const LinkContainer = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 1.5rem;
  font-size: 18px;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: white;
`;
const SearchBar = styled.input`
  background-color: rgba(0, 0, 0, 0) !important;
  border: none !important;
  border-bottom: 1px solid #fff !important;
  box-shadow: none !important;
  height: 30px;
  font-size: 16px;
  font-weight: 400;
  color: #fff;
  padding: 0 15px;
  max-width: 150px;

  &:focus {
    outline: none;
  }
  ::placeholder {
    color: #fff;
  }
`;
const IconContainer = styled.div`
  cursor: pointer;

  &:hover {
    color: #e8eaed;
  }
`;
const Links = styled.li`
  margin: 0;
  padding: 0;
  color: #fff;

  cursor: pointer;

  &:hover {
    color: #e8eaed;
  }
`;

type Props = {
    setResultsToggle: (val: Boolean) => void;
    setCategory: (val: string) => void;
  };

const Navbar: React.FC<Props>  = (Props):ReactElement => {
    const { setResultsToggle, setCategory } = Props

    const handleMenClick = () => {
        setResultsToggle(true);
        setCategory("men's%20clothing");
      };
      const handleWomenClick = () => {
        setResultsToggle(true);
        setCategory("women's%20clothing");
      };
      const handleHomeClick = () => {
        setResultsToggle(false);
        setCategory("");
      }
      

  return (
    <NavContainer onClick={handleHomeClick}>
      <Logo>E Commerce Store</Logo>
      <LinkContainer>
        <Links onClick={handleMenClick}>Men</Links>
        <Links onClick={handleWomenClick}>Women</Links>
      </LinkContainer>
      <RightContainer>
        <SearchBar type="text" placeholder="Search..."></SearchBar>
        <IconContainer>
          <HiOutlineHeart size="24" />
        </IconContainer>
        <IconContainer>
          <HiOutlineShoppingBag size="24" />
        </IconContainer>
      </RightContainer>
    </NavContainer>
  );
};

export default Navbar;
