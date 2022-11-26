import React from "react";
import styled from "styled-components";
import { ReactElement } from "react";
import { RiCloseLine } from "react-icons/ri";
import { HiOutlineShoppingBag } from "react-icons/hi";
import SideBarItem from "./SideBarItem/SideBarItem";
import SideBarlower from "./SideBarLower/SideBarlower";
import { iClothes } from "../../iClothes";
import { useShoppingBag } from "../../Context/ShoppingBagContext";

const SideBarContainer = styled.div<IisClosed>`
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: ${({ isClosed }) => (isClosed ? "-350px" : "0px")};

  transition: 0.5s;
  width: 350px;
  background: #1e1e1e;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 10;

  padding: 0 25px 40px 25px;
  box-sizing: border-box;
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

const SideBarOverlay = styled.div<IisClosed>`
  position: absolute;
  background-color: ${({ isClosed }) =>
    isClosed ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 0.4)"};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 8;
  transition: 0.5s;
  visibility: ${({ isClosed }) => isClosed && "hidden"};
`;

interface IisClosed {
  isClosed: Boolean;
}

type Props = {
  showBag: Boolean;
  setShowBag: (val: Boolean) => void;
  data: iClothes[];
};

const SideBar: React.FC<Props> = (Props): ReactElement => {
  const { showBag, setShowBag, data} =
    Props;

    const { bagQuantity, bagItems, isClosed, setIsClosed } =  useShoppingBag();

  const handleCloseClick = () => {
    setIsClosed(!isClosed);
    setShowBag(false);
  };

  // closes menu when overlay clicked
  const handleOverlayClick = () => {
    setIsClosed(!isClosed);
  };
  return (
    <>
      <SideBarContainer isClosed={isClosed}>
        <SideBarUpperContainer>
          {showBag && (
            <HeaderContainer>
              <HiOutlineShoppingBag size="24" color="white" />
              <HeaderText>
                {" "}
                Your Bag <HeaderSpan>({bagQuantity})</HeaderSpan>
              </HeaderText>
            </HeaderContainer>
          )}
          <IconContainer onClick={handleCloseClick}>
            <RiCloseLine size="30" />
          </IconContainer>
        </SideBarUpperContainer>
        <SideBarMainSection>
          {bagItems.map((item: any) => (
            <SideBarItem key={item.id} {...item} data={data}/>
          ))}
        </SideBarMainSection>
        <SideBarlower />
      </SideBarContainer>
      <SideBarOverlay isClosed={isClosed} onClick={handleOverlayClick} />
    </>
  );
};

export default SideBar;
