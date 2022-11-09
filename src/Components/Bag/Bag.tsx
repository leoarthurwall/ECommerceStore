import React from 'react'
import styled from 'styled-components'
import { ReactElement } from "react";


const BagContainer = styled.div<IisClosed>`
    position: absolute;
    top: 80px;
    bottom:0px;
    right: ${({ isClosed}) => isClosed ? '-350px' : '0px'};

    transition: .6s;
    width: 350px;
    background: #1E1E1E;
    border-radius: 5px 0 0 0; /*TL TR BR BL*/
`
const BagHeaderBox = styled.div`
width: 100%;
height: 20%;
display: flex;
justify-content: center;
adlgn-items: center;
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
    <BagContainer isClosed={isClosed}>
        <BagHeaderBox>
            Text
        </BagHeadeBox>
    </BagContainer>
  )
}

export default Bag