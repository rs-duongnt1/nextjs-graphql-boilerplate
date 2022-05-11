import "../styles/globals.css";
import type { AppProps } from "next/app";
import ThemeProvider from "@providers/ThemeProvider";
import { Provider } from "react-redux";
import { store } from "@store/index";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
