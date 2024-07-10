import { createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;

        @font-face {
            font-family: 'HarmoniaSansProCyr-Black';
            src: url('../../assets/fonts/Harmonia/HarmoniaSansProCyr-Black.ttf') format('truetype');
        }
        @font-face {
            font-family: 'HarmoniaSansProCyr-Bold';
            src: url('../../assets/fonts/Harmonia/HarmoniaSansProCyr-Bold.ttf') format('truetype');
        }
        @font-face {
            font-family: 'HarmoniaSansProCyr-SemiBd';
            src: url('../../assets/fonts/Harmonia/HarmoniaSansProCyr-SemiBd.ttf') format('truetype');
        }
        @font-face {
            font-family: 'Lexend-Regular';
            src: url('../../assets/fonts/Lexend/Lexend-Regular.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
        }
        @font-face {
            font-family: 'Lexend-Medium';
            src: url('../../assets/fonts/Lexend/Lexend-Medium.ttf') format('truetype');
            font-weight: 500;
            font-style: normal;
        }
        @font-face {
            font-family: 'Lexend-Black';
            src: url('../../assets/fonts/Lexend/Lexend-Black.ttf') format('truetype');
            font-weight: 900;
            font-style: normal;
        }
        @font-face {
            font-family: 'Lexend-Bold';
            src: url('../../assets/fonts/Lexend/Lexend-Bold.ttf') format('truetype');
            font-weight: bold;
            font-style: normal;
        }
        @font-face {
            font-family: 'Lexend-Light';
            src: url('../../assets/fonts/Lexend/Lexend-Light.ttf') format('truetype');
            font-weight: 300;
            font-style: normal;
        }

    }
    
`