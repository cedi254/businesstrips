import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

function AppRouter() {
    return(
    <BrowserRouter>
        <App></App>
        <Routes>
            <Route path='/' element={App}/>
            <Route path='/create' element={Add}/>
        </Routes>
    </BrowserRouter>
    )
}S

export default AppRouter