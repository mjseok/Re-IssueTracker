import React, { ReactNode } from 'react';
import styled from "styled-components";

const AuthPageLayout=({children}:childrenType)=>{
    return(
        <Container>
            <Main>
                {children}
            </Main>
        </Container>
    )
}

interface childrenType{
    children: ReactNode
}
const Container=styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-itmes:center;
    background-color: ${(props) => props.theme.color.shadeBgColor};
`;
const Main=styled.main`
    width:100%;
`;
export default AuthPageLayout;