import { createTheme } from "@mui/system";

export const themeFontHind = createTheme({
    typography: {
      fontFamily: 'Raleway, Arial',
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'Raleway';
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            src: local('Raleway'), local('Raleway-Regular'), url(https://fonts.googleapis.com/css2?family=Crete+Round&family=Hind:wght@700&family=Inter+Tight&display=swap) format('woff2');
            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
          }
        `,
      },
    },
  });