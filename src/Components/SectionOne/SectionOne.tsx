import styled from "styled-components";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { ReactElement } from "react";

const SectionOneImage = styled.div`
  height: 100vh;
  background-position: 50%;
  background-size: cover;
  position: relative;
  // background-image: url("https://static.zara.net/photos///contents/mkt/spots/aw22-north-collection/subhome-xmedia-44//w/3004/IMAGE-landscape-fill-8419161f-eed8-40f7-a5cf-cf4db412f197-default_0.jpg?ts=1667462458195");
  background-image: url("https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/enUS/Images/xcat-fw22-holiday-october-matching-sets-dual-gender-hp-large-mh-d_tcm221-958768.jpg");

  display: flex;
  justify-content: left;
  align-items: center;
`;
const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  gap: 1rem;
  padding: 50px;
`;
const Header = styled.h1`
  color: white;
  font-family: inter;
  font-weight: 600;
  font-size: 3.5rem;
  text-align: left;
  margin: 0;
  @media (max-width: 1024px) {
    font-size: 42px;
  }
`;
const ShopButton = styled.button`
  background-color: white;
  border: none;
  color: black;
  padding: 15px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-family: inter;
  max-width: fit-content;
  font-weight: 500;

  display: flex;
  align-items: center;
  gap: 10px;

  cursor: pointer;

  &:hover {
    color: grey;
  }
`;

type Props = {
  setResultsToggle: (val: Boolean) => void;
  setCategory: (val: string) => void;
  setGender: (val: string) => void;
};

const SectionOne: React.FC<Props> = (Props): ReactElement => {
  const { setResultsToggle, setCategory, setGender } = Props;

  const handleMenClick = () => {
    setResultsToggle(true);
    setCategory("men's%20clothing");
    setGender("Men's clothing");

  };
  const handleWomenClick = () => {
    setResultsToggle(true);
    setCategory("women's%20clothing");
    setGender("Women's clothing");
  };

  return (
    <SectionOneImage>
      <LeftContainer>
        <Header>The ultimate experience</Header>
        <ShopButton onClick={handleMenClick}>
          Shop Mens
          <HiOutlineArrowNarrowRight />
        </ShopButton>
        <ShopButton onClick={handleWomenClick}>
          Shop Womens
          <HiOutlineArrowNarrowRight />
        </ShopButton>
      </LeftContainer>
    </SectionOneImage>
  );
};

export default SectionOne;
