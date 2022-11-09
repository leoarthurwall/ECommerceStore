import React from 'react'
import styled from 'styled-components'
import { ReactElement } from "react";


const BagContainer = styled.div<IisClosed>`
    position: absolute;
    top: 80px;
    bottom:0px;
    right: ${({ isClosed}) => isClosed ? '0' : '-300px'}
    transition: .6s;
    width: 300px;
    background: red;

`
interface IisClosed {
    isClosed: Boolean;
}

type Props = {
    isClosed: Boolean;
}

const Bag:  React.FC<Props> = (Props): ReactElement => {
    const { isClosed } = Props;
  return (
    <BagContainer isClosed={isClosed}>Bag</BagContainer>
  )
}

export default Bag