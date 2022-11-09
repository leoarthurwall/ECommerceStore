import { useEffect } from "react";
import styled from "styled-components";
import { iClothes } from "../../iClothes";
import { HiOutlineHeart, HiOutlineShoppingBag } from "react-icons/hi";
import { ReactElement } from "react";

const SearchResultsContainer = styled.section`
  height: 100vh;
  width: 100%;
  max-width: 1400px;
  display: flex;
  flex-wrap: wrap;
  padding: 0 40px;
  box-sizing: border-box;
`;
const ResultsTitle = styled.h1`
  padding: 90px 40px 0 50px;
  margin: 0;
  font-size: 24px;
  font-weight: 300;
`;

const ItemCard = styled.div`
  width: 25%;
  height: 400px;
  padding: 15px;
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

const ItemImage = styled.img`
  width: 100%;
  height: 70%;
  object-fit: contain;
`;
const ItemTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 25%;
  justify-content: space-between;
  padding: 10px 0;
`;
const ItemTitle = styled.h1`
  color: black;
  font-size: 14px;
  font-weight: 500;
  font-family: inter;
  margin: 0;
`;
const ItemPrice = styled.h3`
  font-size: 16px;
  font-weight: 800;
  font-family: inter;
  margin: 0;
`;
const ItemBasketSaveContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;
const ItemBottomRowContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

type Props = {
  category: String;
  gender: String;
  data: iClothes[];
  setData: (val: iClothes[]) => void;
};
const SearchResults: React.FC<Props> = (Props): ReactElement => {
  const { category, gender, data, setData } = Props;

  console.log({ data });

  useEffect(() => {
    // fetch("https://fakestoreapi.com/products/category/men's%20clothing")
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  }, [category, setData]);

  return (
    <>
      <ResultsTitle>{gender}</ResultsTitle>
      <SearchResultsContainer>
        {data.map((item, index) => (
          <ItemCard key={index}>
            <ItemImage src={item.image} alt={item.title}></ItemImage>
            <ItemTextContainer>
              <ItemTitle>{item.title}</ItemTitle>
              <ItemBottomRowContainer>
                <ItemPrice>£{item.price}</ItemPrice>
                <ItemBasketSaveContainer>
                  <HiOutlineHeart size={20} />
                  <HiOutlineShoppingBag size={20} />
                </ItemBasketSaveContainer>
              </ItemBottomRowContainer>
            </ItemTextContainer>
          </ItemCard>
        ))}
      </SearchResultsContainer>
    </>
  );
};

export default SearchResults;
