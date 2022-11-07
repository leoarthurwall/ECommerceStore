import { useState, useEffect } from "react";
import styled from "styled-components";
import { iClothes } from "../../iClothes";

const SearchResultsContainer = styled.section`
  height: 100vh;
  width: 100%;
  padding-top: 80px;
  display: flex;
  flex-wrap: wrap;
`;

const ItemCard = styled.div`
  width: 250px;
  height: 380px;
  margin: 10px;
  padding: 5px;
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
`
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
const SearchResults = () => {
  const [data, setData] = useState<iClothes[]>([]);
  console.log({ data });

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  }, []);

  return (
    <SearchResultsContainer>
      {data.map((item, index) => (
        <ItemCard key={index}>
          <ItemImage src={item.image} alt={item.title}></ItemImage>
          <ItemTextContainer>
            <ItemTitle>{item.title}</ItemTitle>
            <ItemPrice>£{item.price}</ItemPrice>
          </ItemTextContainer>
        </ItemCard>
      ))}
    </SearchResultsContainer>
  );
};

export default SearchResults;
