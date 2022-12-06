import React from "react";
import styled from "styled-components";
import { HiOutlineTrash } from "react-icons/hi";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { ReactElement } from "react";
import { useShoppingBag } from "../../../Context/ShoppingBagContext";

const ItemContainer = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  box-sizing: border-box;
  border-top: 1px solid #0c0b10;
  gap: 5px;
  &:first-child {
    border-top: none;
  }
`;
const ImageContainer = styled.div`
  height: 100%;
  width: 35%;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ItemImage = styled.img`
  height: 85%;
  object-fit: contain;
  filter: brightness(80%);
`;
const ItemCenter = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;
  padding: 0 10px;
  justify-content: space-between; ;
`;
const Spacer = styled.div`
display: flex:
flex-grow: 1;
flex-direction: column;
justify-content: space-between;

`;
const ItemTitle = styled.h3`
  font-size: 14px;
  font-weight: 300;
  color: white;
  margin: 0;
  max-height: 36px;
  overflow: hidden;
`;
const QuantityContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const QuantityTotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const ItemTotalQuantity = styled.p`
  margin: 0;
  font-size: 14px;
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
  align-items: center;
  justify-content: end;
`;
const ItemRemove = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  outline: inherit;
  color: white;
`;
const ItemPrice = styled.p`
  color: white;
  margin: 0;
  font-size: 16px;
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
      <ImageContainer>
        <ItemImage src={item.image}></ItemImage>
      </ImageContainer>
      <ItemCenter>
        <Spacer>
          <ItemPrice>£{Math.round(item.price)}</ItemPrice>
          <ItemTitle>{item.title}</ItemTitle>
          <QuantityContainer>
            <QuantityTotalWrapper>
              <ItemTotalQuantity>Qty: {quantity} </ItemTotalQuantity>
              <ItemTotalQuantity>
                Total: £{Math.round(item.price * quantity)}
              </ItemTotalQuantity>
            </QuantityTotalWrapper>
          </QuantityContainer>
        </Spacer>
        <Spacer>
          <ItemChangeQuantityContainer>
            <AiOutlinePlusCircle
              size={24}
              color={"white"}
              onClick={() => increaseBagQuantity(item.id)}
              style={{ cursor: "pointer" }}
            />
            <AiOutlineMinusCircle
              size={24}
              color={"white"}
              onClick={() => decreaseBagQuantity(item.id)}
              style={{ cursor: "pointer" }}
            />
          </ItemChangeQuantityContainer>
        </Spacer>
      </ItemCenter>
      <ItemRight>
        <ItemRemove>
          <HiOutlineTrash size={24} onClick={() => removeFromBag(item.id)} />
        </ItemRemove>
      </ItemRight>
    </ItemContainer>
  );
};

export default SideBarItem;
