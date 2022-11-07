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
  height: 400px;
  background: pink;
  margin: 10px;
`;

const ItemImage = styled.img`
  width: 100%;
  height: 70%;
  padding: 10px;
`;

const ItemTitle = styled.h1`
    color: black;
    font-size: 20px;
    font-weight: 500;
    font-family: inter;
`
const ItemPrice = styled.h3`
    font-size: 18px;
    font-weight: 600;
    font-family: inter;
`
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
          <ItemTitle>{item.title}</ItemTitle>
          <ItemPrice>{item.price}</ItemPrice>
        </ItemCard>
      ))}
    </SearchResultsContainer>
  );
};

export default SearchResults;
