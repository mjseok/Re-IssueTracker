import React from 'react'
import styled from 'styled-components';
import Header from '../components/Header';

const MainPageLayout = ({children}:ChildrenProps)=>{

    return (
        <Container>
            <Header/>
            <Main>{children}</Main>
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
    flex-direction:column;
    background-color:${({ theme }) => theme.color.mainColor};

`;
const Main= styled.main`
    width:100%;
`;
export default MainPageLayout