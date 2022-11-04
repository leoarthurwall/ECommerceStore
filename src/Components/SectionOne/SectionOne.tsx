import styled from "styled-components"

const SectionOneImage = styled.div`
height: 100vh;
background-position: 50%;
background-size: cover;
position: relative;
background-image: url("https://pearsonlloyd.com/wp-content/uploads/2022/09/HOMEPAGE-6.jpg");
display: flex;
justify-content: center;
align-items: center;

cursor: pointer;
`;

const SectionOne = () => {
  return (
    <SectionOneImage></SectionOneImage>
  )
}

export default SectionOne