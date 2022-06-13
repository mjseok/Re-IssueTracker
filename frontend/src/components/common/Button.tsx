import React from 'react';
import styled, { CSSProperties } from 'styled-components';

const Button=({role,style}:ButtonProps)=>{
    return(
        <ButtonWrapper
            type={role}
            style={style}>

        </ButtonWrapper>
    )
}
interface ButtonProps{
    role:'button' | 'submit',
    style:CSSProperties
}
const ButtonWrapper=styled.button`
    
`;
export default Button;
