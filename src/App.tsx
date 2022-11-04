import styled from "styled-components"

const AppContainer = styled.div`
display: flex;
height: 100vh;
width: 100VW;
`
const Header = styled.header`
font-size: 30px;
font-weight: bold;
text-align: center;
`
function App() {
  return (
    <AppContainer >
      <Header className="App-header">
        <h1>hello ecommerce store</h1>
      </Header>
    </AppContainer>
  );
}

export default App;
