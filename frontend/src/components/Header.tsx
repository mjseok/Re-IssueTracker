import React from 'react';
import styled from 'styled-components';
import {FaGithub} from 'react-icons/fa'
import { Link } from 'react-router-dom';
const Header=()=>{

    return (
        <Component>
            <Link to='/issues'>
                <FaGithub size="42" color="#ffffff"/>
            </Link>
            <Text>IssueTracker 22ver</Text>
        </Component>
    )
}
const Component= styled.header`
    display:flex;
    width:100%;
    height:100px;
    background-color:${({ theme }) => theme.color.headerBgColor};
    align-items:center;
    justify-content:center;
    margin:auto 0;
    color:${({ theme }) => theme.color.white};
`
const Text=styled.div`
    margin-left:10px;
    font-family: Arial;
`;
export default Header;