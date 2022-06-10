import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

const theme={
    color:{
        textColor:'#24292e',
        headerBgColor: '#24292e',
        mainColor:'#ffffff',
        white:'#ffffff'
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
    a:link { 
        text-decoration: none;
    }
        
    a:visited { 
        text-decoration: none;
    }
        
    a:hover { 
        text-decoration: underline;
    }

`
export {GlobalStyle,theme}