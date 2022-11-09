import React from "react";
import styled from "styled-components";
import { ReactElement } from "react";
import { RiCloseLine } from "react-icons/ri";
import { HiOutlineShoppingBag, HiOutlineHeart } from "react-icons/hi";

const SideBarContainer = styled.div<IisClosed>`
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: ${({ isClosed }) => (isClosed ? "-350px" : "0px")};

  transition: 0.5s;
  width: 350px;
  background: #1e1e1e;
  border-radius: 5px 0 0 0; /*TL TR BR BL*/

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 10;

  padding: 0 45px 40px 25px;
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
  height: 40%;
  width: 100%;

  background: #0c0b10;
  border-radius: 5px;
`;

const SideBarLowerSection = styled.div`
  height: 30%;
  width: 100%;

  background: #0c0b10;
  border-radius: 5px;
`;
interface IisClosed {
  isClosed: Boolean;
}

type Props = {
  isClosed: Boolean;
  setIsClosed: (val: Boolean) => void;
  showBag: Boolean;
  setShowBag: (val: Boolean) => void;
  showSave: Boolean;
  setShowSave: (val: Boolean) => void;
};

const SideBar: React.FC<Props> = (Props): ReactElement => {
  const { isClosed, setIsClosed, showBag, setShowBag, showSave, setShowSave } =
    Props;

  const handleCloseClick = () => {
    setIsClosed(!isClosed);
    setShowBag(false);
    setShowSave(false);
  };
  return (
    <SideBarContainer isClosed={isClosed}>
      <SideBarUpperContainer>
        {showBag && (
          <HeaderContainer>
            <HiOutlineShoppingBag size="24" color="white" />
            <HeaderText> Your Bag </HeaderText>
          </HeaderContainer>
        )}
        {showSave && (
          <HeaderContainer>
            <HiOutlineHeart size="24" color="white" />
            <HeaderText> Your Favourites </HeaderText>
          </HeaderContainer>
        )}
        <IconContainer onClick={handleCloseClick}>
          <RiCloseLine size="30" />
        </IconContainer>
      </SideBarUpperContainer>
      <SideBarMainSection></SideBarMainSection>
      <SideBarLowerSection></SideBarLowerSection>
    </SideBarContainer>
  );
};

export default SideBar;
