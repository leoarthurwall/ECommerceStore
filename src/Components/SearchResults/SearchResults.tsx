import  { useState, useEffect } from "react";
import styled from "styled-components";

const SearchResultsContainer = styled.section`
  height: 100vh;
  width: 100%;
  padding-top: 80px;
`;

const SearchResults = () => {

    const[data, setData] = useState([])


  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then(json => {
        console.log(json);
        setData([json]);
    })



    
  }, []);

  return <SearchResultsContainer>SearchResults</SearchResultsContainer>;
};

export default SearchResults;
