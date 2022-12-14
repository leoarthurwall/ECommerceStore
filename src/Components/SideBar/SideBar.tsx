import React from "react";
import styled from "styled-components";
import { ReactElement } from "react";
import { RiCloseLine } from "react-icons/ri";
import { HiOutlineShoppingBag } from "react-icons/hi";
import SideBarItem from "./SideBarItem/SideBarItem";
import SideBarlower from "./SideBarLower/SideBarlower";
import { useShoppingBag } from "../../Context/ShoppingBagContext";

const SideBarContainer = styled.div<IisBagClosed>`
  position: fixed;
  top: 0px;
  bottom: 0px;
  right: ${({ isBagClosed }) => (isBagClosed ? "-350px" : "0px")};
  opacity: ${({ isBagClosed }) => (isBagClosed ? "0" : "1")};

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
    right: 0px;

    transform: ${({ isBagClosed }) =>
      isBagClosed ? "scale(1.1)" : "scale(1)"};
    visibility: ${({ isBagClosed }) => (isBagClosed ? "hidden" : "visible")};
  }
  @media (max-width: 500px) {
    padding: 0 15px 40px 15px;
  }
`;

const SideBarWrapper = styled.div`
  width: auto;
  max-width: 400px;
  margin: 0 auto;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
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
  height: 70%;
  width: 100%;
  min-width: 280px;

  border-top: 1px solid #0c0b10;
  border-bottom: 1px solid #0c0b10;

  border-radius: 5px;
  overflow: scroll;

  @media (max-width: 500px) {
    min-width: 250px;
  }
`;

const EmptyBagText = styled.p`
  color: white;
  text-align: center;
`;
const SideBarOverlay = styled.div<IisBagClosed>`
  position: fixed;
  background-color: ${({ isBagClosed }) =>
    isBagClosed ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 0.4)"};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 8;
  transition: 0.5s;
  visibility: ${({ isBagClosed }) => isBagClosed && "hidden"};
`;

interface IisBagClosed {
  isBagClosed: Boolean;
}

const SideBar: React.FC = (): ReactElement => {
  const {
    bagQuantity,
    bagItems,
    isBagClosed,
    setIsBagClosed,
    handleSidebarClick,
  } = useShoppingBag();

  // closes menu when overlay clicked
  const handleOverlayClick = () => {
    setIsBagClosed(!isBagClosed);
  };
  return (
    <>
      <SideBarContainer isBagClosed={isBagClosed}>
        <SideBarUpperContainer>
          <HeaderContainer>
            <HiOutlineShoppingBag size="24" color="white" />
            <HeaderText>
              {" "}
              Your Bag <HeaderSpan>({bagQuantity})</HeaderSpan>
            </HeaderText>
          </HeaderContainer>

          <IconContainer onClick={(e) => handleSidebarClick(e)}>
            <RiCloseLine size="30" />
          </IconContainer>
        </SideBarUpperContainer>
        <SideBarWrapper>
          {!bagQuantity ? (
            <SideBarMainSection>
              <EmptyBagText>
                You bag is currently empty... <br /> Add something
              </EmptyBagText>
            </SideBarMainSection>
          ) : (
            <SideBarMainSection>
              {bagItems.map((item) => (
                <SideBarItem key={item.id} {...item} />
              ))}
            </SideBarMainSection>
          )}

          <SideBarlower />
        </SideBarWrapper>
      </SideBarContainer>
      <SideBarOverlay isBagClosed={isBagClosed} onClick={handleOverlayClick} />
    </>
  );
};

export default SideBar;
