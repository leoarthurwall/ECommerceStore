import styled from "styled-components";

const SideBarlowerContainer = styled.div`
  width: 100%;
  height: 15%;
  background: #0c0b10;
`;
const SubtotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const SubtotalText = styled.h2`
  color: grey;
  font-size: 20px;
  font-weight: 400;
  margin:0;
`;
const SubtotalAmount = styled.h2`
  color: white;
  font-size: 20px;
  font-weight: 400;
  margin:0;

`;
const SideBarlower = () => {
  return (
    <SideBarlowerContainer>
      <SubtotalContainer>
        <SubtotalText>Subtotal:</SubtotalText>
        <SubtotalAmount>$400</SubtotalAmount>
      </SubtotalContainer>
    </SideBarlowerContainer>
  );
};

export default SideBarlower;
