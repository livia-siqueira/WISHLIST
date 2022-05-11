import type { AppProps } from "next/app";
import { GlobalStyles } from "../shared/styles/global";
import { Provider, useCreateStore } from "../store";

function MyApp({ Component, pageProps }: AppProps) {
  const createStore = useCreateStore(pageProps.initialZustandState);
  return (
    <Provider createStore={createStore}>
      <GlobalStyles />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
