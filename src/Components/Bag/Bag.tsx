import React from 'react'
import styled from 'styled-components'

const BagContainer = styled.div`
    position: absolute;
    top: 80px;
    bottom:0px;
    right: ${({ isClosed}) => isClosed ? '0' : '-300px'}
    transition: .6s;
    width: 300px;
    background: red;

`

const Bag = () => {
  return (
    <BagContainer>Bag</BagContainer>
  )
}

export default Bag