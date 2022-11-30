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
  align-items: center;
  @media (max-width: 500px) {
    justify-content: center;
  }
`;
const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 40px;

  @media (max-width: 500px) {
    align-items: center;
  }
`;
const Header = styled.h1`
  color: white;
  font-family: inter;
  font-weight: 500;
  font-size: 3.8vw;
  text-align: left;
  margin: 0;
  @media (max-width: 1024px) {
    font-size: 60px;
  }
  @media (max-width: 500px) {
    font-size: 42px;
    text-align: center;
    margin-top: 50px;
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
        <ShopButton to="/men">
          Shop Men's
          <HiOutlineArrowNarrowRight />
        </ShopButton>
        <ShopButton to="/women">
          Shop Women's
          <HiOutlineArrowNarrowRight />
        </ShopButton>
      </LeftContainer>
    </SectionOneImage>
  );
};
