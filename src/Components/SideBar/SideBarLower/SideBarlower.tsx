import styled from "styled-components";

const SideBarlowerContainer = styled.div`
  width: 100%;
  height: 15%;
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

  cursor: pointer;
`;
const SideBarlower = () => {
  return (
    <SideBarlowerContainer>
      <SubtotalContainer>
        <SubtotalText>Subtotal:</SubtotalText>
        <SubtotalAmount>$400</SubtotalAmount>
      </SubtotalContainer>
      <CheckoutButton>CHECKOUT</CheckoutButton>
    </SideBarlowerContainer>
  );
};

export default SideBarlower;
