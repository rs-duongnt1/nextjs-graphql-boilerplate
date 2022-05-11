import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#D2BBA3",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: 14,
          color: "#FFF",
          boxShadow: "none",
          borderRadius: "4px",
          textTransform: "inherit",
          fontFamily: ["Noto_Sans_JP"],
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: ["Noto_Sans_JP"],
          // "Noto_Sans_JP, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;",
        },
      },
    },
  },
});

interface ThemeProviderProps {
  children: JSX.Element;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}
