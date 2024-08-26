import React from 'react';
import {
    Route,
    Routes
} from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import HomePage from "./pages/static/HomePage";
import { ThemeProvider } from "styled-components";
import theme from "./components/styled/theme";
import GlobalStyles from "./components/styled/global/Global";
import Login from "./pages/static/Login";
import Register from "./pages/static/Register";
import Wholesale from "./pages/static/Wholesale";
import Stories from "./pages/dynamic/Stories";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
                <Routes>
                    <Route path="" element={<DefaultLayout />}>
                        <Route index element={<HomePage />} />
                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />
                        <Route path="wholesale" element={<Wholesale />}/>
                        <Route path="stories" element={<Stories />}/>
                    </Route>
                </Routes>
        </ThemeProvider>
    );
}

export default App;
