import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

const theme={
    color:{
        textColor:'#24292e',
        headerBgColor: '#24292e'
    },
    fontSize: {
        xl: '32px',
        lg: '20px',
        md: '16px',
        sm: '14px',
        xs: '12px',
    }
};

const GlobalStyle= createGlobalStyle`
    ${reset}
    /*other css*/
`
export {GlobalStyle,theme}