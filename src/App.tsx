import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import HomePage from "./pages/static/HomePage";
import { ThemeProvider } from "styled-components";
import theme from "./components/styled/theme";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Routes>
                    <Route path="" element={<DefaultLayout />}>
                        <Route index element={<HomePage />} />
                    </Route>
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
