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
display: flex;
list-style-type: none;
gap: 1rem
`
const SearchContainer = styled.input`

`
const Links = styled.li`
    margin: 0;
    padding: 0;
`
const Navbar = () => {
  return (
    <NavContainer>
        <Logo>E Commerce Store</Logo>
        <LinkContainer>
            <Links>Men</Links>
            <Links>Women</Links>
        </LinkContainer>
        <SearchContainer></SearchContainer>
    </NavContainer>
  )
}

export default Navbar