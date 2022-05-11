import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../shared/styles/global";
import { theme } from "../shared/styles/themes";
import { Provider, useCreateStore } from "../store";

function MyApp({ Component, pageProps }: AppProps) {
  const createStore = useCreateStore(pageProps.initialZustandState);
  return (
    <Provider createStore={createStore}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
