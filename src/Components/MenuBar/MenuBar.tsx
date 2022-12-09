import React from "react";
import styled from "styled-components";
import { ReactElement } from "react";
import { RiCloseLine } from "react-icons/ri";
import { useShoppingBag } from "../../Context/ShoppingBagContext";
import { NavLink } from "react-router-dom";

const MenuBarContainer = styled.div<IisMenuClosed>`
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: ${({ isMenuClosed }) => (isMenuClosed ? "-350px" : "0px")};
  opacity: ${({ isMenuClosed }) => (isMenuClosed ? "0" : "1")};

  transition: 0.5s;
  width: 350px;
  background: #1e1e1e;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 10;

  padding: 0 25px 40px 25px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
    // left: ${({ isMenuClosed }) => (isMenuClosed ? "-100%" : "0px")};

    left: 0px;

    transform: ${({ isMenuClosed }) =>
      isMenuClosed ? "scale(1.1)" : "scale(1)"};
    transition: all 0.5s;
    visibility: ${({ isMenuClosed }) => (isMenuClosed ? "hidden" : "visible")};
  }
`;
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;
const HeaderText = styled.h2`
  font-weight: 800;
  font-family: sans-serif;
  font-size: 24px;
  letter-spacing: -3px;
`;

const IconContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MenuBarUpperContainer = styled.div`
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  color: #fff;
`;
const MenuBarMainSection = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
`;
const MenuText = styled.h2`
  font-size: 36px;
  color: #fff;

  font-weight: 200;
  text-align: center;
  font-family: inter;
  margin: 0;
  transition: color 0.2s;

  cursor: pointer;

  &:hover {
    color: #9bad97;
  }

  @media (max-width: 382px) {
    font-size: 32px;
  }
`;
const MenuLink = styled(NavLink)`
  font-size: 36px;
  color: #fff;

  font-weight: 200;
  text-align: center;
  font-family: inter;
  margin: 0;
  transition: color 0.2s;

  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #9bad97;
  }

  @media (max-width: 382px) {
    font-size: 32px;
  }
`;

const MenuBarOverlay = styled.div<IisMenuClosed>`
  position: fixed;
  background-color: ${({ isMenuClosed }) =>
    isMenuClosed ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 0.4)"};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 8;
  transition: 0.5s;
  visibility: ${({ isMenuClosed }) => isMenuClosed && "hidden"};
`;

interface IisMenuClosed {
  isMenuClosed: Boolean;
}

const MenuBar: React.FC = (): ReactElement => {
  const {
    isMenuClosed,
    setIsMenuClosed,
    handleMenuClick,
    isBagClosed,
    setIsBagClosed,
  } = useShoppingBag();

  // closes menu when overlay clicked
  const handleOverlayClick = () => {
    setIsMenuClosed(!isMenuClosed);
  };

  const handleChangeSidebar = () => {
    setIsMenuClosed(!isMenuClosed);
    setIsBagClosed(!isBagClosed);
  };

  return (
    <>
      <MenuBarContainer isMenuClosed={isMenuClosed}>
        <MenuBarUpperContainer>
          <HeaderContainer>
            <HeaderText>ASUS</HeaderText>
          </HeaderContainer>
          <IconContainer onClick={(e) => handleMenuClick(e)}>
            <RiCloseLine size="30" />
          </IconContainer>
        </MenuBarUpperContainer>
        <MenuBarMainSection>
          <MenuLink to="/men" onClick={(e) => handleMenuClick(e)}>
            MEN
          </MenuLink>
          <MenuLink to="/women" onClick={(e) => handleMenuClick(e)}>
            WOMEN
          </MenuLink>
          <MenuText onClick={(e) => handleChangeSidebar()}>BAG</MenuText>
          <MenuLink to="/" onClick={(e) => handleMenuClick(e)}>
            HOME
          </MenuLink>
        </MenuBarMainSection>
      </MenuBarContainer>
      <MenuBarOverlay
        isMenuClosed={isMenuClosed}
        onClick={handleOverlayClick}
      />
    </>
  );
};

export default MenuBar;
