import styled from "styled-components"
const NavContainer = styled.nav`
width: 100vw;
height: 80px;
display: flex;
background: red;
align-items: center;
justify-content: space-between;
`
const Logo = styled.h1`
`
const LinkContainer = styled.ul`

`
const SearchContainer = styled.input`

`
const Navbar = () => {
  return (
    <NavContainer>
        <Logo>E Commerce Store</Logo>
        <LinkContainer></LinkContainer>
        <SearchContainer></SearchContainer>
    </NavContainer>
  )
}

export default Navbar