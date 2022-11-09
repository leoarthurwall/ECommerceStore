import React from "react";
import styled from "styled-components";
import { ReactElement } from "react";
import { RiCloseLine } from "react-icons/ri";
import { HiOutlineShoppingBag } from "react-icons/hi";

const BagContainer = styled.div<IisClosed>`
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
  z-index: 10;
`;
const HeaderContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center; 
gap: 0.5rem;
padding-left: 25px;
`;
const HeaderText = styled.h2`
font-weight: 300;
font-size: 22px;
`;
const BagHeaderBox = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  adlgn-items: center;
`;
const IconContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const IconMainContainer = styled.div`
  height: 80px;
  padding-right: 45px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  color: #fff;
`;

interface IisClosed {
  isClosed: Boolean;
}

type Props = {
  isClosed: Boolean;
  setIsClosed: (val: Boolean) => void;
};

const Bag: React.FC<Props> = (Props): ReactElement => {
  const { isClosed, setIsClosed } = Props;

  const handleCloseClick = () => {
    setIsClosed(!isClosed);
  };
  return (
    <BagContainer isClosed={isClosed}>
      <IconMainContainer>
        <HeaderContainer>
          <HiOutlineShoppingBag size="24" color="white" />
          <HeaderText> Your Bag </HeaderText>
        </HeaderContainer>
        <IconContainer onClick={handleCloseClick}>
          <RiCloseLine size="30" />
        </IconContainer>
      </IconMainContainer>

      <BagHeaderBox></BagHeaderBox>
    </BagContainer>
  );
};

export default Bag;
