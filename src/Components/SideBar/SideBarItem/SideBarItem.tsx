import React from "react";
import styled from "styled-components";
import { HiOutlineTrash } from "react-icons/hi";

const ItemContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  box-sizing: border-box;
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
  width: 50%;
  padding: 0 10px;
  justify-content: space-between;
`;
const ItemTitle = styled.h3`
  font-size: 13px;
  font-weight: 400;
  color: white;
  margin: 0;
`;
const QuantityContainer = styled.div`
display: flex;
flex-direction: column;
`
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
const ItemChangeQuantityButton = styled.button`
  width: 20px;
  background: grey;
  color: white;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  border-radius: 3px;
`;
const ItemRight = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;
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

const SideBarItem = () => {
  return (
    <ItemContainer>
      <ItemImage></ItemImage>
      <ItemCenter>
        <ItemTitle>Mens Casual Premium Slim Fit T-Shirts</ItemTitle>
        <QuantityContainer>
          <ItemQuantity>Quantity: 1</ItemQuantity>
          <ItemChangeQuantityContainer>
            <ItemChangeQuantityButton>+</ItemChangeQuantityButton>
            <ItemChangeQuantityButton>-</ItemChangeQuantityButton>
          </ItemChangeQuantityContainer>
        </QuantityContainer>
      </ItemCenter>
      <ItemRight>
        <ItemRemove>
          <HiOutlineTrash />
        </ItemRemove>
        <ItemPrice>$25.00</ItemPrice>
      </ItemRight>
    </ItemContainer>
  );
};

export default SideBarItem;
