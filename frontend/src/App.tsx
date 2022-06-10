import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom" 
import { ThemeProvider } from "styled-components";
import { GlobalStyle,theme } from "./layouts/GlobalStyle";
import {IssueListPage,IssueCreatePage,IssueDetailPage,MilestoneCreatePage,MilestoneDetailPage,MilestoneEditPage,MilestoneListPage,LabelListPage} from "./pages/index";
const App=()=>{
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <BrowserRouter>
            <Routes>
                <Route path='/issues' element={<IssueListPage />} />
                <Route path='/issues/new' element={<IssueCreatePage/>} />
                <Route path='/issues/:id' element={<IssueDetailPage/>} />
                <Route path='/milestones/new' element={<MilestoneCreatePage/>} />
                <Route path='/milestones/:id' element={<MilestoneDetailPage/>} />
            </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )
    
}
export default App;