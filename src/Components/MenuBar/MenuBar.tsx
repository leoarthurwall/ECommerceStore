import React from "react";
import styled from "styled-components";
import { ReactElement } from "react";
import { RiCloseLine } from "react-icons/ri";
import { useShoppingBag } from "../../Context/ShoppingBagContext";

const MenuBarContainer = styled.div<IisMenuClosed>`
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: ${({ isMenuClosed }) => (isMenuClosed ? "-350px" : "0px")};

  transition: 0.5s;
  width: 350px;
  background: #1e1e1e;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 10;

  padding: 0 25px 40px 25px;
  box-sizing: border-box;

  @media (max-width: 500px) {
    width: 100%;
    left: ${({ isMenuClosed }) => (isMenuClosed ? "-100%" : "0px")};
  }
`;
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;
const HeaderText = styled.h2`
  font-weight: 500;
  font-size: 24px;
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
  font-family: inter ;
  margin: 0;
  transition: color 0.2s;

  cursor: pointer;

  &:hover {
    color: #9bad97;
  }

  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 48px;
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
  const { isMenuClosed, setIsMenuClosed, handleMenuClick } = useShoppingBag();

  // closes menu when overlay clicked
  const handleOverlayClick = () => {
    setIsMenuClosed(!isMenuClosed);
  };
  return (
    <>
      <MenuBarContainer isMenuClosed={isMenuClosed}>
        <MenuBarUpperContainer>
          <IconContainer onClick={(e) => handleMenuClick(e)}>
            <RiCloseLine size="30" />
          </IconContainer>
          <HeaderContainer>
            <HeaderText>Menu</HeaderText>
          </HeaderContainer>
        </MenuBarUpperContainer>
        <MenuBarMainSection>
          <MenuText>MEN</MenuText>
          <MenuText>WOMEN</MenuText>
          <MenuText>HOME</MenuText>
          <MenuText>BAG</MenuText>
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
