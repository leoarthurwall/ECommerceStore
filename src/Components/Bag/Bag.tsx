import React from "react";
import styled from "styled-components";
import { ReactElement } from "react";
import { HiOutlineHeart } from "react-icons/hi";
import { RiCloseLine } from "react-icons/ri";
import { IconBase } from "react-icons";

const BagContainer = styled.div<IisClosed>`
  position: absolute;
  top: 80px;
  bottom: 0px;
  right: ${({ isClosed }) => (isClosed ? "-350px" : "0px")};

  transition: 0.6s;
  width: 350px;
  background: #1e1e1e;
  border-radius: 5px 0 0 0; /*TL TR BR BL*/
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
`;
const IconMainContainer = styled.div`
  height: 80px;
  padding-right: 45px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  gap: 1rem;
  color: #fff;
`;

interface IisClosed {
  isClosed: Boolean;
}

type Props = {
  isClosed: Boolean;
};

const Bag: React.FC<Props> = (Props): ReactElement => {
  const { isClosed } = Props;
  return (
    <BagContainer isClosed={isClosed}>
      <IconMainContainer>
        <IconContainer>
          <HiOutlineHeart size="24" />
        </IconContainer>
        <IconContainer>
          <RiCloseLine size="30" />
        </IconContainer>
      </IconMainContainer>

      <BagHeaderBox></BagHeaderBox>
    </BagContainer>
  );
};

export default Bag;
