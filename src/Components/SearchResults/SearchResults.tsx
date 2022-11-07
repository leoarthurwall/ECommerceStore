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
  color: black;
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
        <ItemCard key={index}>{item.title}</ItemCard>
      ))}
    </SearchResultsContainer>
  );
};

export default SearchResults;
