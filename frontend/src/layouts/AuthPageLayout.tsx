import React from 'react';
import styled from "styled-components";

const AuthPageLayout=({children}:ChildrenProps)=>{
    return(
        <Container>
            <Main>
                {children}
            </Main>
        </Container>
    )
}
type ChildrenProps = {
    children: React.ReactElement
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