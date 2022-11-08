import { useState, useEffect } from "react";
import styled from "styled-components";
import { iClothes } from "../../iClothes";
import { HiOutlineHeart, HiOutlineShoppingBag } from "react-icons/hi";

const SearchResultsContainer = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
const ResultsTitle = styled.h1`
  padding-top: 90px;
  padding-left: 10px;
  margin: 0;
  font-size: 24px;
`;

const ItemCard = styled.div`
  width: 250px;
  height: 380px;
  margin: 10px;
  padding: 5px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const ItemImage = styled.img`
  width: 100%;
  height: 70%;
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
const SearchResults = () => {
  const [data, setData] = useState<iClothes[]>([]);
  console.log({ data });

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men's%20clothing")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  }, []);

  return (
    <>
      <ResultsTitle>Men's clothing</ResultsTitle>
      <SearchResultsContainer>
        {data.map((item, index) => (
          <ItemCard key={index}>
            <ItemImage src={item.image} alt={item.title}></ItemImage>
            <ItemTextContainer>
              <ItemTitle>{item.title}</ItemTitle>
              <ItemBottomRowContainer>
                <ItemPrice>£{item.price}</ItemPrice>
                <ItemBasketSaveContainer>
                  <HiOutlineHeart size={20}/>
                  <HiOutlineShoppingBag size={20}/>
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
