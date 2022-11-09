import React from 'react'
import styled from 'styled-components'

const BagContainer = styled.div`
    position: absolute;
    top: 80px;
    bottom:0px;
    right: 0px;
    width: 300px;
    background: red;

`

const Bag = () => {
  return (
    <BagContainer>Bag</BagContainer>
  )
}

export default Bag