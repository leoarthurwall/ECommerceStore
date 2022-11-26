import { useEffect } from "react";
import styled from "styled-components";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { ReactElement } from "react";
import { useShoppingBag } from "../../Context/ShoppingBagContext";
const SearchResultsContainer = styled.section`
  height: 100vh;
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
  padding: 90px 40px 20px 40px;
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
  padding: 25px;
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
  transition: all 0.5s;

  &:hover {
    transform: scale(1.05);
  }
  cursor: pointer;
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
  font-weight: 400;
  font-family: inter;
  margin: 0;
  cursor: pointer;
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
  cursor: pointer;
`;
const ItemBottomRowContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  cursor: pointer;
`;

const SearchResults: React.FC = (): ReactElement => {
  const { increaseBagQuantity, category, gender, data, setData } =
    useShoppingBag();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  }, [category, setData]);

  // console.log(data.length);

  // const handleItem = (item:any) => {
  //   console.log(data);
  // }

  return (
    <>
      <ResultsTitle>
        {gender} <TitleSpan>({data.length} results)</TitleSpan>
      </ResultsTitle>
      <SearchResultsContainer>
        {data.map((item) => (
          <ItemCard key={item.id}>
            <ItemImage src={item.image} alt={item.title}></ItemImage>
            <ItemTextContainer>
              <ItemTitle>{item.title}</ItemTitle>
              <ItemBottomRowContainer>
                <ItemPrice>£{item.price}</ItemPrice>
                <ItemBasketSaveContainer>
                  <HiOutlineShoppingBag
                    size={20}
                    onClick={() => increaseBagQuantity(item.id)}
                  />
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
