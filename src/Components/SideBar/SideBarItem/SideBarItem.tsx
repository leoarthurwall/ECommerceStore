import React from 'react'
import styled from 'styled-components'

const ItemContainer = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const SideBarItem = () => {
  return (
    <ItemContainer>
        <ItemImage></ItemImage>
        <ItemCenter>
            <Itemtitle></Itemtitle>
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