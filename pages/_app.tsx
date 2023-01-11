import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {QueryClient, QueryClientProvider} from "react-query";
import React from "react";
import {RecoilRoot} from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </QueryClientProvider>
  );
}
