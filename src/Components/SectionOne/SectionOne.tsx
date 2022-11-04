import styled from "styled-components"

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
const Header = styled.h1`
width: 30%;
color: white;
font-family: inter;
font-weight: 600;
font-size: 3.5rem;
text-align: center;
@media (max-width: 1024px) {
font-size: 42px;
}
`
const SectionOne = () => {
  return (
    <SectionOneImage>
        <Header>The ultimate experience</Header>
    </SectionOneImage>
  )
}

export default SectionOne