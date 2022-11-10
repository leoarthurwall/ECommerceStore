import React from 'react'
import styled from 'styled-components'

const ItemContainer = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const ItemImage = styled.img`
height: 100%;
width: 20%;
object-fit: contain;
background: black;
`
const ItemCenter = styled.div`
display: flex;
flex-direction: column;
`
const ItemTitle = styled.h3`
font-size: 20px;
font-weight: 400px;
color: white;
margin: 0;
`
const ItemQuantity = styled.p`

margin:0;
`

const SideBarItem = () => {
  return (
    <ItemContainer>
        <ItemImage></ItemImage>
        <ItemCenter>
            <ItemTitle></ItemTitle>
            <ItemQuantity></ItemQuantity>
        </ItemCenter>
        <ItemRight>
            <ItemRemove></ItemRemove>
            <ItemPrice></ItemPrice>
            <ItemChangeQuantity></ItemChangeQuantity>
        </ItemRight>
    </ItemContainer>
  )
}

export default SideBarItem