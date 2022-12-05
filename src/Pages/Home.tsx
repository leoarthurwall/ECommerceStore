import styled from "styled-components";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { ReactElement } from "react";
import { NavLink } from "react-router-dom";

const SectionOneImage = styled.div`
  height: 100vh;
  background-position: 50%;
  background-size: cover;
  position: relative;
  // background-image: url("https://static.zara.net/photos///contents/mkt/spots/aw22-north-collection/subhome-xmedia-44//w/3004/IMAGE-landscape-fill-8419161f-eed8-40f7-a5cf-cf4db412f197-default_0.jpg?ts=1667462458195");
  background-image: url("https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/enUS/Images/xcat-fw22-holiday-october-matching-sets-dual-gender-hp-large-mh-d_tcm221-958768.jpg");

  display: flex;
  justify-content: left;
  align-items: start;
  @media (max-width: 1024px) {
    background-position: 40%;
  }
  @media (max-width: 500px) {
    align-items: center;

    justify-content: center;
    background-position: left;
  }
  @media (max-height: 500px) {
    align-items: center;
    justify-content: center;
  }
`;
const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 40px;
  margin-top: 15vw;

  @media (max-width: 500px) {
    align-items: center;
    margin-top: 0;
  }
  @media (max-height: 500px) {
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 5vw;
    gap: 35vw;
  }
`;
const Header = styled.h1`
  color: white;
  font-family: inter;
  font-weight: 200;
  font-size: 60px;
  text-align: left;
  margin: 0;
  margin-bottom: 50px;

  @media (max-width: 500px) {
    font-size: 10vw;
    text-align: center;
  }
  @media (max-height: 500px) {
    font-size: 10vh;
    margin-bottom: 0;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (max-width: 500px) {
    align-items: center;
  }
  @media (max-height: 500px) {
    align-items: center;
  }
`;
const ShopButton = styled(NavLink)`
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
  transition: 0.2s;
  clear: both;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;

  display: flex;
  align-items: center;
  gap: 10px;

  cursor: pointer;

  &:hover {
    color: grey;
  }
`;

export const Home: React.FC = (): ReactElement => {
  return (
    <SectionOneImage>
      <LeftContainer>
        <Header>
          The ultimate <br /> experience
        </Header>
        <ButtonWrapper>
          <ShopButton to="/men">
            Shop Men
            <HiOutlineArrowNarrowRight />
          </ShopButton>
          <ShopButton to="/women">
            Shop Women
            <HiOutlineArrowNarrowRight />
          </ShopButton>
        </ButtonWrapper>
      </LeftContainer>
    </SectionOneImage>
  );
};
