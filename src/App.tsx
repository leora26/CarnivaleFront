import {ThemeProvider} from "styled-components";
import theme from "./components/styled/theme";
import GlobalStyles from "./components/styled/global/Global";
import RouterSetup from "./pages/RouterSetup";
import {HomepageContext, HomepageContextProvider} from "./context/HomepageContext";

function App() {


    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles/>
            <HomepageContextProvider>
                <RouterSetup/>
            </HomepageContextProvider>
        </ThemeProvider>
    );
}

export default App;
