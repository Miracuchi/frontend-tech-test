/* eslint-disable no-console */
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import NextNProgress from 'nextjs-progressbar';

import { ViewportProvider } from '@onrewind/ui';

import Layout from '$components/layout';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const webConfig = pageProps.webConfig;

  console.log('la valeur de pageprops', pageProps, 'components', Component);

  return (
    <>
      <DefaultSeo title="Origins Digital technical test" description="" />
      <QueryClientProvider client={queryClient}>
        <ViewportProvider>
          <NextNProgress color="var(--secondary)" />
          <Layout config={webConfig}>
            <Component {...pageProps} />
          </Layout>
        </ViewportProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
