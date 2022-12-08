import styled from "styled-components";
import { useShoppingBag } from "../../../Context/ShoppingBagContext";

const SideBarlowerContainer = styled.div`
  width: 100%;
  height: 15%;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 10px;
  box-sizing: border-box;
`;
const SubtotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const SubtotalText = styled.h2`
  color: grey;
  font-size: 20px;
  font-weight: 300;
  margin: 0;
`;
const SubtotalAmount = styled.h2`
  color: white;
  font-size: 20px;
  font-weight: 400;
  margin: 0;
`;
const CheckoutButton = styled.button`
  width: 100%;
  background: #0c0b10;
  color: white;
  outline: none;
  border: none;
  padding: 10px 0;
  font-weight: 300;
  font-size: 12px;
  transition: 0.1s;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #9bad97;
  }
`;
const SideBarlower = () => {
  const { data, bagItems } = useShoppingBag();

  const bagTotal = Math.round(
    bagItems.reduce((total, bagItem) => {
      const item = data.find((i) => i.id === bagItem.id);
      return total + (item?.price || 0) * bagItem.quantity;
    }, 0)
  );

  //Alert that displays when checkout button is clicked
  const checkoutClick = () => {
    if (bagTotal > 0) {
      alert(
        `You will be charged a total of £${bagTotal} for this purchace. Thank you for shopping with us`
      );
    } else {
      alert("Your bag is currently empty, go put something in it :)");
    }
  };

  return (
    <SideBarlowerContainer>
      <SubtotalContainer>
        <SubtotalText>Bag Total:</SubtotalText>
        <SubtotalAmount>£{bagTotal}</SubtotalAmount>
      </SubtotalContainer>
      <CheckoutButton onClick={checkoutClick}>CHECKOUT</CheckoutButton>
    </SideBarlowerContainer>
  );
};

export default SideBarlower;
