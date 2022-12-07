import React from "react";
import styled from "styled-components";
import { ReactElement } from "react";
import { RiCloseLine } from "react-icons/ri";
import { useShoppingBag } from "../../Context/ShoppingBagContext";

const SideBarContainer = styled.div<IisMenuClosed>`
  position: fixed;
  top: 0px;
  bottom: 0px;
  right: ${({ isMenuClosed }) => (isMenuClosed ? "-350px" : "0px")};

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
    right: ${({ isMenuClosed }) => (isMenuClosed ? "-100%" : "0px")};
  }
`;
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;
const HeaderText = styled.h2`
  font-weight: 300;
  font-size: 22px;
`;
const HeaderSpan = styled.span`
  font-size: 14px;
`;

const IconContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SideBarUpperContainer = styled.div`
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  color: #fff;
`;
const SideBarMainSection = styled.div`
  height: 65%;
  width: 100%;

  border-top: 1px solid #0c0b10;
  border-bottom: 1px solid #0c0b10;

  border-radius: 5px;
  overflow: scroll;
`;

const SideBarOverlay = styled.div<IisMenuClosed>`
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

const SideBar: React.FC = (): ReactElement => {
  const {
  
    isMenuClosed,
    setIsMenuClosed,
    handleMenuClick,
  } = useShoppingBag();

  // closes menu when overlay clicked
  const handleOverlayClick = () => {
    setIsMenuClosed(!isMenuClosed);
  };
  return (
    <>
      <SideBarContainer isMenuClosed={isMenuClosed}>
        <SideBarUpperContainer>
          <IconContainer onClick={(e) => handleMenuClick(e)}>
            <RiCloseLine size="30" />
          </IconContainer>
          <HeaderContainer>
            <HeaderText>Menu</HeaderText>
          </HeaderContainer>
        </SideBarUpperContainer>
        <SideBarMainSection>Men, Women, Home, Bag</SideBarMainSection>
      </SideBarContainer>
      <SideBarOverlay isMenuClosed={isMenuClosed} onClick={handleOverlayClick} />
    </>
  );
};

export default SideBar;
