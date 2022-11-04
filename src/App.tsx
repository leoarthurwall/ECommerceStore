import styled from "styled-components"
import Navbar from "./Components/Navbar/Navbar"
import SectionOne from "./Components/SectionOne/SectionOne";

const AppContainer = styled.div`
display: flex;
height: 100vh;
width: 100VW;
flex-direction: column;
`

function App() {
  return (
    <AppContainer >
      <Navbar />
      <SectionOne />
    </AppContainer>
  );
}

export default App;
