import styled from "styled-components"

const SectionOneImage = styled.div`
height: 100vh;
background-position: 50%;
background-size: cover;
position: relative;
background-image: url("https://static.zara.net/photos///contents/mkt/spots/aw22-north-collection/subhome-xmedia-44//w/3004/IMAGE-landscape-fill-8419161f-eed8-40f7-a5cf-cf4db412f197-default_0.jpg?ts=1667462458195");
display: flex;
justify-content: center;
align-items: center;

cursor: pointer;
`;
const Header = styled.h1`
width: 70%;
color: white;
font-family: inter;
font-weight: 600;
font-size: 6rem;
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