import styled from "styled-components"
const NavContainer = styled.nav`
width: 100vw;
height: 80px;
display: flex;
background: red;
align-items: center;
justify-content: space-between;
padding: 0 40px;
box-sizing: border-box;
`
const Logo = styled.h1`
color: #fff;

`
const LinkContainer = styled.ul`
display: flex;
list-style-type: none;
gap: 1.5rem;
font-size: 18px;

`
const SearchBar = styled.input`
background-color: rgba(0, 0, 0, 0) !important;
border: none !important;
border-bottom: 1px solid #fff !important;
box-shadow: none !important;
height: 40px;
font-size: 18px;
font-weight: 400;
color: #fff;
padding: 0 15px;
max-width: 150px;

&:focus {
  outline: none;
}
::placeholder {
  color: #fff;
}
`
const Links = styled.li`
    margin: 0;
    padding: 0;
    color: #fff;


`
const Navbar = () => {
  return (
    <NavContainer>
        <Logo>E Commerce Store</Logo>
        <LinkContainer>
            <Links>Men</Links>
            <Links>Women</Links>
        </LinkContainer>
        <SearchBar type="text" placeholder="Search..."></SearchBar>
    </NavContainer>
  )
}

export default Navbar