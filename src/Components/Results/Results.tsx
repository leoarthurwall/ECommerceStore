import styled from "styled-components";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { ReactElement } from "react";
import { useShoppingBag } from "../../Context/ShoppingBagContext"; 
import { iClothes } from "../../iClothes";

const SearchResultsContainer = styled.section`
  width: auto;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  padding: 0 40px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;
const ResultsTitle = styled.h1`
  padding: 90px 40px 20px 0px;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;

  font-size: 24px;
  font-weight: 300;
`;

const TitleSpan = styled.span`
  font-size: 14px;
  color: grey;
`;
const ItemCard = styled.div`
  width: 25%;
  height: 400px;
  padding: 5px;
  border: 2px solid red;
  //   border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  @media (max-width: 1000px) {
    width: 33%;
  }
  @media (max-width: 768px) {
    width: 50%;
    min-width: 350px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 80%;
  background-color: rgba(0, 0, 0, 0.05);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ItemImage = styled.img`
  width: 100%;
  height: 90%;
  object-fit: contain;
  transition: all 0.5s;
  filter: brightness(95%);

  &:hover {
    transform: scale(1.05);
  }
`;

const IconCircle = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: 0.2s;

  cursor: pointer;
  &:hover {
    color: grey;
  }
`;
const PriceContainer = styled.div`
  position: absolute;
  left: 5px;
  bottom: 0px;
  width: max-content;
  padding: 2px 5px;
  background-color: white;
`;
const ItemTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 15%;
  justify-content: space-between;
  padding: 10px 0;
`;
const ItemTitle = styled.h1`
  color: black;
  font-size: 13px;
  font-weight: 400;
  font-family: inter;
  line-height: 1.4;
  margin: 0;
  height: 34px;
  overflow: scroll;
`;
const ItemPrice = styled.h3`
  font-size: 14px;
  font-weight: 500;
  font-family: inter;
  margin: 0;
`;

type GenderDataProps = {
    GenderData: iClothes[];
    Gender: String
}

export const Results: React.FC<GenderDataProps> = ({GenderData, Gender}): ReactElement => {
  const { increaseBagQuantity } = useShoppingBag();


  return (
    <>
      <SearchResultsContainer>
      <ResultsTitle>
        {Gender} Clothing <TitleSpan>({GenderData.length} results)</TitleSpan>
      </ResultsTitle>
        {GenderData.map((item) => (
          <ItemCard key={item.id}>
            <ImageContainer>
              <ItemImage src={item.image} alt={item.title}></ItemImage>
              <IconCircle onClick={() => increaseBagQuantity(item.id)}>
                <HiOutlineShoppingBag size={20} />
              </IconCircle>
              <PriceContainer>
                <ItemPrice>£{Math.round(item.price)}</ItemPrice>
              </PriceContainer>
            </ImageContainer>
            <ItemTextContainer>
              <ItemTitle>{item.title}</ItemTitle>
            </ItemTextContainer>
          </ItemCard>
        ))}
      </SearchResultsContainer>
    </>
  );
};
