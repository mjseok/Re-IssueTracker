import React from "react";
import styled from "styled-components";
import AuthPageLayout from "../../layouts/AuthPageLayout";
const LoginPage=()=>{

    return(
        <AuthPageLayout>
            <>
                <Title>Re-IssueTrakcer</Title>
                <Form>폼양식</Form>
            </>
        </AuthPageLayout>
    )
}
const Title=styled.h1`
    font-size: ${(props) => props.theme.fontSize.xl};
    font-weight: bold;
    margin: 1.5rem;
    text-align: center;
`;
const Form=styled.form`
`;
export default LoginPage;
