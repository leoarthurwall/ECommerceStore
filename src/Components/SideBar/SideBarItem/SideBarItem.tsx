import React from "react";
import styled from "styled-components";
import { HiOutlineTrash } from "react-icons/hi";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { ReactElement } from "react";
import { useShoppingBag } from "../../../Context/ShoppingBagContext";

const ItemContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  box-sizing: border-box;
  border-top: 1px solid #0c0b10;
  &:first-child {
    border-top: none;
  }
`;
const ItemImage = styled.img`
  height: 100%;
  width: 25%;
  object-fit: contain;
  background: white;
`;
const ItemCenter = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  padding: 0 10px;
  justify-content: space-between;
`;
const ItemTitle = styled.h3`
  font-size: 12px;
  font-weight: 300;
  color: white;
  margin: 0;
`;
const QuantityContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const ItemQuantity = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 400;
  color: grey;
`;

const ItemChangeQuantityContainer = styled.div`
  display: flex;
  justify-content: left;
  align-itmens: center;
  gap: 0.5rem;
  margin-top: 5px;
`;

const ItemRight = styled.div`
  width: 5%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: end;
`;
const ItemRemove = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  color: white;
`;
const ItemPrice = styled.p`
  color: white;
  margin: 0;
  font-size: 14px;
  font-weight: 400;
`;

type BagItemProps = {
  id: number;
  quantity: number;
};

const SideBarItem: React.FC<BagItemProps> = (
  Props
): ReactElement<any> | null => {
  const { id, quantity } = Props;
  const { increaseBagQuantity, decreaseBagQuantity, removeFromBag, data } =
    useShoppingBag();

  const item = data.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <ItemContainer>
      <ItemImage src={item.image}></ItemImage>
      <ItemCenter>
        <ItemPrice>£{Math.round(item.price)}</ItemPrice>
        <ItemTitle>{item.title}</ItemTitle>
        <QuantityContainer>
          <ItemQuantity>Qty: {quantity}</ItemQuantity>
          <ItemChangeQuantityContainer>
            <AiOutlinePlusCircle size={16} color={"white"} onClick={() => increaseBagQuantity(item.id)}/>
            <AiOutlineMinusCircle size={16} color={"white"} onClick={() => decreaseBagQuantity(item.id)}/>
          </ItemChangeQuantityContainer>
        </QuantityContainer>
      </ItemCenter>
      <ItemRight>
        <ItemRemove>
          <HiOutlineTrash />
        </ItemRemove>
      </ItemRight>
    </ItemContainer>
  );
};

export default SideBarItem;
