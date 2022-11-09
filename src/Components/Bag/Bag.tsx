import React from 'react'
import styled from 'styled-components'
import { ReactElement } from "react";


const BagContainer = styled.div<IisClosed>`
    position: absolute;
    top: 80px;
    bottom:0px;
    right: ${({ isClosed}) => isClosed ? '-300px' : '0px'};

    transition: .6s;
    width: 300px;
    background: #1E1E1E;
    border-radius: 5px 0 0 0; /*TL TR BR BL*/


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
    <BagContainer isClosed={isClosed}></BagContainer>
  )
}

export default Bag