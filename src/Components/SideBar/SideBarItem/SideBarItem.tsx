import React from "react";
import styled from "styled-components";

const ItemContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ItemImage = styled.img`
  height: 100%;
  width: 20%;
  object-fit: contain;
  background: black;
`;
const ItemCenter = styled.div`
  display: flex;
  flex-direction: column;
`;
const ItemTitle = styled.h3`
  font-size: 20px;
  font-weight: 400px;
  color: white;
  margin: 0;
`;
const ItemQuantity = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 16px;
  color: grey;
`;

const ItemRight = styled.div`
  width: 25px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const ItemRemove = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;
const ItemPrice = styled.p`
  color: white;
  margin: 0;
  font-size: 18px;
  font-weight: 400;
`;

const ItemChangeQuantityContainer = styled.div`
  display: flex;
  justify-content: center;
  align-itmens: center;
  gap: 0.5rem;
`;
const ItemChangeQuantityButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;
const SideBarItem = () => {
  return (
    <ItemContainer>
      <ItemImage></ItemImage>
      <ItemCenter>
        <ItemTitle></ItemTitle>
        <ItemQuantity>X</ItemQuantity>
      </ItemCenter>
      <ItemRight>
        <ItemRemove></ItemRemove>
        <ItemPrice></ItemPrice>
        <ItemChangeQuantityContainer>
            <ItemChangeQuantityButton>+</ItemChangeQuantityButton>
            <ItemChangeQuantityButton>-</ItemChangeQuantityButton>
        </ItemChangeQuantityContainer>
      </ItemRight>
    </ItemContainer>
  );
};

export default SideBarItem;
